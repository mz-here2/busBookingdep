import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <div className="siDesc">
        <h1 className="siTitle">{item?.title}</h1>
        <span className="siTaxiOp">Best offer. Don't miss.</span>
        <span className="siSubtitle">
         Television and Air conditioning available.
        </span>
        <span className="siFeatures">{item?.desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siDetailTexts">
          <span className="siPrice">Rs. {item?.price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/tickets/${item?._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
