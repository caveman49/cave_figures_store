import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const FigureDetails = () => {
  const { id } = useParams();
  const [figure, setFigure] = useState([]);
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/figures/${id}`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setFigure(response.data);
      })
      .catch((e) => console.log("catch", e));
  }, [id]);
  return (
    <div>
      <p>Name: {figure.name}</p>
      <p>Description: {figure.description}</p>
      <p>Price: {figure.price}</p>
      <p>Rating: {figure.rating}</p>
      <p>Featured?: {figure.is_featured}</p>
      <Link to={`/figures/edit/${id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default FigureDetails;
