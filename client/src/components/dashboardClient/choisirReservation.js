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

export class AddReservation extends Component {
  state = {
    modal14: false,
    dispo: [],
    time: "",
    Lundi: false,
    Mardi: false,
    Mercredi: false,
    Jeudi: false,
    Vendredi: false,
    Samedi: false,
    Dimanche: false,
  };

  render() {
    return <div className="add-reservation"></div>;
  }
}

export default AddReservation;
