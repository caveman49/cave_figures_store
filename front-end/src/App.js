import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Figures from "./components/Figures";
import AddFigure from "./components/AddFigure";
import FigureDetails from "./components/FigureDetails";
import EditFigure from "./components/EditFigure";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/figures" element={<Figures />} />
        <Route path="/figures/new" element={<AddFigure />} />
        <Route path="/figures/details/:id" element={<FigureDetails />} />
        <Route path="/transactions/edit/:index" element={<EditFigure />} />
      </Routes>
    </>
  );
}

export default App;

// import axios from "axios";
// import { useState, useEffect } from "react";
// const API = process.env.REACT_APP_API_URL;

// console.log(API);
// function App() {
//   const [days, setDays] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`${API}/figures`)
//       .then(
//         (response) => {
//           setDays(response.data);
//         },
//         (error) => console.log("get", error)
//       )
//       .catch((c) => console.warn("catch", c));
//   }, []);
//   return (
//     <div>
//       <ul>
//         {days.map((day) => (
//           <li key={day.name}>{day.price}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
