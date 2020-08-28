import React, { Component } from "react";
import { editAideInDB } from "../../actions/aideActionCreator";
import { getUser } from "../../actions/auth";
import { connect } from "react-redux";
import axios from "axios";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInputGroup,
  MDBInput,
  MDBIcon,
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
  };
  /************get user + get aides*****/

  componentDidMount() {
    this.props.getUser();
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
          <MDBBtn
            gradient="blue"
            onClick={this.toggle(14)}
            style={{ borderRadius: "20px" }}
          >
            Modifier{" "}
          </MDBBtn>
        </center>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>
            Postuler maintenant{" "}
          </MDBModalHeader>
          <MDBModalBody>
            {this.props.aides
              ? this.props.aides
                  .filter((el) => el.proprietaire == "5f4663d9771c657f7623fff2")
                  .map((el) => (
                    <>
                      {console.log("element", el, el.nom)}
                      <MDBInput
                        valueDefault={el.nom}
                        onChange={(e) => this.setState({ nom: e.target.value })}
                        label="Nom Prénom"
                      />
                      <MDBInput
                        valueDefault={el.age}
                        onChange={(e) => this.setState({ age: e.target.value })}
                        label="Age"
                      />
                      <MDBInputGroup
                        valueDefault={el.ville}
                        containerClassName="mb-3"
                        prepend="ville"
                        inputs={
                          <select
                            className="browser-default custom-select"
                            style={{ width: "200px" }}
                            onChange={(e) =>
                              this.setState({ ville: e.target.value })
                            }
                          >
                            <option>Choisir la Délégation</option>
                            {villes.map((el) => (
                              <option>{el}</option>
                            ))}
                          </select>
                        }
                      />
                      <MDBInput
                        valueDefault={el.selectedFile}
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
                            valueDefault={el.sexe}
                            onChange={(e) =>
                              this.setState({ sexe: e.target.value })
                            }
                            className="browser-default custom-select"
                          >
                            <option value="0">{el.sexe}</option>
                            {el.sexe == "femme" ? null : (
                              <option value="femme">Femme</option>
                            )}
                            {el.sexe == "homme" ? null : (
                              <option value="homme">Homme</option>
                            )}
                          </select>
                        }
                      />
                      <MDBInput
                        valueDefault={el.num}
                        onChange={(e) => this.setState({ num: e.target.value })}
                        label="Numéro téléphone"
                        outline
                      />
                      <MDBInputGroup
                        containerClassName="mb-3"
                        prepend="Jour"
                        inputs={
                          <select
                            valueDefault={el.dispo}
                            className="browser-default custom-select"
                            onChange={(e) =>
                              this.setState({ dispo: e.target.value })
                            }
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
                            valueDefault={el.service}
                            className="browser-default custom-select"
                            style={{ width: "200px" }}
                            onChange={(e) =>
                              this.setState({ service: e.target.value })
                            }
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
                            <option value="Nettoyage de tapis">
                              Nettoyage de tapis
                            </option>
                            <option value="Nettoyage des sols durs">
                              Nettoyage des sols durs
                            </option>
                          </select>
                        }
                      />
                      <MDBInput
                        valueDefault={el.exp}
                        onChange={(e) => this.setState({ exp: e.target.value })}
                        label="Expérience"
                        outline
                      />{" "}
                    </>
                  ))
              : null}
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(14)}>
              Fermer
            </MDBBtn>
            <MDBBtn
              gradient="blue"
              onClick={() =>
                this.props.editAide({
                  _id: this.state.aides._id,
                  nom: this.state.nom,
                  age: this.state.age,
                  photo: this.state.selectedFile.name,
                  ville: this.state.ville,
                  exp: this.state.exp,
                  dispo: this.state.dispo,
                  num: this.state.num,
                  sexe: this.state.sexe,
                  service: this.state.service,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAide);
