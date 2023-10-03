
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const Tickets = () => {
  const location = useLocation();
  const [city, setCity] = useState(location?.state?.city);


  const { data, loading, error } = useFetch(
    `http://localhost:8000/api/tickets?city=${city}`
  );


  return (
    <div>
      <Navbar />
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data?.map((item) => (
                  <SearchItem item={item} key={item?._id} />
                ))}
              </>
            )}
          </div>
        </div>
  );
};

export default Tickets;
