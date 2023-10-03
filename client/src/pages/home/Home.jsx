import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <div><img src="https://gst-contracts.s3.amazonaws.com/uploads/bcc/cms/asset/avatar/248671/banner_banner-new2.jpg" className="img"/></div>
        
      </div>
    </div>
  );
};

export default Home;