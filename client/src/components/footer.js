import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBNavbarBrand,
} from "mdbreact";
import Logo from "./images/logo.png";

const FooterPage = () => {
  return (
    <div className="footer-app">
      <hr style={{ backgroundColor: "rgba(29, 210, 177, 0.7)" }}></hr>

      <footer id="footer" class="footer-1">
        <div class="main-footer widgets-dark typo-light">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="widget subscribe no-box">
                  <h5 class="widget-title">
                    BIENVENUE<span></span>
                  </h5>

                  <strong className="logo-nav" style={{ color: "blue" }}>
                    <img src={Logo} alt="logo" />
                    <h2 style={{ fontFamily: "Gotham-book" }}>
                      i<span style={{ color: "#febb0b" }}>C</span>
                      LEANit
                    </h2>
                  </strong>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="widget no-box">
                  <h5 class="widget-title">
                    Contactez-Nous<span></span>
                  </h5>
                  <ul class="contacts">
                    <li>
                      <i class="fas fa-envelope contact-icon"> </i>
                      amiraargoubisimplon@gmail.com
                    </li>
                    <li>
                      <i class="fas fa-map-marker-alt contact-icon"></i>
                      1003,Cité Olympique-Tunis
                    </li>
                    <li>
                      <i class="fas fa-phone-alt contact-icon"> </i>
                      (+216)93 534 792
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="widget no-box">
                  <h5 class="widget-title">
                    Suivez-Nous<span></span>
                  </h5>

                  <div className="réseaux sociaux">
                    <ul class="social-footer2">
                      <li class="">
                        <a
                          href="https://www.linkedin.com/in/amira-argoubi-749952164/"
                          target="_blank"
                          title="linkedIn"
                        >
                          <i class="fab fa-linkedin linked"></i>
                        </a>
                      </li>
                      <li class="">
                        <a
                          href="https://www.facebook.com/amira.marmour"
                          target="_blank"
                          title="facebook"
                        >
                          <i class="fab fa-facebook face"></i>
                        </a>
                      </li>
                      <li class="">
                        <a
                          title="github"
                          target="_blank"
                          href="https://github.com/Amira-Argoubi"
                        >
                          <i class="fab fa-github github"></i>
                        </a>
                      </li>
                    </ul>
                    <a class="btn button-footer" href="#." target="_blank">
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="footer-copyright text-center py-3"
          style={{ backgroundColor: "rgba(29, 210, 177, 0.7)" }}
        >
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="#"> ARGOUBY Amira </a>
          </MDBContainer>
        </div>
      </footer>
    </div>
  );
};

export default FooterPage;
{
  /* <hr style={{ backgroundColor: "rgba(29, 210, 177, 0.7)" }}></hr>
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
      </MDBFooter> */
}
