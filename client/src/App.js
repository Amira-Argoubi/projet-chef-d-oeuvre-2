import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import Postuler from "./components/dashboardAide/postuler-aide";
import Accueil from "./components/accueil";
//import ReserverAide from "./components/dashboardClient/reserverAide";
import ReservationAttente from "./components/dashboardClient/clientAttente";
import Avis from "./components/dashboardClient/avisClient";

import GestionReservation from "./components/dashboardAide/gestion-reservation";
import { getAideFromDB } from "./actions/aideActionCreator";
import { getUser } from "./actions/auth";
import { login } from "./actions/auth";
import Profil from "./components/profil";
import Navbar from "./components/navbar";
import { connect } from "react-redux";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FooterPage from "./components/footer";
import GestionReserv from "./components/dashbordAdmin/gestion-admin";

export class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div className="navbar">
            <Navbar user={this.props.user} />
          </div>

          <Switch>
            <Route exact path="/" component={Accueil} />

            <Route exact path="/aide" component={Postuler} />
            <Route
              exact
              path="/client-Attente"
              component={ReservationAttente}
            />
            <Route exact path="/modif-profil" component={Profil} />

            <Route exact path="/Avis" component={Avis} />

            <Route
              exact
              path="/gestion-reservation"
              component={GestionReservation}
            />

            <Route exact path="/gestion-reserv" component={GestionReserv} />
          </Switch>
        </Router>
        <FooterPage />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    aides: state.aides,
    user: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signin: (el) => dispatch(login(el)),
    getUser: () => dispatch(getUser()),
    getAideFromDB: () => dispatch(getAideFromDB()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
