import React from "react";
import {Container} from "react-bootstrap";

function Footer() {
  const year = new Date().getFullYear();
  return (   <Container fluid>
    <footer>
      <p className="footer-paragraph">Copyright A&N ⓒ {year}</p>
    </footer></Container>
  );
}

export default Footer;
