import React, { Component } from "react";
import { connect } from "react-redux";
import { getAideFromDB } from "../../actions/aideActionCreator";
import {
  getReservation,
  editDecisionInDB,
} from "../../actions/reservationAction";
import { getUser } from "../../actions/auth";
import { Label, Table, Button } from "semantic-ui-react";
import { MDBInput } from "mdbreact";
import axios from "axios";

export class GestionReserv extends Component {
  state = {
    decision: "Validée",
    deci: "Annulée",
    devis: "",
  };
  componentDidMount() {
    this.props.getAideFromDB();
    this.props.getReservation();
    this.props.getUser();
  }
  /********************** upload devis ******************* */
  handleInput = (e) => {
    this.setState({ devis: e.target.files[0] });
    console.log("devis", e.target.files[0].name);
  };

  upload = (e) => {
    const formData = new FormData();
    formData.append("devis", this.state.devis);
    axios.post("http://localhost:8000/", formData).then((res) => {
      console.log(this.state.devis.name);
    });
  };
  render() {
    return (
      <div className="liste-reservation container">
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nom-Prénom-client</Table.HeaderCell>
              <Table.HeaderCell>Délégation</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Notes</Table.HeaderCell>
              <Table.HeaderCell>Jour</Table.HeaderCell>
              <Table.HeaderCell>Decision</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
              <Table.HeaderCell>Devis</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.reservation.map((el, i) => (
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>{el.client.nom_prenom}</Label>
                </Table.Cell>
                <Table.Cell>{el.ville}</Table.Cell>
                <Table.Cell>{el.age}</Table.Cell>
                <Table.Cell>{el.sexe}</Table.Cell>
                <Table.Cell>{el.dispo}</Table.Cell>
                <Table.Cell>{el.decision}</Table.Cell>
                <Table.Cell className="pos-Action ">
                  <MDBInput
                    type="file"
                    onChange={(e) => this.handleInput(e)}
                    outline
                  />
                  <Button
                    outline
                    size="sm"
                    onClick={() => (
                      this.upload(),
                      this.props.editDecisionInDB({
                        _id: el._id,
                        decision: this.state.decision,
                        devis: this.state.devis.name,
                      })
                    )}
                  >
                    <i class="fas fa-check-square"></i>
                  </Button>
                  <Button
                    outline
                    size="sm"
                    onClick={() =>
                      this.props.editDecisionInDB({
                        _id: el._id,
                        decision: this.state.deci,
                      })
                    }
                  >
                    <i class="fas fa-trash"></i>
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  {el.decision === "Validée" ? (
                    <img
                      src={"http://localhost:8000/" + el.devis}
                      width="50px"
                    />
                  ) : (
                    el.decision
                  )}
                </Table.Cell>
              </Table.Row>
            ))}{" "}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3"></Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    aides: state.aides,
    reservation: state.reservation,
    user: state.auth,
  };
};
export default connect(mapStateToProps, {
  getAideFromDB,
  getReservation,
  getUser,
  editDecisionInDB,
})(GestionReserv);
