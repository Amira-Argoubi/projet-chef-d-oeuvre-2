import React from "react";

import Rating from "react-rating";
import { connect } from "react-redux";
import { addRatingToDB } from "../../actions/ratingAction";
import { getUser } from "../../actions/auth";
import {
  MDBInput,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBAnimation,
} from "mdbreact";

class Avis extends React.Component {
  state = {
    collapseID: "",

    value: 0,
  };
  handleClick = () => {
    this.setState({ value: 0 });
  };
  send = (event) => {
    this.setState({ value: event });
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));
  componentDidMount() {
    this.props.getUser();
  }
  addStar = () => {
    this.props.addRatingToDB({
      id_client: this.props.user._id,
      nom_prenom: this.state.nom_prenom,
      rating: this.state.value,
      msg: this.state.msg,
    });
  };
  render() {
    return (
      <div className="avis">
        <div id="classicformpage">
          <MDBView>
            <MDBMask className="d-flex justify-content-center align-items-center gradient">
              <MDBContainer>
                <MDBRow>
                  <MDBAnimation
                    type="fadeInLeft"
                    delay=".3s"
                    className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                  >
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text inscrip">
                        <h3 className="text-center" style={{ color: "white" }}>
                          <MDBIcon icon="user" style={{ fontSize: "20px" }} />{" "}
                          Mon profil
                        </h3>
                        <hr className="hr-light" />

                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Nom-Prénom"
                          icon="user"
                          onChange={(e) =>
                            this.setState({ nom_prenom: e.target.value })
                          }
                        />

                        <MDBInput
                          style={{ fontSize: 12 }}
                          className="white-text"
                          type="textarea"
                          label="Message"
                          rows="2"
                          icon="pencil-alt"
                          onChange={(e) =>
                            this.setState({ msg: e.target.value })
                          }
                        />

                        <div className="text-center mt-4 black-text">
                          <MDBBtn
                            color="indigo"
                            onClick={this.addStar}
                            style={{ width: 100, fontSize: 12 }}
                          >
                            Envoyer{" "}
                          </MDBBtn>
                          <hr className="hr-light" />
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>

                  <MDBCol
                    md="6"
                    xl="5"
                    className="mb-4"
                    style={{ height: "500px" }}
                  >
                    <MDBAnimation type="fadeInRight" delay=".2s">
                      <h1
                        className="h1-responsive font-weight-bold"
                        style={{ color: "white" }}
                      >
                        Votre avis nous intéresse !{" "}
                      </h1>
                      <hr className="hr-light" />
                      <center>
                        <h6
                          className="mb-4"
                          style={{ color: "white", fontSize: 20 }}
                        >
                          Merci pour votre confiance. C'est votre support qui
                          nous aide à avancer et améliorer nos services. c'est
                          grace à vous, on continue à donner le plus.
                        </h6>
                      </center>
                      <div className="rating" style={{ fontSize: 20 }}>
                        <Rating
                          className="star-avis"
                          placeholderRating={1}
                          emptySymbol={
                            <i
                              class="fas fa-star"
                              style={{ color: "white" }}
                            ></i>
                          }
                          placeholderSymbol={
                            <i
                              class="fas fa-star "
                              style={{ color: "white" }}
                            ></i>
                          }
                          fullSymbol={
                            <i
                              class="fas fa-star"
                              style={{ color: "yellow" }}
                            ></i>
                          }
                          initialRating={this.state.value}
                          onChange={this.send}
                        />
                        <div className="button-rating">
                          <MDBBtn
                            color="indigo"
                            onClick={this.handleClick}
                            style={{ width: 100, fontSize: 12 }}
                          >
                            Reset{" "}
                          </MDBBtn>
                        </div>
                      </div>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBMask>
          </MDBView>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
    rating: state.rating,
  };
};

export default connect(mapStateToProps, { getUser, addRatingToDB })(Avis);
