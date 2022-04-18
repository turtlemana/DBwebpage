import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Button, Container, Row, Col } from "react-bootstrap";
import classes from "./Jumbotron.module.css";

function Jumbotron(props) {
  return (
    <div className={classes.jumbotron}>
      <h1 className={classes.jumbotitle}>
        SungkyunKwan University Financial DataBase
      </h1>
      <p className={classes.jumbotext}>
        Korean / American Financial data, Crypto currency
      </p>
      <p>
        <Button variant="dark" className={classes.jumbobutton}>
          View DB
        </Button>
      </p>
    </div>
  );
}

export default Jumbotron;
