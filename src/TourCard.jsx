import { useState } from "react";

const TourCard = ({ id, name, image, info, price, removeId }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="card">
      <img src={image} alt="card-image" className="card-image" />
      <article className="card-content">
        <article className="card-heading">
          <h1 className="card-title">{name} </h1>
          <p className="card-price">{price}</p>
        </article>
        <p className="card-text">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="btn btn-read-more"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "show less" : "show more"}
          </button>
        </p>

        <button
          className="btn btn-not-interested"
          onClick={() => {
            // console.log(id);
            // // console.log("click");
            removeId(id);
          }}
        >
          not interested
        </button>
      </article>
    </article>
  );
};

export default TourCard;
