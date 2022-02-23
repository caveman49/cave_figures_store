import { Link } from "react-router-dom";
// import { Button, Stack } from "react-bootstrap";
// import Container from "react-bootstrap/Container";

function NavBar() {
  return (
    <div className="text-center">
      <Link to="/">
        <h1>Action Figures Nostalgia</h1>
      </Link>
      <Link to="/figures">
        <p>View Figures</p>
      </Link>
      <Link to="/figures/new">
        <p>Add Figure</p>
      </Link>
    </div>
  );
}

export default NavBar;
