import React from "react";
import { MDBContainer } from "mdbreact";
import Logo from "./images/lo.png";

const FooterPage = () => {
  return (
    <div className="footer-app">
      <hr style={{ backgroundColor: "rgba(29, 210, 177, 0.7)" }}></hr>

      <footer id="footer" class="footer-1">
        <div class="main-footer widgets-dark typo-light">
          <div class="container">
            <div class="row row-footer">
              <div class="col-sm-3 col-md-4">
                <div class="widget subscribe no-box">
                  <h5 class="widget-title">
                    BIENVENUE<span></span>
                  </h5>

                  <strong className="logo-footer">
                    <img src={Logo} alt="logo" style={{ width: 120 }} />
                  </strong>
                </div>
              </div>

              <div class="col-sm-6 col-md-4 ">
                <div class="widget no-box">
                  <h5 class="widget-title">
                    Contactez-Nous<span></span>
                  </h5>
                  <ul class="contacts">
                    <li>
                      <i class="fas fa-envelope contact-icon"> </i>{" "}
                      amiraargoubisimplon@gmail.com
                    </li>
                    <li>
                      <i class="fas fa-map-marker-alt contact-icon"></i>{" "}
                      1003,Cité Olympique-Tunis
                    </li>
                    <li>
                      <i class="fas fa-phone-alt contact-icon"> </i> (+216)93
                      534 792
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-sm-3 col-md-4 ">
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
                    <a
                      class="btn button-footer"
                      href="#contact"
                      target="_blank"
                    >
                      Contact
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
