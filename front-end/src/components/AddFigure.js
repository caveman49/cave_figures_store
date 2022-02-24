import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddFigure() {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [figure, setFigure] = useState([]);

  const HandleChange = (event) => {
    setFigure({ ...figure, [event.target.name]: event.target.value });
  };
  const HandleSubmit = (event) => {
    event.preventDefault();
    Object.keys(figure).length === 4 &&
      axios.post(`${URL}/figures`, figure).then(() => navigate(`/figures`));
  };
  return (
    <div className="text-center">
      <form onSubmit={HandleSubmit}>
        <label className="label" for="name">
          Name
        </label>
        <br />
        <input
          type="text"
          value={figure.name}
          name="name"
          placeholder="name"
          onChange={HandleChange}
        />
        <br />
        <br />
        <label className="label" for="description">
          Description
        </label>
        <br />
        <input
          type="text"
          value={figure.description}
          name="description"
          placeholder="description"
          onChange={HandleChange}
        />
        <br />
        <br />
        <label className="label" for="price">
          Price
        </label>
        <br />
        <input
          type="number"
          value={figure.price}
          name="price"
          placeholder="price"
          onChange={HandleChange}
        />
        <br />
        <br />
        <label className="label" for="rating">
          Rating
        </label>
        <br />
        <input
          type="text"
          value={figure.rating}
          name="rating"
          placeholder="rating"
          onChange={HandleChange}
        />
        <br />
        <br />
        <label className="label" for="is_featured">
          Is Featured?
        </label>
        <br />
        <input
          type="text"
          value={figure.is_featured}
          name="is_featured"
          placeholder="featured?"
          onChange={HandleChange}
        />
        <br />
        <br />
        <button type="submit">CREATE FIGURE</button>
      </form>
    </div>
  );
}
export default AddFigure;
