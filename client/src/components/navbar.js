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
  MDBIcon,
  MDBBtn,
} from "mdbreact";
import Logo from "./images/logo.png";

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
    console.log("z", this.props.user);
    const bgPink = { backgroundColor: "#ffffff" };
    return (
      <div>
        <header>
          <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
            <MDBNavbarBrand href="/">
              <strong className="logo-nav" style={{ color: "blue" }}>
                <img src={Logo} alt="logo" />
                <h2 style={{ fontFamily: "Gotham-book" }}>
                  i<span style={{ color: "rgb(230, 227, 20)" }}>C</span>
                  LEANit
                </h2>
              </strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.onClick} />
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink style={{ color: "blue" }} to="/">
                    <MDBIcon icon="home" fixed style={{ fontSize: "20px" }} />
                    Accueil
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem active>
                  <MDBNavLink style={{ color: "blue" }} to="/">
                    A propos
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem active>
                  <MDBNavLink style={{ color: "blue" }} to="/">
                    Contact
                  </MDBNavLink>
                </MDBNavItem>

                {this.props.user.role === "Aide ménagère" ? (
                  <MDBNavItem>
                    <MDBNavLink to="/aide" style={{ color: "blue" }}>
                      Aides ménagères
                    </MDBNavLink>
                  </MDBNavItem>
                ) : (
                  ""
                )}

                {this.props.user.role === "Client" ? (
                  <MDBNavItem>
                    <MDBNavLink style={{ color: "blue" }} to="/client-reserve">
                      Client-réservation
                    </MDBNavLink>
                  </MDBNavItem>
                ) : (
                  ""
                )}
                {this.props.user.role === "Aide ménagère" ? (
                  <MDBNavItem>
                    <MDBNavLink
                      style={{ color: "blue" }}
                      to="/gestion-reservation"
                    >
                      gestion-réservations
                    </MDBNavLink>
                  </MDBNavItem>
                ) : (
                  ""
                )}
                <MDBNavItem>
                  {this.props.user.role === "Admin" ? (
                    <MDBNavLink style={{ color: "blue" }} to="/gestion-users">
                      gestion-users
                    </MDBNavLink>
                  ) : (
                    ""
                  )}
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                {/* <MDBBtn
            gradient="blue"
            onClick={this.toggle}
            style={{ borderRadius: "20px" }}
          >
            Connexion
          </MDBBtn> */}
                {this.props.user.role ? (
                  <MDBBtn
                    gradient="blue"
                    style={{ borderRadius: "20px" }}
                    onClick={() => this.props.logout()}
                  >
                    logout{" "}
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
