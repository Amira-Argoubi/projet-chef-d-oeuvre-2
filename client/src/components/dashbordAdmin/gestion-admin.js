import React, { Component } from "react";
import { connect } from "react-redux";
import { getAideFromDB } from "../../actions/aideActionCreator";
import { Pagination } from "antd";
import moment from "moment";
import { Redirect } from "react-router-dom";

import {
  getReservation,
  editDecisionInDB,
} from "../../actions/reservationAction";
import { getUser } from "../../actions/auth";
import { Table, Button } from "semantic-ui-react";
import { MDBInput } from "mdbreact";
import axios from "axios";

export class GestionReserv extends Component {
  state = {
    decision: "Validée",
    deci: "Annulée",
    devis: "",
    page: 1,
    pageSize: 3,
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
  // handle pagination

  page = (page, pageSize) => {
    this.setState({ page: page, pageSize: pageSize });
  };
  render() {
    //  ne donner l'accès pour ce component qu'à l'admin!

    if (this.props.user.role !== "Admin") {
      return <Redirect to="/" />;
    }
    return (
      <div className="liste-reservation">
        <h1 className="titre-tab">Gestion des réservations</h1>
        <div className="tab-reservation">
          <Table celled>
            <Table.Header className="table-header">
              <Table.Row>
                <Table.HeaderCell className="title-header">
                  Nom-Prénom-client
                </Table.HeaderCell>
                <Table.HeaderCell className="title-header">
                  Nom-Prénom-aide
                </Table.HeaderCell>
                <Table.HeaderCell className="title-header">
                  Num-Tél
                </Table.HeaderCell>

                <Table.HeaderCell className="title-header">
                  Adresse
                </Table.HeaderCell>
                <Table.HeaderCell className="title-header">
                  Date-réservation
                </Table.HeaderCell>

                <Table.HeaderCell className="title-header">
                  Délais
                </Table.HeaderCell>

                <Table.HeaderCell className="title-header">
                  Devis
                </Table.HeaderCell>
                <Table.HeaderCell className="title-header">
                  Actions
                </Table.HeaderCell>

                <Table.HeaderCell className="title-header">
                  {" "}
                  Décision
                </Table.HeaderCell>
                <Table.HeaderCell className="title-header">
                  {" "}
                  Paiement
                </Table.HeaderCell>
                <Table.HeaderCell className="title-header">
                  {" "}
                  Validation définitive
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.props.reservation
                .filter((el) => el.decision !== "Annulée")
                ///////////////// PAGINATION //////////////////////////
                .filter(
                  (l, index) =>
                    (this.state.page - 1) * this.state.pageSize <= index &&
                    index < this.state.page * this.state.pageSize
                )
                .map((el, i) => (
                  <Table.Row
                    className={el.decision == "Validée" ? "redadminbb" : "f"}
                  >
                    <Table.Cell>{el.client.nom_prenom}</Table.Cell>
                    <Table.Cell>{el.aide.nom_prenom}</Table.Cell>
                    <Table.Cell>{el.tel_client}</Table.Cell>

                    <Table.Cell>{el.adresse_client}</Table.Cell>
                    <Table.Cell>
                      {el.date_end} <br></br>
                      {el.date_start}
                    </Table.Cell>

                    <Table.Cell>
                      {" "}
                      {moment(el.date_end, "YYYYMMDD").fromNow()}
                    </Table.Cell>
                    <Table.Cell className="pos-Action ">
                      {el.decision !== "Annulée" ? (
                        el.decision === "En attente" ? (
                          <MDBInput
                            type="file"
                            onChange={(e) => this.handleInput(e)}
                            outline
                            style={{ width: "160px" }}
                          />
                        ) : (
                          "Envoyé"
                        )
                      ) : (
                        "anuller"
                      )}
                    </Table.Cell>

                    <Table.Cell className="action-button">
                      <Button
                        className="valider-button"
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
                        <i class="fas fa-check-square valider but-confirm"></i>
                      </Button>
                    </Table.Cell>

                    <Table.Cell>
                      {" "}
                      {el.decision === "Validée" ? (
                        <img
                          src={"http://localhost:8000/" + el.devis}
                          width="50px"
                        />
                      ) : (
                        el.decision
                      )}
                    </Table.Cell>
                    <Table.Cell>
                      {el.paiement ? (
                        <a
                          href={`http://localhost:8000/${el.paiement}`}
                          target="_blanck"
                        >
                          Paiement
                        </a>
                      ) : (
                        "pas encore"
                      )}
                    </Table.Cell>
                    <div className="but-validation-définitive">
                      <Table.Cell className="action-button">
                        <Button
                          className="valider-button"
                          outline
                          size="sm"
                          onClick={() => (
                            this.upload(),
                            this.props.editDecisionInDB({
                              _id: el._id,
                              decision: "Validée définitive",
                            })
                          )}
                        >
                          <i class="fas fa-check-square valider but-confirm"></i>
                        </Button>

                        <Button
                          className="valider-button"
                          outline
                          size="sm"
                          onClick={() =>
                            this.props.editDecisionInDB({
                              _id: el._id,
                              decision: this.state.deci,
                            })
                          }
                        >
                          <i class="fas fa-trash annuler but-annul"></i>
                        </Button>
                      </Table.Cell>
                    </div>
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
        {/************************** * PAGINATION *********************/}
        <div className="pagination">
          <Pagination
            defaultCurrent={1}
            pageSize={3}
            onChange={this.page}
            total={this.props.aides.length}
          />
        </div>
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
