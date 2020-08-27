import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInputGroup,
  MDBInput,
  MDBIcon,
} from "mdbreact";

import axios from "axios";

import { addAideToDB, getAideFromDB } from "../../actions/aideActionCreator";
import { getUser } from "../../actions/auth";

import { connect } from "react-redux";

/**************************************************************** */

class Postuler extends Component {
  state = {
    modal14: false,
    selectedFile: [],
    /************get user *****/
  };
  componentDidMount() {
    this.props.getUser();
    this.props.getAideFromDB();
  }
  /***************************** */
  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };
  /*************function upload img*********** */
  fileSelectedHandler = (e) => {
    this.setState({ selectedFile: e.target.files[0] });
  };

  uploadHandler = () => {
    const fd = new FormData();
    fd.append("file", this.state.selectedFile);
    axios
      .post("http://localhost:8000/image", fd)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  /************************************************************************* */
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
      <MDBContainer>
        <div className="text">
          <h1>
            {" "}
            <i class="fa fa-quote-left"></i>
            <span class="black">
              <p>Comment postuler ? </p>
            </span>
            <i class="fa fa-quote-right"></i>
          </h1>
        </div>
        {/* *******************modal******************* */}
        <center>
          <MDBBtn
            gradient="blue"
            onClick={this.toggle(14)}
            style={{ borderRadius: "20px" }}
          >
            Postuler maintenant
          </MDBBtn>
        </center>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>
            Postuler maintenant{" "}
          </MDBModalHeader>
          <MDBModalBody>
            <MDBInput
              onChange={(e) => this.setState({ nom: e.target.value })}
              label="Nom Prénom"
              outline
            />
            <MDBInput
              onChange={(e) => this.setState({ age: e.target.value })}
              label="Age"
              outline
            />
            <MDBInputGroup
              containerClassName="mb-3"
              prepend="ville"
              inputs={
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
              }
            />
            <MDBInput
              type="file"
              onChange={(e) => this.fileSelectedHandler(e)}
              outline
            />
            <MDBBtn color="dark" onClick={() => this.uploadHandler()}>
              Télécharger
            </MDBBtn>
            <MDBInputGroup
              containerClassName="mb-3"
              prepend="Sexe"
              inputs={
                <select
                  onChange={(e) => this.setState({ sexe: e.target.value })}
                  className="browser-default custom-select"
                >
                  <option value="0">Choisir...</option>
                  <option value="femme">Femme</option>
                  <option value="homme">Homme</option>
                </select>
              }
            />
            <MDBInput
              onChange={(e) => this.setState({ num: e.target.value })}
              label="Numéro téléphone"
              outline
            />
            <MDBInputGroup
              containerClassName="mb-3"
              prepend="Jour"
              inputs={
                <select
                  className="browser-default custom-select"
                  onChange={(e) => this.setState({ dispo: e.target.value })}
                >
                  <option>Choisir le jour</option>
                  <option value="Lundi">Lundi</option>
                  <option value="Mardi">Mardi</option>
                  <option value="Mercredi">Mercredi</option>
                  <option value="Jeudi">Jeudi</option>
                  <option value="Vendredi">Vendredi</option>
                  <option value="Samedi">Samedi</option>
                  <option value="Dimanche">Dimanche</option>
                </select>
              }
            />
            <MDBInputGroup
              containerClassName="mb-3"
              prepend="service"
              inputs={
                <select
                  className="browser-default custom-select"
                  style={{ width: "200px" }}
                  onChange={(e) => this.setState({ service: e.target.value })}
                >
                  <option value="">Choisir le service</option>
                  <option value="Nettoyage domestique">
                    Nettoyage domestique
                  </option>
                  <option value="Nettoyage de bureaux">
                    Nettoyage de bureaux
                  </option>
                  <option value="Nettoyage de fin de location">
                    Nettoyage de fin de location
                  </option>
                  <option value="Nettoyage des vitres">
                    Nettoyage des vitres
                  </option>
                  <option value="Nettoyage de tapis">Nettoyage de tapis</option>
                  <option value="Nettoyage des sols durs">
                    Nettoyage des sols durs
                  </option>
                </select>
              }
            />

            <MDBInput
              onChange={(e) => this.setState({ exp: e.target.value })}
              label="Expérience"
              outline
            />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(14)}>
              Close
            </MDBBtn>
            <MDBBtn
              gradient="blue"
              onClick={() =>
                this.props.addAide({
                  nom: this.state.nom,
                  age: this.state.age,
                  photo: this.state.selectedFile.name,
                  ville: this.state.ville,
                  exp: this.state.exp,
                  dispo: this.state.dispo,
                  num: this.state.num,
                  sexe: this.state.sexe,
                  service: this.state.service,
                  proprietaire: this.props.user._id, //get user id
                })
              }
            >
              Postuler
              <MDBIcon far icon="paper-plane" className="ml-2" />
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
        {/*************** **** card ****************/}
        <h1>Card Flip with Text</h1>

        <center>
          {" "}
          <div className="flip-card">
            <div className="flip-card-inner">
              {/* filter l'aide connectéà ce moment */}
              {this.props.aides
                .filter((el) => el.proprietaire == this.props.user._id)
                .map((el) => (
                  <>
                    <div className="flip-card-front">
                      <img
                        className="card-aide"
                        src={"http://localhost:8000/" + el.photo}
                        alt="Avatar"
                      />
                      <p>{el.nom}</p>
                    </div>
                    <div className="flip-card-back">
                      <h1>{el.age}</h1>
                      <p>Architect & Engineer</p>
                      <p>We love that guy</p>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </center>
      </MDBContainer>
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
    addAide: (el) => dispatch(addAideToDB(el)),
    getUser: () => dispatch(getUser()),
    getAideFromDB: () => dispatch(getAideFromDB()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Postuler);
