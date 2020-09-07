import React, { Component } from "react";
import { editAideInDB, getAideFromDB } from "../../actions/aideActionCreator";
import { getUser } from "../../actions/auth";
import { connect } from "react-redux";
import axios from "axios";
import {
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInputGroup,
  MDBInput,
  MDBIcon,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";

export class EditAide extends Component {
  state = {
    _id: "",
    nom: "",
    age: "",
    photo: "",
    ville: "",
    exp: "",
    dispo: "",
    num: "",
    sexe: "",
    service: "",
    modal14: false,
    Lundi: false,
    Mardi: false,
    Mercredi: false,
    Jeudi: false,
    Vendredi: false,
    Samedi: false,
    Dimanche: false,
  };
  /************get user + get aides*****/

  componentDidMount() {
    this.props.getUser();
    this.props.getAllAide();
  }
  /***************************** */
  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
      // nom: this.props.aides
      //   .filter((el) => el.proprietaire === this.props.user._id)
      //   .map((el) => el.nom)
      //   .join(),
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
  render() {
    const aide = this.props.aides.filter(
      (el) => el.proprietaire._id.toString() === this.props.user._id.toString()
    );
    console.log("aide", aide.map((el) => el.nom).join());
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
      <div className="edit-aide">
        <center>
          <button class="primary" onClick={this.toggle(14)}>
            Modifier
          </button>
        </center>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>
            Postuler maintenant{" "}
          </MDBModalHeader>
          <MDBModalBody>
            <MDBInput
              valueDefault={aide.map((el) => el.nom)}
              onChange={(e) => this.setState({ nom: e.target.value })}
              label="Nom Prénom"
              outline
            />
            <MDBInput
              valueDefault={aide.map((el) => el.age)}
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
                  <option>{aide.map((el) => el.ville)}</option>
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
            <img src={"http://localhost:8000/" + aide.map((el) => el.photo)} />
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
              valueDefault={aide.map((el) => el.num)}
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
            </MDBDropdown>{" "}
            <MDBInputGroup
              containerClassName="mb-3"
              prepend="service"
              inputs={
                <select
                  valueDefault={aide.service}
                  className="browser-default custom-select"
                  style={{ width: "200px" }}
                  onChange={(e) => this.setState({ service: e.target.value })}
                >
                  <option value="">{aide.map((el) => el.service)}</option>
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
              valueDefault={aide.map((el) => el.exp)}
              onChange={(e) => this.setState({ exp: e.target.value })}
              label="Expérience"
              outline
            />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(14)}>
              Fermer
            </MDBBtn>
            <MDBBtn
              gradient="blue"
              onClick={() =>
                this.props.editAide({
                  _id: aide.map((el) => el._id).join(),
                  nom: this.state.nom
                    ? this.state.nom
                    : aide.map((el) => el.nom).join(),
                  age: this.state.age
                    ? this.state.age
                    : aide.map((el) => el.age).join(),
                  photo: this.state.selectedFile
                    ? this.state.selectedFile.name
                    : aide.map((el) => el.photo).join(),
                  ville: this.state.ville
                    ? this.state.ville
                    : aide.map((el) => el.ville).join(),
                  exp: this.state.exp
                    ? this.state.exp
                    : aide.map((el) => el.exp).join(),
                  dispo: [
                    this.state.Lundi ? "Lundi" : null,
                    this.state.Mardi ? "Mardi" : null,
                    this.state.Mercredi ? "Mercredi" : null,
                    this.state.Jeudi ? "Jeudi" : null,
                    this.state.Vendredi ? "Vendredi" : null,
                    this.state.Samedi ? "Samedi" : null,
                    this.state.Dimanche ? "Dimanche" : null,
                  ],
                  num: this.state.num
                    ? this.state.num
                    : aide.map((el) => el.num).join(),
                  sexe: this.state.sexe
                    ? this.state.sexe
                    : aide.map((el) => el.sexe).join(),
                  service: this.state.service
                    ? this.state.service
                    : aide.map((el) => el.service).join(),
                  proprietaire: this.props.user._id,
                })
              }
            >
              Modifier
              <MDBIcon far icon="paper-plane" className="ml-2" />
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
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
    getUser: () => dispatch(getUser()),
    editAide: (id) => dispatch(editAideInDB(id)),
    getAllAide: () => dispatch(getAideFromDB()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAide);
