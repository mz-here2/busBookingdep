import React from "react";
import "./adTickets.css";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { Link } from "react-router-dom";

const AdUsers = () => {
  const { data } = useFetch(`http://localhost:8000/api/tickets`);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8000/api/tickets/${id}`);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Link
        to="/newTicket"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <button>Create New Ticket</button>
      </Link>
      {data?.map((item) => (
        <div className="user_item">
          <label>{item?.title}</label>
          <label>{item?.desc}</label>
          <button onClick={() => handleDelete(item?._id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default AdUsers;
