import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Figures.css";

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
            <th>
              <Link to={`/figures/details/${element.id}`}> {element.name}</Link>
            </th>
            <th>{element.description}</th>
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

  //   <table class="table table-dark">
  //     <thead>
  //       <tr>
  //         <th scope="col">Name</th>
  //         <th scope="col">Description</th>
  //         <th scope="col">Price</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       <tr>
  //         <th scope="row">1</th>
  //         <td>Mark</td>
  //         <td>Otto</td>
  //         <td>@mdo</td>
  //       </tr>
  //       <tr>
  //         <th scope="row">2</th>
  //         <td>Jacob</td>
  //         <td>Thornton</td>
  //         <td>@fat</td>
  //       </tr>
  //       <tr>
  //         <th scope="row">3</th>
  //         <td>Larry</td>
  //         <td>the Bird</td>
  //         <td>@twitter</td>
  //       </tr>
  //     </tbody>
  //   </table>;

  return (
    <div className="text-center">
      <p>{result}</p>
    </div>
  );
}

export default Figures;
