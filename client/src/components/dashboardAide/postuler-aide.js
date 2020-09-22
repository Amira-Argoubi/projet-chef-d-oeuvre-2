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
import { Redirect } from "react-router-dom";

import EditAide from "./editAide";

import axios from "axios";
import { deleteAideInDB } from "../../actions/aideActionCreator";
import {
  addAideToDB,
  getAideFromDB,
 
} from "../../actions/aideActionCreator";
import { getUser } from "../../actions/auth";

import { connect } from "react-redux";

/**************************************************************** */

class Postuler extends Component {
  state = {
    modal: false,
    modal: false,

    selectedFile: [],
    dispo: [],
    
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
  toggle2 = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
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
    //  ne donner l'accès pour ce component qu'à l'aide!
    if (this.props.user.role !== "Aide ménagère") {
      return <Redirect to="/" />;
    }
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
          <MDBBtn onClick={this.toggle2}>Postuler</MDBBtn>
        </center>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle2} centered>
          <MDBModalHeader toggle={this.toggle2}>
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
            <MDBBtn color="secondary" onClick={this.toggle}>
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
                  notes: 0,
                  nb_per_note: 0,
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
        <h1>Mon annonce</h1>

        {/* new card */}
        {/* filter l'aide connectéà ce moment */}

        <MDBCol>
         <center><div className="card-annonce">
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
                   
                    <EditAide aide={el} />
                    
                    <button
                      class="primary ghost"
                      onClick={() => this.props.deleteAide(el._id)}
                    >
                      Effacer{" "}
                    </button>
                    
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
          </center> 
        </MDBCol>
        <MDBContainer></MDBContainer>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Postuler);
