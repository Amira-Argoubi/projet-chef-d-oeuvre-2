import React, { Component } from "react";
import { connect } from "react-redux";
import { getAideFromDB } from "../../actions/aideActionCreator";
import { getReservation } from "../../actions/reservationAction";
import { getUser } from "../../actions/auth";
import { Label, Table, Button } from "semantic-ui-react";

export class ReservationAttente extends Component {
  componentDidMount() {
    this.props.getUser();
    this.props.getAideFromDB();
    this.props.getReservation();
  }
  render() {
    const reservations = this.props.reservation.filter(
      (el) => el.client._id.toString() === this.props.user._id.toString()
    );

    console.log("u", reservations);
    return (
      <div className="liste-reservation container">
        {reservations.length ? (
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Nom-Prénom</Table.HeaderCell>
                <Table.HeaderCell>Délégation</Table.HeaderCell>
                <Table.HeaderCell>Temps</Table.HeaderCell>
                <Table.HeaderCell>Service</Table.HeaderCell>
                <Table.HeaderCell>Jour</Table.HeaderCell>
                <Table.HeaderCell>Expérience</Table.HeaderCell>
                <Table.HeaderCell>Age</Table.HeaderCell>
                <Table.HeaderCell>Décision</Table.HeaderCell>

                {/* <Table.HeaderCell>nom_organzateur</Table.HeaderCell> */}
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {reservations.map((el, i) => (
                <Table.Row>
                  <Table.Cell>
                    <Label ribbon>{el.nom}</Label>
                  </Table.Cell>
                  <Table.Cell>{el.ville}</Table.Cell>
                  <Table.Cell>{el.time}</Table.Cell>
                  <Table.Cell>{el.service}</Table.Cell>
                  <Table.Cell>{el.dispo}</Table.Cell>
                  <Table.Cell>{el.exp}</Table.Cell>
                  <Table.Cell>{el.age}</Table.Cell>
                  <Table.Cell>{el.decision}</Table.Cell>

                  {/*<Table.Cell>{el.nom_organzateur}</Table.Cell>*/}

                  <Table.Cell className="pos-Action ">
                    {/* <Button secondary>
                      <ModifEvent el={el} />
                    </Button> */}
                    <Button
                      outline
                      size="sm"
                      onClick={() => this.props.deleteEvent(el._id)}
                    >
                      <i class="fas fa-check-square"></i>
                    </Button>
                    <Button
                      outline
                      size="sm"
                      onClick={() => this.props.deleteEvent(el._id)}
                    >
                      <i class="fas fa-trash"></i>
                    </Button>
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
        ) : (
          <h1>pas de reservations</h1>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    aides: state.aides,
    user: state.auth,
    reservation: state.reservation,
  };
};

export default connect(mapStateToProps, {
  getAideFromDB,
  getReservation,
  getUser,
})(ReservationAttente);
