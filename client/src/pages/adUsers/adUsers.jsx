import React from "react";
import "./adUsers.css";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const AdUsers = () => {
  const { data } = useFetch(`http://localhost:8000/api/users`);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8000/api/users/${id}`);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {data?.map((item) => (
        <div className="user_item">
          <label>{item?.username}</label>
          <button onClick={() => handleDelete(item?._id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default AdUsers;
