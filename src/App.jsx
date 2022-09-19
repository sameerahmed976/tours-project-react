import { useEffect, useRef, useState } from "react";
import "./style/style.css";
import ToursCard from "./ToursCard";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  let renderValue = useRef(false);
  const url = "https://course-api.com/react-tours-project";

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      // console.log(tours);

      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const removeId = (id) => {
    // console.log(id);
    const newTours = tours.filter((ele) => {
      return ele.id !== id;
    });
    setTours(newTours);
  };

  useEffect(() => {
    if (renderValue === true) {
      fetchTours();
    }

    return () => {
      renderValue = true;
    };
  }, []);

  if (loading) {
    return <h1 className="loading">Loading ....</h1>;
  }

  if (tours.length === 0) {
    return (
      <>
        <h1>No tours left</h1>
        <button
          className="btn btn-refresh"
          onClick={() => {
            fetchTours();
          }}
        ></button>
      </>
    );
  }

  return (
    <main className="App">
      <h1 className="heading">Tours List</h1>
      <ToursCard tours={tours} removeId={removeId} />
    </main>
  );
}

export default App;
