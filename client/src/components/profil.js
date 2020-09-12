import React from "react";
import { connect } from "react-redux";
import { getUser, editUserInDB } from "../actions/auth";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation,
} from "mdbreact";

class Profil extends React.Component {
  state = {
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));
  componentDidMount() {
    this.props.getUser();
  }
  test = () => {
    this.props.editUserInDB({
      _id: this.props.user._id,
      nom_prenom: this.state.nom_prenom,
      email: this.state.email,
      password: this.state.password,
      newpPassword: this.state.newPassword,
      role: this.props.user.role,
    });
  };
  render() {
    console.log(this.state.email);
  
    return (
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
                  <h1 className="h1-responsive font-weight-bold">
                    Sign up right now!
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae, quisquam iste, maiores. Nulla.
                  </h6>
                </MDBAnimation>

                <MDBCol
                  md="6"
                  xl="5"
                  className="mb-4"
                  style={{ height: "500px" }}
                >
                  <MDBAnimation type="fadeInRight" delay=".2s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Mon profil
                        </h3>
                        <hr className="hr-light" />

                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label={this.props.user.nom_prenom}
                          icon="user"
                          onChange={(e) =>
                            this.setState({ nom_prenom: e.target.value })
                          }
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label={this.props.user.email}
                          icon="envelope"
                          onChange={(e) =>
                            this.setState({ email: e.target.value })
                          }
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="password"
                          icon="lock"
                          type="password"
                          onChange={(e) =>
                            this.setState({ password: e.target.value })
                          }
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="New password"
                          icon="lock"
                          type="password"
                          onChange={(e) =>
                            this.setState({ newPassword: e.target.value })
                          }
                        />
                        <div className="text-center mt-4 black-text">
                          <MDBBtn color="indigo" onClick={this.test}>
                            Modifier
                          </MDBBtn>
                          <hr className="hr-light" />
                          
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
  };
};

export default connect(mapStateToProps, { getUser, editUserInDB })(Profil);
