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
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCol,
} from "mdbreact";

import EditAide from "./editAide";

import axios from "axios";
import { deleteAideInDB } from "../../actions/aideActionCreator";
import {
  addAideToDB,
  getAideFromDB,
  // getOneAideFDB,
  // editAide,
} from "../../actions/aideActionCreator";
import { getUser } from "../../actions/auth";

import { connect } from "react-redux";

/**************************************************************** */

class Postuler extends Component {
  state = {
    modal14: false,
    selectedFile: [],
    dispo: [],
    // valueExiste: "",
    // existe: "",

    Lundi: false,
    Mardi: false,
    Mercredi: false,
    Jeudi: false,
    Vendredi: false,
    Samedi: false,
    Dimanche: false,

    /************get user *****/
  };
  componentDidMount() {
    this.props.getUser();
    this.props.getAideFromDB();
    //this.props.getOneAideFDB();
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
    console.log(this.props.aides);
    const aide = this.props.aides.filter(
      (el) => el.proprietaire._id.toString() === this.props.user._id.toString()
    );

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

    // const array = [...new Set(this.state.dispo)];
    const {
      Lundi,
      Mardi,
      Mercredi,
      Jeudi,
      Vendredi,
      Samedi,
      Dimanche,
    } = this.state;
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
            {/**************** * dropdown de disponibilité **************/}
            <MDBDropdown dropright>
              <MDBDropdownToggle caret color="primary">
                Disponibilité
              </MDBDropdownToggle>
              <MDBDropdownMenu basic>
                <MDBDropdownItem>
                  {" "}
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      value="Lundi"
                      class="custom-control-input"
                      id="defaultUnchecked"
                      onClick={() =>
                        this.setState({ Lundi: !this.state.Lundi })
                      }
                    />
                    <label class="custom-control-label" for="defaultUnchecked">
                      Lundi
                    </label>
                  </div>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  {" "}
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      value="Mardi"
                      class="custom-control-input"
                      id="defaultUnchecked2"
                      onClick={() =>
                        this.setState({ Mardi: !this.state.Mardi })
                      }
                    />
                    <label class="custom-control-label" for="defaultUnchecked2">
                      Mardi
                    </label>
                  </div>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  {" "}
                  <div class="custom-control custom-checkbox">
                    <input
                      value="Mercredi"
                      type="checkbox"
                      class="custom-control-input"
                      id="defaultUnchecked3"
                      onClick={() =>
                        this.setState({ Mercredi: !this.state.Mercredi })
                      }
                    />
                    <label class="custom-control-label" for="defaultUnchecked3">
                      Mercredi
                    </label>
                  </div>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  {" "}
                  <div class="custom-control custom-checkbox">
                    <input
                      onClick={() =>
                        this.setState({ Jeudi: !this.state.Jeudi })
                      }
                      value="Jeudi"
                      type="checkbox"
                      class="custom-control-input"
                      id="defaultUnchecked4"
                    />
                    <label class="custom-control-label" for="defaultUnchecked4">
                      Jeudi
                    </label>
                  </div>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  {" "}
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="defaultUnchecked5"
                      onClick={() =>
                        this.setState({ Vendredi: !this.state.Vendredi })
                      }
                      value="Vendredi"
                    />
                    <label class="custom-control-label" for="defaultUnchecked5">
                      Vendredi
                    </label>
                  </div>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  {" "}
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="defaultUnchecked6"
                      onClick={() =>
                        this.setState({ Samedi: !this.state.Samedi })
                      }
                      value="Samedi"
                    />
                    <label class="custom-control-label" for="defaultUnchecked6">
                      Samedi
                    </label>
                  </div>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  {" "}
                  <div class="custom-control custom-checkbox">
                    <input
                      onClick={() =>
                        this.setState({ Dimanche: !this.state.Dimanche })
                      }
                      value="Dimanche"
                      type="checkbox"
                      class="custom-control-input"
                      id="defaultUnchecked7"
                    />
                    <label class="custom-control-label" for="defaultUnchecked7">
                      Dimanche
                    </label>
                  </div>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>

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
                  dispo: [
                    Lundi ? "Lundi" : null,
                    Mardi ? "Mardi" : null,
                    Mercredi ? "Mercredi" : null,
                    Jeudi ? "Jeudi" : null,
                    Vendredi ? "Vendredi" : null,
                    Samedi ? "Samedi" : null,
                    Dimanche ? "Dimanche" : null,
                  ],
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

        {/* new card */}
        {/* filter l'aide connectéà ce moment */}

        <MDBCol>
          <div className="all-cards">
            {aide.map((el) => (
              <div>
                <div class="card-container">
                  <span class="pro">PRO</span>
                  <img
                    class="round"
                    src={"http://localhost:8000/" + el.photo}
                    style={({ width: "200px" }, { height: "200px" })}
                    alt="user"
                  />
                  <h3>{el.nom}</h3>
                  <h6>{el.ville}</h6>

                  <h6>{el.age}</h6>
                  <h6>{el.exp}</h6>
                  <p>
                    {el.service}
                    <br /> front-end developer
                  </p>
                  <div class="buttons">
                    {/* {!this.props.user.role &&
                    this.props.user.role !== "Aide ménagère" ? ( */}
                    {/* <button class="primary">Modifier</button> */}
                    <EditAide aide={el} />
                    {/* ) : this.props.user.role === "Client" ? (
                    // add réservation */}
                    <button
                      class="primary ghost"
                      onClick={() => this.props.deleteAide(el._id)}
                    >
                      Effacer{" "}
                    </button>
                    {/* ) : ( "" )} */}
                  </div>

                  <div class="skills">
                    <h6>{el.sexe}</h6>{" "}
                    <ul>
                      {el.dispo.map((el) => (
                        <li>{el}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MDBCol>
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
    deleteAide: (id) => dispatch(deleteAideInDB(id)),
    // getOneAideFDB: () => dispatch(getOneAideFDB()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Postuler);
