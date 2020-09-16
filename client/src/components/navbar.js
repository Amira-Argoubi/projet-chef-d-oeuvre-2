import React, { Component } from "react";
import "../App.css";
import {
  MDBNavbar,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
} from "mdbreact";
import Logo from "./images/lo.png";

import Inscription from "./inscription";
import Connex from "./connexion";

import { logout, getUser } from "../actions/auth";
import { connect } from "react-redux";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.props.getUser();
  }
  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    //console.log("z", this.props.user);
    const bgPink = { backgroundColor: "#ffffff" };
    return (
      <div>
        <header>
          <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
            {/************* * logo ********************************************/}
            <MDBNavbarBrand href="/">
              <strong className="logo-nav">
                <img
                  src={Logo}
                  alt="logo"
                  style={
                    ({ width: "300px" }, { height: "100px", width: "150px" })
                  }
                />
              </strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.onClick}
              className="togle"
              style={{ backgroundColor: "aqua" }}
            />
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <br />
                  <MDBNavLink
                    className="lien-navbar"
                    style={{ color: "blue" }}
                    to="/"
                  >
                    Accueil
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem active>
                  <br />
                  <MDBNavLink
                    className="lien-navbar"
                    style={{ color: "blue" }}
                    to="/"
                  >
                    A propos
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem active>
                  <br />
                  <MDBNavLink
                    className="lien-navbar"
                    style={{ color: "blue" }}
                    to="/"
                  >
                    Contact
                  </MDBNavLink>
                </MDBNavItem>

                {this.props.user.role === "Aide ménagère" ? (
                  <MDBNavItem>
                    <br />
                    <MDBNavLink
                      className="lien-navbar"
                      to="/aide"
                      style={{ color: "blue" }}
                    >
                      Annonce
                    </MDBNavLink>
                  </MDBNavItem>
                ) : (
                  ""
                )}

                {this.props.user.role === "Client" ? (
                  <MDBNavItem>
                    <div className="link-nav">
                      <MDBNavLink
                        className="lien-navbar"
                        style={{ color: "blue" }}
                        to="/client-Attente"
                      >
                        Client-Attente
                      </MDBNavLink>
                      <MDBNavLink
                        className="lien-navbar"
                        style={{ color: "blue" }}
                        to="/modif-profil"
                      >
                        Mon profil
                      </MDBNavLink>
                      <MDBNavLink
                        className="lien-navbar"
                        style={{ color: "blue" }}
                        to="/Avis"
                      >
                        Avis
                      </MDBNavLink>
                    </div>
                  </MDBNavItem>
                ) : (
                  ""
                )}
                {this.props.user.role === "Aide ménagère" ? (
                  <MDBNavItem>
                    <div div className="link-nav">
                      <MDBNavLink
                        className="lien-navbar"
                        style={{ color: "blue" }}
                        to="/gestion-reservation"
                      >
                        Mes réservations
                      </MDBNavLink>
                      <MDBNavLink
                        className="lien-navbar"
                        style={{ color: "blue" }}
                        to="/modif-profil"
                      >
                        Mon profil
                      </MDBNavLink>
                    </div>
                  </MDBNavItem>
                ) : (
                  ""
                )}
                <MDBNavItem>
                  {this.props.user.role === "Admin" ? (
                    <div div className="link-nav">
                      <MDBNavLink
                        className="lien-navbar"
                        style={{ color: "blue" }}
                        to="/gestion-reserv"
                      >
                        Gestion-reserv
                      </MDBNavLink>

                      <MDBNavLink
                        className="lien-navbar"
                        style={{ color: "blue" }}
                        to="/modif-profil"
                      >
                        Mon profil
                      </MDBNavLink>
                    </div>
                  ) : (
                    ""
                  )}
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                {this.props.user.role ? (
                  <MDBBtn
                    gradient="blue"
                    style={{ borderRadius: "20px" }}
                    onClick={() => this.props.logout()}
                  >
                    Déconnexion{" "}
                  </MDBBtn>
                ) : (
                  <Connex />
                )}
                {this.props.user.role ? "" : <Inscription />}
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    aides: state.aides,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
