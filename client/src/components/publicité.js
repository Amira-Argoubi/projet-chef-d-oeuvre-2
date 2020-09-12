import React from "react";
import "../App.css";
//import tof from "./images/ph1.png";

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation,
} from "mdbreact";

class Pub extends React.Component {
  state = {
    collapsed: false,
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div id="apppage">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                      <i class="fa fa-quote-left"></i> Un service d’aide à
                      domicile de<strong> qualité</strong>{" "}
                      <i class="fa fa-quote-right"></i>
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                      veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                      molestiae iste.
                    </h6>
                    <MDBBtn color="white">Reserver</MDBBtn>
                    <MDBBtn outline color="white" className="content">
                      Learn More
                    </MDBBtn>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    {/* <img src={tof} alt="tof" className="img-fluid" /> */}
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
        {/* /**************************** */}
        <div class="jumbotron jumbotron-fluid container">
          <div class="container">
            <h4 class="display-4">A propos </h4>
            <br></br>
            <p class="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Pub;
