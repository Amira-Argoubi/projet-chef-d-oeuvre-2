import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
} from "mdbreact";
import { connect } from "react-redux";
import { getUser } from "../../actions/auth";

import { addReservationToDB } from "../../actions/reservationAction";
export class AddReservation extends Component {
  state = {
    modal14: false,
    dispo: [],
    time: "",
    // Lundi: false,
    // Mardi: false,
    // Mercredi: false,
    // Jeudi: false,
    // Vendredi: false,
    // Samedi: false,
    // Dimanche: false,
    modal3: false,
  };
  componentDidMount() {
    this.props.getUser();
  }
  toggleReservation = () => {
    this.setState({
      modal3: !this.state.modal3,
    });
  };

  render() {
    const { el } = this.props;
    console.log("olfa", this.props.el);
    return (
      <div className="add-reservation">
        <MDBContainer>
          <button class="primary ghost" onClick={this.toggleReservation}>
            Réserver{" "}
          </button>
          <MDBModal
            isOpen={this.state.modal3}
            toggle={this.toggleReservation}
            centered
          >
            <MDBModalHeader toggle={this.toggleReservation}>
              MDBModal title
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput
                onChange={(e) =>
                  this.setState({ adresse_client: e.target.value })
                }
                label="adresse"
                outline
              />
              <MDBInput
                onChange={(e) => this.setState({ tel_client: e.target.value })}
                label="num-tel"
                outline
              />

              <MDBInput
                type="date"
                onChange={(e) => this.setState({ date_start: e.target.value })}
                label="Date-start"
                min="2020-09-09"
                outline
              />
              <MDBInput
                type="date"
                onChange={(e) => this.setState({ date_end: e.target.value })}
                label="Date-end"
                min="2020-09-09"
                outline
              />
              {/* <MDBDropdown dropright>
                <MDBDropdownToggle caret color="primary">
                  Disponibilité
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                  {this.props.el.dispo
                    .filter((el) => el !== null)
                    .map((el) => (
                      <MDBDropdownItem>
                        <input
                          type="checkbox"
                          value="Lundi"
                          class="custom-control-input"
                          id="defaultUnchecked"
                        />
                        <label
                          class="custom-control-label"
                          for="defaultUnchecked"
                        >
                          {el}
                        </label>
                      </MDBDropdownItem>
                    ))}
                </MDBDropdownMenu>
              </MDBDropdown> */}
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggleReservation}>
                Fermer
              </MDBBtn>
              <MDBBtn
                color="primary"
                onClick={() =>
                  this.props.addReservation({
                    nom: el.nom,
                    time: el.time,
                    age: el.age,
                    photo: el.photo,
                    sexe: el.sexe,
                    num: el.num,
                    ville: el.ville,
                    dispo: el.dispo,
                    exp: el.exp,
                    service: el.service,
                    annonce: el,
                    client: this.props.user,
                    aide: el.proprietaire,
                    adresse_client: this.state.adresse_client,
                    tel_client: this.state.tel_client,
                    date_start: this.state.date_start,
                    date_end: this.state.date_end,
                    date: Date.now(),
                  })
                }
              >
                Réserver
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
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
const mapDispatchToProps = (dispatch) => ({
  addReservation: (el) => dispatch(addReservationToDB(el)),
  getUser: () => dispatch(getUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddReservation);
