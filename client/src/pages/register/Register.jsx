import "./register.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const New = () => {
  const [info, setInfo] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        ...info,
      };

      await axios.post("/auth/register", newUser);
      navigate("/login");
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
        placeholder="username"
        id="username"
        onChange={handleChange}
        className="lInput"
      />
      <input
        type="text"
        placeholder="email"
        id="email"
        onChange={handleChange}
        className="lInput"
      />
      <input
        type="password"
        placeholder="password"
        id="password"
        onChange={handleChange}
        className="lInput"
      />
      <button onClick={handleClick} className="lButton">
        Register
      </button>
    </div>
  </div>
  );
};

export default New;
