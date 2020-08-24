import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdbreact";
import { connect } from "react-redux";
import { register } from "../actions/auth";

/************************************************************** ******/

export class Inscription extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <div className="inscription">
        <MDBContainer>
          <MDBBtn
            outline
            color="info"
            onClick={this.toggle}
            style={{ borderRadius: "20px" }}
          >
            Inscription
          </MDBBtn>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>
              Créer un compte
            </MDBModalHeader>
            <MDBModalBody>
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="6">
                    <form>
                      <div className="grey-text">
                        <i class="fas fa-user" style={{ fontSize: "30px" }}></i>
                        <MDBInput
                          style={{ color: "black" }}
                          label="Nom-Prénom"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          onChange={(e) =>
                            this.setState({ nom_prenom: e.target.value })
                          }
                        />

                        <i
                          class="fas fa-envelope"
                          style={{ fontSize: "30px" }}
                        ></i>
                        <MDBInput
                          style={{ color: "black" }}
                          label="Adresse email"
                          group
                          validate
                          error="wrong"
                          success="right"
                          onChange={(e) =>
                            this.setState({ email: e.target.value })
                          }
                        />
                        <i class="fas fa-lock" style={{ fontSize: "30px" }}></i>
                        <MDBInput
                          style={{ color: "black" }}
                          label="Mot de passe"
                          group
                          validate
                          error="wrong"
                          type="password"
                          success="right"
                          onChange={(e) =>
                            this.setState({ password: e.target.value })
                          }
                        />
                        <select
                          className="browser-default custom-select"
                          style={{ width: "200px" }}
                          onChange={(e) =>
                            this.setState({ role: e.target.value })
                          }
                        >
                          <option>Choisir catégorie</option>
                          <option value="Client">Client</option>
                          <option value="Aide ménagère">Aide ménagère</option>
                        </select>
                      </div>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle}>
                Fermer{" "}
              </MDBBtn>
              <MDBBtn
                gradient="blue"
                onClick={() =>
                  this.props.register({
                    nom_prenom: this.state.nom_prenom,
                    email: this.state.email,
                    password: this.state.password,
                    role: this.state.role,
                  })
                }
              >
                S'inscrire <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </div>
    );
  }
}

export default connect(null, { register })(Inscription);
