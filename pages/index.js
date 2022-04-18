import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "../components/layout/Jumbotron";
import FooterPage from "../components/layout/Footer";
import Item from "../components/Item";

function HomePage(props) {
  return (
    <div>
      <Jumbotron></Jumbotron>
      <Item />
      <FooterPage></FooterPage>
    </div>
  );
}

export default HomePage;
