import React, { Component } from "react";
import { connect } from "react-redux";
import { getAideFromDB } from "../../actions/aideActionCreator";
import { getReservation } from "../../actions/reservationAction";
import { getUser } from "../../actions/auth";
import { Label, Table, Button } from "semantic-ui-react";

export class GestionReservation extends Component {
  componentDidMount() {
    this.props.getAideFromDB();
    this.props.getReservation();
    this.props.getUser();
  }
  render() {
    const reservations = this.props.reservation.filter(
      (el) => el.aide._id.toString() === this.props.user._id.toString()
    );

    return (
      <div className="liste-reservation container">
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nom-Prénom</Table.HeaderCell>
              <Table.HeaderCell>Délégation</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Notes</Table.HeaderCell>
              <Table.HeaderCell>Jour</Table.HeaderCell>
              <Table.HeaderCell>nom_categorie</Table.HeaderCell>
              {/* <Table.HeaderCell>nom_organzateur</Table.HeaderCell> */}
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {reservations /*.filter((el_organizateurs) => this.el_organizateurs === "" ?
                            el_organizateurs : el_organizateurs === "maazza"
        )*/
              .map((el, i) => (
                <Table.Row>
                  <Table.Cell>
                    <Label ribbon>{el.client.nom_prenom}</Label>
                  </Table.Cell>
                  <Table.Cell>{el.ville}</Table.Cell>
                  <Table.Cell>{el.age}</Table.Cell>
                  <Table.Cell>{el.sexe}</Table.Cell>
                  <Table.Cell>{el.dispo}</Table.Cell>
                  <Table.Cell>{el.exp}</Table.Cell>
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
})(GestionReservation);
