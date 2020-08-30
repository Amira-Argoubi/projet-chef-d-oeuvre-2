import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Logo from "./images/logo.png";

const FooterPage = () => {
  return (
    <div className="footer-app" style={{ color: "black" }}>
      <hr style={{ backgroundColor: "rgba(29, 210, 177, 0.7)" }}></hr>
      <MDBFooter color="white" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <strong className="logo-nav" style={{ color: "blue" }}>
                <img src={Logo} alt="logo" />
                <h2 style={{ fontFamily: "Gotham-book" }}>
                  i<span style={{ color: "rgb(230, 227, 20)" }}>C</span>
                  LEANit
                </h2>
              </strong>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Link 1</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div
          className="footer-copyright text-center py-3"
          style={{ backgroundColor: "rgba(29, 210, 177, 0.7)" }}
        >
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default FooterPage;
