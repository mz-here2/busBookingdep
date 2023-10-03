import "./booking.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Booking = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { data, loading, error } = useFetch(
    `http://localhost:8000/api/tickets/find/${id}`
  );
  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates?.push(new Date(date).getTime());
      date?.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);

  const isAvailable = (seatNumber) => {
    const isFound = seatNumber?.unavailableDates?.some((date) =>
      alldates?.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedSeats(
      checked
        ? [...selectedSeats, value]
        : selectedSeats?.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedSeats?.map((seatId) => {
          const res = axios.put(`/tickets/availability/${seatId}`, {
            dates: alldates,
          });
          return res?.data;
        })
      );
      navigate("/");
    } catch (err) {}
  };

  const home = () => {
      navigate("/");
  };


  return (
    <>
      <div className="reserve">
        <div className="rContainer">
          <span>Select your Seats:</span>

          <div className="rSelectSeat">
            {data?.seatNumbers?.map((seatNumber) => (
              <div className="seat">
                <label>{seatNumber?.number}</label>
                <input
                  type="checkbox"
                  value={seatNumber?._id}
                  onChange={handleSelect}
                  disabled={!isAvailable(seatNumber)}
                />
              </div>
            ))}
          </div>

          <button onClick={handleClick} className="rButton">
            Reserve Now!
          </button>
          <button onClick={home} className="rButton">
            Home
          </button>
        </div>
      </div>
    </>
  );
};

export default Booking;
