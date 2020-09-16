import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import { MDBRow, MDBCol, MDBIcon, MDBInput } from "mdbreact";
import { connect } from "react-redux";
import { login } from "../actions/auth";

export class Connex extends Component {
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
      <div className="connexion">
        <MDBContainer autoWidth="false">
          <MDBBtn
            gradient="blue"
            onClick={this.toggle}
            style={{ borderRadius: "20px" }}
          >
            Connexion
          </MDBBtn>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>Se connecter</MDBModalHeader>
            <MDBModalBody>
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="6">
                    <form>
                      <div className="grey-text inscrip">
                        <i
                          class="fas fa-envelope"
                          style={{ fontSize: "30px" }}
                        ></i>
                        <MDBInput
                          style={{ color: "black" }}
                          label="Adresse email"
                          group
                          type="email"
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
                          type="password"
                          validate
                          error="wrong"
                          success="right"
                          onChange={(e) =>
                            this.setState({ password: e.target.value })
                          }
                        />
                      </div>
                      <p className="font-small grey-text d-flex justify-content-end">
                        Not a member?
                        <a href="#!" className="blue-text ml-1">
                          S'inscrire
                        </a>
                      </p>
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
                  this.props.signIn({
                    email: this.state.email,
                    password: this.state.password,
                  })
                }
              >
                Se connecter
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (el) => dispatch(login(el)),
  };
};

export default connect(null, mapDispatchToProps)(Connex);
