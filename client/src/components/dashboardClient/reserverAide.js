import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from "mdbreact";
import { getAideFromDB } from "../../actions/aideActionCreator";
import { addReservationToDB } from "../../actions/reservationAction";
import { getUser } from "../../actions/auth";
import Navbar from ".././navbar";
import { connect } from "react-redux";

/******************************************************** ******/
export class ReserverAide extends Component {
  state = {
    service: "",
    jour: "",
    ville: "",
    modal: false,
  };

  componentDidMount() {
    this.props.getAideFromDB();
    this.props.getUser();
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  /************************************************************ */
  render() {
    const villes = [
      "Bab El Bhar",
      "Bab Souika",
      "Carthage",
      "Cité El Khadra",
      "Sidi Hassine",
      "Sidi El Béchir",
      "Séjoumi",
      "Médina",
      "Le Kram",
      "Le Bardo",
      "La Marsa",
      "La Goulette",
      "Hraïria",
      "Ezzouhour",
      "Ettahrir",
      "Ouardia",
      "El Omrane supérieur",
      "El Omrane",
      "El Menzah",
      "El Kabaria",
      "Djebel Jelloud",
    ];
    return (
      <div className="accueil">
        {/* ******************navbar  *******************/}
        <div className="navbar">
          <Navbar
            user={this.props.user}
            modal={this.state.modal}
            toggle={this.toggle}
          />
        </div>

        {/**** * *****carousel *********/}

        {/* text */}
        <div className="text">
          <h1>
            {" "}
            <i class="fa fa-quote-left"></i>
            <span class="black">
              <p> Réservez votre ménage à domicile en un simple clic</p>
            </span>
            <i class="fa fa-quote-right"></i>
          </h1>
        </div>
        {/************ ************** les filtres ************************/}
        <div className="filtre container">
          {/* *********** filtre par délégation ***************/}
          <select
            className="browser-default custom-select"
            style={{ width: "200px" }}
            onChange={(e) => this.setState({ ville: e.target.value })}
          >
            <option>Choisir la Délégation</option>
            {villes.map((el) => (
              <option>{el}</option>
            ))}
          </select>
          {/* ***********filtre par jour ***************/}

          <select
            className="browser-default custom-select"
            style={{ width: "200px" }}
            onChange={(e) => this.setState({ jour: e.target.value })}
          >
            <option value="">Choisir le jour</option>
            <option value="Lundi">Lundi</option>
            <option value="Mardi">Mardi</option>
            <option value="Mercredi">Mercredi</option>
            <option value="Jeudi">Jeudi</option>
            <option value="Vendredi">Vendredi</option>
            <option value="Samedi">Samedi</option>
            <option value="Dimanche">Dimanche</option>
          </select>
          {/* ***********filtre par type de service ***************/}
          <select
            className="browser-default custom-select"
            style={{ width: "200px" }}
            onChange={(e) => this.setState({ service: e.target.value })}
          >
            <option value="">Choisir le service</option>
            <option
              value="Nettoyage domestique
"
            >
              Nettoyage domestique
            </option>
            <option
              value="Nettoyage de bureaux
"
            >
              Nettoyage de bureaux
            </option>
            <option
              value="Nettoyage de fin de location
"
            >
              Nettoyage de fin de location
            </option>
            <option
              value="Nettoyage des vitres
"
            >
              Nettoyage des vitres
            </option>
            <option
              value="Nettoyage de tapis
"
            >
              Nettoyage de tapis
            </option>
            <option
              value="Nettoyage des sols durs
 
"
            >
              Nettoyage des sols durs
            </option>
          </select>
        </div>
        {/* ***********cards *******************/}
        {/* fonction filtre */}
        <div className="cards container">
          {this.props.aides
            .filter((jr) =>
              this.state.jour === "" ? jr : jr.dispo === this.state.jour
            )
            .filter((dl) =>
              this.state.ville === "" ? dl : dl.ville === this.state.ville
            )
            .filter((serv) =>
              this.state.service === ""
                ? serv
                : serv.service === this.state.service
            )
            .map((el) => (
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="card-aide"
                      src={"http://localhost:8000/" + el.photo}
                      alt="Avatar"
                    />
                    <br></br>
                    <h2>{el.nom}</h2>

                    <hr className="line"></hr>
                    <h5>
                      Plus de détails <MDBIcon icon="angle-double-right" />
                    </h5>
                  </div>
                  <div className="flip-card-back">
                    <h1>{el.age}</h1>
                    <h4>{el.ville}</h4>
                    <h4>{el.exp}</h4>

                    <MDBBtn
                      color="amber"
                      onClick={() => addReservationToDB(el, this.props.user)}
                    >
                      Réserver
                    </MDBBtn>
                  </div>
                </div>
              </div>
            ))}
        </div>
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
export default connect(mapStateToProps, {
  getAideFromDB,
  getUser,
  addReservationToDB,
})(ReserverAide);
