import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import "./Transactions.css";

function Figures() {
  const [figures, setFigures] = useState([]);
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/figures`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setFigures(response.data);
      })
      .catch((e) => console.log("catch", e));
  }, [API]);

  const HandleDelete = (event) => {
    axios.delete(`${API}/figures/${event.target.id}`, figures[event.target.id]);
    // eslint-disable-next-line
    setFigures(figures.filter((obj) => obj.id != event.target.id));
  };

  const result = figures.map((element, i) => {
    return (
      <div>
        <table>
          <tr>
            <th>{element.name}</th>
            <th>
              <Link to={`/figures/details/${i}`}>{element.description}</Link>
            </th>
            <th>{element.price}</th>
            <th>
              <button id={element.id} onClick={HandleDelete}>
                Delete
              </button>
            </th>
          </tr>
        </table>
      </div>
    );
  });

  return (
    <div className="text-center">
      <p>{result}</p>
    </div>
  );
}

export default Figures;
