import "./newTicket.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const New = () => {
  const [info, setInfo] = useState({});
  const [seatNums, setSeatNums] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const seatNumbers = seatNums?.split(",").map((seat) => ({ number: seat }));
    try {
      const newTicket = {
        ...info,
        seatNumbers,
      };

      await axios.post("/tickets", newTicket);
      navigate("/admin");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(info);
  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="titile"
          id="title"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="number"
          placeholder="price"
          id="price"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="city"
          id="city"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="desc"
          id="desc"
          onChange={handleChange}
          className="lInput"
        />

        <div className="formInput">
          <label>Seat Numbers</label>
          <textarea
            onChange={(e) => setSeatNums(e.target.value)}
            placeholder="give comma between seat numbers."
          />
        </div>
        <button onClick={handleClick} className="lButton">
          Create
        </button>
      </div>
    </div>
  );
};

export default New;
