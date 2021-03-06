import React, { Component } from "react";
import { connect } from "react-redux";
import { Pagination } from "antd";
import axios from "axios";
import { getAideFromDB } from "../../actions/aideActionCreator";
import moment from "moment";
import { Redirect } from "react-router-dom";

import {
  getReservation,
  deleteReservationInDB,
  editDecisionInDB,
} from "../../actions/reservationAction";
import { getUser } from "../../actions/auth";
import { Label, Table, Button } from "semantic-ui-react";

export class ReservationAttente extends Component {
  state = {
    page: 1,
    pageSize: 3,
    paiement: "",
  };
  componentDidMount() {
    this.props.getUser();
    this.props.getAideFromDB();
    this.props.getReservation();
  }
  /********* upload img ********** */
  handleInput = (e) => {
    this.setState({ paiement: e.target.files[0] });
    console.log("devis", e.target.files[0].name);
  };

  upload = (e) => {
    const formData = new FormData();
    formData.append("devis", this.state.paiement);
    axios.post("http://localhost:8000/", formData).then((res) => {
      console.log("ok", res.data);
    });
  };
  // handle pagination
  page = (page, pageSize) => {
    this.setState({ page: page, pageSize: pageSize });
  };

  render() {
    //  ne donner l'accès pour ce component qu'au client!

    if (this.props.user.role !== "Client") {
      return <Redirect to="/" />;
    }
    const reservations = this.props.reservation.filter(
      (el) => el.client._id.toString() === this.props.user._id.toString()
    );

    console.log("u", reservations);
    return (
      <div className="liste-reservation container-fluid">
        <h1 className="titre-tab">Mes réservations</h1>

        {reservations.length ? (
          <Table celled>
            <Table.Header className="table-header">
              <Table.Row>
                <Table.HeaderCell className="title-header">
                  Nom-Prénom-Aide
                </Table.HeaderCell>
                <Table.HeaderCell className="title-header">
                  Délégation
                </Table.HeaderCell>
                <Table.HeaderCell className="title-header">
                  Service
                </Table.HeaderCell>
                <Table.HeaderCell className="title-header">
                  Jour
                </Table.HeaderCell>
                <Table.HeaderCell className="title-header">
                  Expérience
                </Table.HeaderCell>
                <Table.HeaderCell className="title-header">
                  Age
                </Table.HeaderCell>
                <Table.HeaderCell className="title-header">
                  Devis
                </Table.HeaderCell>
                <Table.HeaderCell className="title-header">
                  Actions
                </Table.HeaderCell>
                <Table.HeaderCell className="title-header">
                  Date
                </Table.HeaderCell>
                <Table.HeaderCell className="title-header">
                  Paiement
                </Table.HeaderCell>
                <Table.HeaderCell className="title-header">
                  Etat
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {reservations // pagination
                .filter(
                  (l, index) =>
                    (this.state.page - 1) * this.state.pageSize <= index &&
                    index < this.state.page * this.state.pageSize
                )
                .map((el, i) => (
                  <Table.Row>
                    <Table.Cell>{el.nom}</Table.Cell>
                    <Table.Cell>{el.ville}</Table.Cell>
                    <Table.Cell>{el.service}</Table.Cell>
                    <Table.Cell>
                      {el.dispo.map((el) => (
                        <p>{el}</p>
                      ))}
                    </Table.Cell>{" "}
                    <Table.Cell>{el.exp}</Table.Cell>
                    <Table.Cell>{el.age}</Table.Cell>
                    <Table.Cell>
                      {el.decision === "Validée" ? (
                        <a
                          href={`http://localhost:8000/${el.devis}`}
                          target="_blank"
                        >
                          {" "}
                          Devis{" "}
                        </a>
                      ) : (
                        el.decision
                      )}
                    </Table.Cell>
                    <Table.Cell className="pos-Action ">
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
                    </Table.Cell>
                    <Table.Cell>
                      {" "}
                      {moment(el.dateoff, "YYYYMMDD").fromNow()}
                    </Table.Cell>
                    <Table.Cell>
                      {" "}
                      {el.decision == "Validée" ? (
                        <>
                          {el.paiement ? (
                            "envoyé"
                          ) : (
                            <>
                              {" "}
                              <input
                                type="file"
                                onChange={(e) => this.handleInput(e)}
                                style={{ width: "118px" }}
                              />
                              <Button
                                className="but-télécharger"
                                outline
                                size="sm"
                                onClick={() => (
                                  this.upload(),
                                  this.props.editDecisionInDB({
                                    _id: el._id,
                                    paiement: this.state.paiement.name,
                                  })
                                )}
                              >
                                <i class="fas fa-upload"></i>
                              </Button>
                            </>
                          )}
                        </>
                      ) : (
                        "-----"
                      )}
                    </Table.Cell>
                    <Button outline size="sm" className="but-etat">
                      {el.decision == "Validée définitive" ? (
                        <i
                          class="fas fa-check-circle vert"
                          style={{ color: "green" }}
                        ></i>
                      ) : (
                        ""
                      )}
                      {el.decision == "Annulée" ? (
                        <i
                          class="fas fa-minus-circle"
                          style={{ color: "red" }}
                        ></i>
                      ) : (
                        ""
                      )}
                    </Button>
                  </Table.Row>
                ))}{" "}
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3"></Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        ) : null}
        {/************** * Pagination ******************/}
        <div className="pagination">
          <i class="fas fa-angle-double-left left-page"></i>{" "}
          <Pagination
            defaultCurrent={1}
            pageSize={3}
            onChange={this.page}
            total={this.props.aides.length}
          />
          <i class="fas fa-angle-double-right right-page"></i>
        </div>
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
  deleteReservationInDB,
  editDecisionInDB,
})(ReservationAttente);
