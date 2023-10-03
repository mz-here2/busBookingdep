import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };

  const handleClick = (e) => {
    try {
      dispatch({ type: "LOGOUT" });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Travella</span>
        </Link>
        {user && user.isAdmin === true ? (
          <div className="linNavItems">
            <Link to="/admin" style={{color: "white", margin:"15px", textDecoration: "none", fontSize:"20px"}}>
              <span >Admin Dashboard</span>
            </Link>
            {user.username}
            <button className="button" onClick={handleClick}>
              Logout
            </button>
          </div>
        ) : user && user.isAdmin === false ? (
          <div className="linNavItems">
            {" "}
            {user.username}
            <button className="button" onClick={handleClick}>
              Logout
            </button>
          </div>
        ) : (
          <div className="loutNavItems">
            <button onClick={handleRegister} className="navButton">
              Register
            </button>
            <button onClick={handleLogin} className="navButton">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
