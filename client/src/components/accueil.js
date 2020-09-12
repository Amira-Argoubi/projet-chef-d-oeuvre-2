import React, { Component } from "react";
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here
import "../App.css";
import { Pagination } from "antd";
import { FaStar } from "react-icons/fa";
import Rating from "./rating";
import {
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBCardText,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
} from "mdbreact";

import { login } from "../actions/auth";
import { getAideFromDB } from "../actions/aideActionCreator";
import { getUser } from "../actions/auth";
import { connect } from "react-redux";
import Pub from "./publicité";
import AddReservation from "./dashboardClient/choisirReservation";
import CardCarousel from "./cardCarousel";

/******************************************************** ******/
export class Accueil extends Component {
  state = {
    jour: "",
    ville: "",
    service: "",
    modal: false,
    modal3: false,
    dispo: [],
    Lundi: false,
    Mardi: false,
    Mercredi: false,
    Jeudi: false,
    Vendredi: false,
    Samedi: false,
    Dimanche: false,
    page: 1,
    pageSize: 3,
  };

  componentDidMount() {
    this.props.getAideFromDB();
    this.props.getUser();
  }
  toggleReservation = () => {
    this.setState({
      modal3: !this.state.modal3,
    });
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  // handle pagination
  page = (page, pageSize) => {
    this.setState({ page: page, pageSize: pageSize });
  };
  /************************************************************ */
  render() {
    console.log(this.props.aides);
    const villes = [
      "Bab El Bhar",
      "Bab Souika",
      "Carthage",
      "Cité El Khadra",
      "Sidi Hassine",
      "Sidi El Béchir",
      "Séjoumi",
      "Médina",
      "Le Kram",
      "Le Bardo",
      "La Marsa",
      "La Goulette",
      "Hraïria",
      "Ezzouhour",
      "Ettahrir",
      "Ouardia",
      "El Omrane supérieur",
      "El Omrane",
      "El Menzah",
      "El Kabaria",
      "Djebel Jelloud",
    ];
    //console.log("taw", this.props.user);
    return (
      <div className="accueil">
        {/****************** * component publicité **********************/}
        <Pub />

        {/************************* * text ****************************/}
        <div className="text">
          <h1>
            {" "}
            <i class="fa fa-quote-left"></i>
            <span class="text-with-quotes">
              <p id="parag">
                {" "}
                Réservez votre ménage à domicile en un simple clic
              </p>
            </span>
            <i class="fa fa-quote-right"></i>
          </h1>
        </div>

        {/************ ************** les filtres ************************/}
        <div class="card card-image">
          <div class="text-white text-center  py-5 px-4">
            <div class="py-5">
              {/* <!-- Content --> */}
              <h5 class="h5 orange-text">
                <i class="fas fa-camera-retro"></i> Photography
              </h5>
              <h2 class="card-title h2 my-4 py-2">
                Jumbotron with image overlay
              </h2>
              <p class="mb-4 pb-2 px-md-5 mx-md-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur obcaecati vero aliquid libero doloribus ad, unde
                tempora maiores, ullam, modi qui quidem minima debitis
                perferendis vitae cumque et quo impedit.
              </p>
              {/* <a class="btn peach-gradient"><i class="fas fa-clone left"></i> View project</a> */}
              <div className="filtre container">
                <select
                  className="browser-default custom-select "
                  style={{ width: "200px" }}
                  onChange={(e) => this.setState({ ville: e.target.value })}
                >
                  <option>Choisir la Délégation</option>
                  {villes.map((el) => (
                    <option>{el}</option>
                  ))}
                </select>
                {/* ***********filtre par jour ***************/}

                <select
                  className="browser-default custom-select"
                  style={{ width: "200px" }}
                  onChange={(e) => this.setState({ jour: e.target.value })}
                >
                  <option value="">Choisir le jour</option>
                  <option value="Lundi">Lundi</option>
                  <option value="Mardi">Mardi</option>
                  <option value="Mercredi">Mercredi</option>
                  <option value="Jeudi">Jeudi</option>
                  <option value="Vendredi">Vendredi</option>
                  <option value="Samedi">Samedi</option>
                  <option value="Dimanche">Dimanche</option>
                </select>

                {/* ***********filtre par type de service ***************/}
                <select
                  className="browser-default custom-select"
                  style={{ width: "200px" }}
                  onChange={(e) => this.setState({ service: e.target.value })}
                >
                  <option value="">Choisir le service</option>
                  <option
                    value="Nettoyage domestique
"
                  >
                    Nettoyage domestique
                  </option>
                  <option
                    value="Nettoyage de bureaux
"
                  >
                    Nettoyage de bureaux
                  </option>
                  <option
                    value="Nettoyage de fin de location
"
                  >
                    Nettoyage de fin de location
                  </option>
                  <option
                    value="Nettoyage des vitres
"
                  >
                    Nettoyage des vitres
                  </option>
                  <option
                    value="Nettoyage de tapis
"
                  >
                    Nettoyage de tapis
                  </option>
                  <option
                    value="Nettoyage des sols durs
 
"
                  >
                    Nettoyage des sols durs
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* différents services */}
        {/************************* * text ****************************/}

        <div className="text">
          <h1>
            {" "}
            <i class="fa fa-quote-left"></i>
            <span class="text-with-quotes">
              <p id="parag">
                {" "}
                Réservez votre ménage à domicile en un simple clic
              </p>
            </span>
            <i class="fa fa-quote-right"></i>
          </h1>
        </div>
        {/* ***********new cards *******************/}
        <div className="all-cards">
          {this.props.aides
            .filter((jr) =>
              this.state.jour === "" ? jr : jr.dispo.includes(this.state.jour)
            )
            .filter((dl) =>
              this.state.ville === "" ? dl : dl.ville === this.state.ville
            )
            .filter((serv) =>
              this.state.service === ""
                ? serv
                : serv.service === this.state.service
            )
            /////////////////////// pagination ///////////////////////////
            .filter(
              (l, index) =>
                (this.state.page - 1) * this.state.pageSize <= index &&
                index < this.state.page * this.state.pageSize
            )
            .map((el) => (
              <div>
                <div class="card-container">
                  <span class="pro">PRO</span>
                  <img
                    class="round"
                    src={"http://localhost:8000/" + el.photo}
                    style={({ width: "200px" }, { height: "200px" })}
                    alt="user"
                  />
                  <h3>{el.nom}</h3>
                  <h6>{el.ville}</h6>
                  {/************************ * Rating *********************/}
                  <span>
                    <Rating el={el} />
                  </span>

                  <h6>{el.age}</h6>
                  <h6>{el.exp}</h6>
                  <p>
                    {el.service}
                    <br />{" "}
                  </p>
                  <div class="buttons">
                    {!this.props.user.role &&
                    this.props.user.role !== "Aide ménagère" ? (
                      <button class="primary" onClick={this.toggle}>
                        Connexion
                      </button>
                    ) : this.props.user.role === "Client" ? (
                      /////////////////// add réservation ///////////////////
                      <AddReservation el={el} />
                    ) : (
                      ""
                    )}
                  </div>

                  <div class="skills">
                    <h6>{el.sexe}</h6>{" "}
                    <ul>
                      {el.dispo.map((el) => (
                        <li>{el}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/************** * Pagination ******************/}
        <div className="pagination">
          <Pagination
            defaultCurrent={1}
            pageSize={3}
            onChange={this.page}
            total={this.props.aides.length}
          />
        </div>

        {/*************************** * cards horizontales ***********************/}
        {/* <!-- News jumbotron --> */}

        <div class="jumbotron text-center hoverable p-4 card-horizontale">
          {/* <!-- Grid row --> */}
          <div class="row">
            {/* <!-- Grid column --> */}
            <div class="col-md-4 offset-md-1 mx-3 my-3">
              {/* <!-- Featured image --> */}
              <div class="view overlay">
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg"
                  class="img-fluid"
                  alt="Sample image for first version of blog listing"
                />
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-7 text-md-left ml-3 mt-3">
              {/* <!-- Excerpt --> */}
              <a href="#!" class="green-text">
                <h6 class="h6 pb-1">
                  <i class="fas fa-desktop pr-1"></i> Work
                </h6>
              </a>

              <h4 class="h4 mb-4">This is title of the news</h4>

              <p class="font-weight-normal">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque, totam rem aperiam, eaque ipsa quae ab
              </p>
              <p class="font-weight-normal">
                by{" "}
                <a>
                  <strong>Carine Fox</strong>
                </a>
                , 19/08/2016
              </p>

              <a class="btn btn-success">Read more</a>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}
        </div>

        {/********************** * cards + carousel ***********************/}

        <CardCarousel />
        {/************ * button back to top ************************/}
        <div className="button-to-top">
          <ScrollUpButton
            StopPosition={0}
            ShowAtPosition={150}
            EasingType="easeOutCubic"
            AnimationDuration={500}
            ContainerClassName="ScrollUpButton__Container"
            TransitionClassName="ScrollUpButton__Toggled"
            style={({ width: 100 }, { borderRadius: "50%" })}
            ToggledStyle={{ right: 100 }}
          />
        </div>
        {/* stat*/}
        <section id="trustproof" class="simple-section trustproof">
          <div class="row trust__items row">
            <div class="col-md-3">
              <div class="trust text-center">
                <p className="text-size">Plus de</p>
                <br></br>
                <p class="trust--bold">100 000</p>
                <br></br>
                <p className="text-size">foyers nettoyés en France</p>
              </div>
            </div>
            <div class="col-md-3 columns">
              <div class="trust text-center ">
                <p className="text-size">Déjà</p>
                <br></br>
                <p class="trust--bold">80 000</p>
                <br></br>
                <p className="text-size">clients satisfaits</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="trust text-center">
                <p className="text-size">Note Moyenne de</p>
                <br></br>
                <p class="trust--bold">4.7 / 5</p>
                <br></br>
                <p className="text-size">étoiles</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="trust">
                <p className="text-center text-size  ">Disponible dans</p>
                <br></br>
                <p class="trust--bold text-center">&gt;10 </p>
                <br></br>
                <p className="text-center text-size">villes en France</p>
              </div>
            </div>
          </div>
        </section>
        {/********************* * modal connexion ***************************************/}

        <div className="connexion">
          <MDBContainer autoWidth="false">
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
              <MDBModalHeader toggle={this.toggle}>Se connecter</MDBModalHeader>
              <MDBModalBody>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol md="6">
                      <form>
                        <div className="grey-text">
                          <i
                            class="fas fa-envelope"
                            style={{ fontSize: "30px" }}
                          ></i>
                          <MDBInput
                            style={{ color: "black" }}
                            label="Adresse email"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                            onChange={(e) =>
                              this.setState({ email: e.target.value })
                            }
                          />
                          <i
                            class="fas fa-lock"
                            style={{ fontSize: "30px" }}
                          ></i>
                          <MDBInput
                            style={{ color: "black" }}
                            label="Mot de passe"
                            group
                            type="password"
                            validate
                            error="wrong"
                            success="right"
                            onChange={(e) =>
                              this.setState({ password: e.target.value })
                            }
                          />
                        </div>
                      </form>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggle}>
                  Fermer{" "}
                </MDBBtn>
                <MDBBtn
                  gradient="blue"
                  onClick={() =>
                    this.props.signin({
                      email: this.state.email,
                      password: this.state.password,
                    })
                  }
                >
                  Se connecter
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer>
        </div>
        {/*************************** modal pour confirmation de reservation ***********************/}
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

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (el) => dispatch(login(el)),
    getUser: () => dispatch(getUser()),
    getAideFromDB: () => dispatch(getAideFromDB()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Accueil);
