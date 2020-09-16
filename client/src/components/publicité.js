import React from "react";
import "../App.css";
//import tof from "./images/ph1.png";

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBAnimation,
} from "mdbreact";

class Pub extends React.Component {
  state = {
    collapsed: false,
    lire: false,
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div id="apppage" className="sm-12 md-4 ">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol className="white-text text-center text-md-left mt-xl-5 mb-5">
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5 titre-pub">
                      <i class="fa fa-quote-left"></i> Un service d’aide à
                      domicile de<strong> qualité</strong>{" "}
                      <i class="fa fa-quote-right"></i>
                    </h1>
                    <hr className="hr-light" />
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    {/* <img src="http://template86631.motopreview.com/mt-demo/86600/86631/mt-content/uploads/2019/09/mt-1900-slider-img02.jpg" alt="tof" className="img-fluid" /> */}
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
        {/* /**************************** */}
        <div class="jumbotron jumbotron-fluid container" id="Apropos">
          <div class="container">
            <h4 class="display-4">A propos </h4>
            <br></br>
            <p class="lead">
              Nous les premiers, nous pensions que notre rôle se limiterait à
              permettre à des millions d’utilisateurs de commander des
              prestations de ménage plus facilement. Rapidement, nous avons
              réalisé que derrière une pièce qu’on fait briller, il y a des
              familles qui s’y épanouissent.
              <br></br>
              {!this.state.lire ? (
                <a
                  style={{ color: "#4b92dc" }}
                  onClick={() => this.setState({ lire: !this.state.lire })}
                >
                  Lire la suite ...
                </a>
              ) : null}
              {this.state.lire ? (
                <div>
                  Et derrière chaque heure de ménage effectuée, il y a un père,
                  une mère, aide ménagère, qui y trouve les ressources pour
                  prendre soin de ses proches. Ces enjeux nous obligent à
                  développer toujours plus loin les solutions pour changer la
                  vie des gens… Partout dans le monde où entre quatre murs, il y
                  a une pièce à nettoyer.
                </div>
              ) : null}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Pub;
