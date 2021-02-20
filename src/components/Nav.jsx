import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../styles/nav.css"


const customstyle = {
  textDecoration: "none",
  color: "white",
  padding: "5px"
}


function Nav() {
  return <nav>
    <Link to="/" style={customstyle} ><h1 id="companyName">Nepal Property Dealer</h1> </Link>
    <ul className="nav-links">
      <Link to="/find"><li>    <Button variant="contained" color="primary">
        Buy
    </Button></li></Link>
      <Link to="/sell"><li>    <Button variant="contained" color="primary">
        sell
    </Button></li></Link>



    </ul>
  </nav>

}

export default Nav;