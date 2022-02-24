import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditFigure() {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const { id } = useParams();
  const [figure, setFigure] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/figures/${id}`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setFigure(response.data);
      })
      .catch((error) => console.log("catch", error));
  }, []);
  const HandleChange = (event) => {
    setFigure({ ...figure, [event.target.name]: event.target.value });
  };
  const HandleSubmit = (event) => {
    event.preventDefault();
    !Object.values(figure).includes("") &&
      axios.put(`${URL}/figures/${id}`, figure).then(() => navigate(`/figure/details/${id}`));
  };
  return (
    <div className="New">
      <p>Edit this item</p>
      <form onSubmit={HandleSubmit}>
        <label className="label" for="date">
          Date
        </label>
        <br />
        <input type="text" value={figure.name} name="date" placeholder="date" onChange={HandleChange} />
        <br />
        <br />
        <label className="label" for="name">
          Name
        </label>
        <br />
        <input type="text" value={figure.description} name="name" placeholder="name" onChange={HandleChange} />
        <br />
        <br />
        <label className="label" for="amount">
          Amount
        </label>
        <br />
        <input type="number" value={figure.amount} name="amount" placeholder="amount" onChange={HandleChange} />
        <br />
        <br />
        <label className="label" for="from">
          Form
        </label>
        <br />
        <input type="text" value={figure.from} name="from" placeholder="from" onChange={HandleChange} />
        <br />
        <br />
        <button type="submit">Edit NEW ITEM</button>
      </form>
    </div>
  );
}
export default EditFigure;