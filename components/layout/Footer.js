import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Footer.module.css";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <div className={classes.footer}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">
                <div className={classes.footertext}>
                  SungkyunKwan University
                </div>
              </h5>
              <br></br>
              <p>SKKU Fintech Major</p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">
                <div className={classes.footertext}>Links</div>
              </h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Link 1</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 2</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://skb.skku.edu/FinTech/index.do">
              {" "}
              https://skb.skku.edu/FinTech/index.do{" "}
            </a>
          </MDBContainer>
        </div>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
