import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Sell from "./Sell";
import Footer from "./Footer";
import Home from "./RecentViews";
import Find from "./Find";
import Information from "./Information";
import axios from "axios";


import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {




  return (
    <Router>
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/sell" component={Sell} />
      <Route path="/find" component={Find} />
      <Route path="/" exact component={Information} />

      <Footer />
    </Router>

  );


}

export default App;