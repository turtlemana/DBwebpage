import classes from "./MainNavigation.module.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Button,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
function MainNavigation() {
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link href="/">
            <div className={classes.header}>DataBase</div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
            <Nav.Link>
              <Link href="/">
                <div className={classes.content}>Home</div>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/">
                <div className={classes.content}>About</div>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/">
                <div className={classes.content}>Databases</div>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/">
                <div className={classes.content}>Chart</div>
              </Link>
            </Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
          <Nav>
            <Nav.Link>
              <Link href="/new-meetup">
                <div className={classes.content}>Log in</div>
              </Link>
            </Nav.Link>
            <div className={classes.divider}>|</div>
          </Nav>
          <Button variant="outline-success">Sign up</Button>
          {/* </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
