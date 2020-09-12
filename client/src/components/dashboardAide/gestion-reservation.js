import React, { Component } from "react";
import { connect } from "react-redux";
import { getAideFromDB } from "../../actions/aideActionCreator";
import {
  getReservation,
  editDecisionInDB,
  deleteReservationInDB,
} from "../../actions/reservationAction";
import { getUser } from "../../actions/auth";
import { Label, Table, Button } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
export class GestionReservation extends Component {
  state = {
    decision: "Validée",
    deci: "Annulée",
  };
  componentDidMount() {
    this.props.getAideFromDB();
    this.props.getReservation();
    this.props.getUser();
  }
  render() {
    //  ne donner l'accès pour ce component qu'à l'aide!
    if (this.props.user.role !== "Aide ménagère") {
      return <Redirect to="/" />;
    }
    const reservations = this.props.reservation;

    return (
      <div className="liste-reservation container">
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date-début</Table.HeaderCell>
              <Table.HeaderCell>Date-fin</Table.HeaderCell>
              <Table.HeaderCell>Adresse</Table.HeaderCell>
              <Table.HeaderCell>Nom-client</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {reservations
              .filter(
                (el) => el.aide._id.toString() == this.props.user._id.toString()
              ) /*.filter((el_organizateurs) => this.el_organizateurs === "" ?
                            el_organizateurs : el_organizateurs === "maazza"
        )*/
              .map((el, i) => (
                <>
                  <Table.Row>
                    <Table.Cell>{el.date_start}</Table.Cell>
                    <Table.Cell>{el.date_end}</Table.Cell>
                    <Table.Cell>{el.adresse_client}</Table.Cell>
                    <Table.Cell>{el.client.nom_prenom}</Table.Cell>
                    <Button
                      outline
                      size="sm"
                      disabled={el.decision == "Validée" ? true : false}
                      onClick={() => this.props.deleteReservationInDB(el._id)}
                    >
                      {el.decision == "Validée" ? null : (
                        <i class="fas fa-trash"></i>
                      )}
                    </Button>
                  </Table.Row>
                </>
              ))}
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
  deleteReservationInDB,
  editDecisionInDB,
})(GestionReservation);
