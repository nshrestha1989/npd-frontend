import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (   <div class="container-fluid">
    <footer>
      <p class="footer-paragraph">Copyright A&N ⓒ {year}</p>
    </footer></div>
  );
}

export default Footer;
