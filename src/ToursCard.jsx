import TourCard from "./TourCard";

const ToursCard = ({ tours, removeId }) => {
  return (
    <>
      <section className="card-container">
        {tours.map((ele) => {
          return <TourCard {...ele} key={ele.id} removeId={removeId} />;
        })}
      </section>
    </>
  );
};

export default ToursCard;
