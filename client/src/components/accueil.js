import React, { Component } from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button"; //Add this line Here
import "../App.css";
import { Pagination } from "antd";
import { MDBAnimation } from "mdbreact";
import window from "./images/window.png"
import carpet from"./images/carpet.png"
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
  
} from "mdbreact";

import { login } from "../actions/auth";
import { getAideFromDB } from "../actions/aideActionCreator";
import { getUser } from "../actions/auth";
import { connect } from "react-redux";
import Pub from "./publicité";
import AddReservation from "./dashboardClient/choisirReservation";
import CardCarousel from "./cardCarousel";
import Contact from "./contact";
import CarouselRating from "./carouselRating";

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
            <span class="text-with-quotes">
              <p id="parag">
                {" "}
                <i
                  class="fa fa-quote-left"
                  style={{ color: "rgba(29, 210, 177, 0.7)", fontSize: 40 }}
                ></i>{" "}
                Nos Clients en parlent{" "}
                <i
                  class="fa fa-quote-right"
                  style={{ color: "rgba(29, 210, 177, 0.7)", fontSize: 40 }}
                ></i>
              </p>
            </span>
          </h1>
        </div>
        {/************ * caroussel rating *******************************/}
        <CarouselRating />
        {/************************* * text ****************************/}
        <div className="text">
          <h1>
            {" "}
            <span class="text-with-quotes">
              <p id="parag">
                {" "}
                <i
                  class="fa fa-quote-left"
                  style={{ color: "rgba(29, 210, 177, 0.7)", fontSize: 30 }}
                ></i> {" "}
                Nos Services{" "}
                <i
                  class="fa fa-quote-right"
                  style={{ color: "rgba(29, 210, 177, 0.7)", fontSize: 30 }}
                ></i>
              </p>
            </span>
          </h1>
        </div>
        {/********************** * cards + carousel ***********************/}

        <CardCarousel />
        {/************************* * text ****************************/}
        <div className="text">
          <h1>
            {" "}
            <span class="text-with-quotes">
              <p id="parag" className="parag-acceuil">
                {" "}
                <i class="fa fa-quote-left"  style={{ color: "rgba(29, 210, 177, 0.7)", fontSize: 30 }}></i>
               {" "} Réservez votre ménage à domicile en un simple clic{" "}
                <i class="fa fa-quote-right" style={{ color: "rgba(29, 210, 177, 0.7)", fontSize: 30 }}></i>
              </p>
            </span>
          </h1>
        </div>

        {/************ ************** les filtres ************************/}
        <div class="card card-image"></div>
        <div class="text-white text-center  py-5 px-4 card-filtre">
          <div class="py-5">
            {/* <!-- Content --> */}

            <h2 class="card-title h2 my-4 py-2" style={{ fontSize: 40 }}>
              Plus qu'un service, c'est un confort de vie{" "}
            </h2>
            <p class="mb-4 pb-2 px-md-5 mx-md-5" style={{ fontSize: 30 }}>
              Trouvez un aide ménagère près de chez vous !
            </p>
            {/* <a class="btn peach-gradient"><i class="fas fa-clone left"></i> View project</a> */}
            <div className="filtre container Jumbotron-filter">
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

        {/************************* * text ****************************/}

        <div className="text">
          <h1 className="equipe">
            {" "}
            <span class="text-with-quotes">
              <p id="parag">
                {" "}
                <i
                  class="fa fa-quote-left"
                  style={{ color: "rgba(29, 210, 177, 0.7)", fontSize: 30 }}
                ></i>{" "}
                Notre Equipe{" "}
                <i
                  class="fa fa-quote-right"
                  style={{ color: "rgba(29, 210, 177, 0.7)", fontSize: 30 }}
                ></i>
              </p>
            </span>
          </h1>
        </div>
        {/* ***********new cards *******************/}
        <div className="all-cards-accueil">
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
                    <h6 style={{ color: "#ffffff", fontSize: "30" }}>
                      {el.sexe}
                    </h6>{" "}
                    <ul>
                      {el.dispo ? el.dispo.map((el) => <li>{el}</li>) : null}
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

        {/****************** * statiques ************************/}
        <section id="trustproof" class="simple-section trustproof">
          <div class="row trust__items row">
            <div class="col-md-3">
              <div class="trust text-center">
              <i class="far fa-building" style={{color:"white",fontSize:60}}></i>

                <br></br>
                <br></br>
                <p className="text-size">Nettoyage bureatique</p>
              </div>
            </div>
            <div class="col-md-3 columns">
              <div class="trust text-center ">
              <i class="fas fa-home" style={{color:"white",fontSize:60}}></i>

                <br></br>
                <br></br>
                <p className="text-size">Ménage à domicile</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="trust text-center">
              <img src={window} alt="window" style={{width:70}}/>

                <br></br>
                <br></br>
                <p className="text-size">Nettoyage des vitres</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="trust">
              <img src={carpet} alt="carpet" style={{width:70, color:"white"}}/>

                <br></br>

                <br></br>
                <p className="text-center text-size">Nettoyage des tapis</p>
              </div>
            </div>
          </div>
        </section>

        {/************************* * text ****************************/}
        <div className="text-contact">
          <h1>
            {" "}
            <span class="text-with-quotes">
              <p>
                {" "}
                <i
                  class="fa fa-quote-left"
                  style={{ color: "rgba(29, 210, 177, 0.7)", fontSize: 30 }}
                ></i>{" "}
                Contactez-nous{" "}
                <i
                  class="fa fa-quote-right"
                  style={{ color: "rgba(29, 210, 177, 0.7)", fontSize: 30 }}
                ></i>
              </p>
            </span>
          </h1>
        </div>

        {/*************************** * cards horizontales ***********************/}
        {/* <!-- News jumbotron --> */}

        <div class="jumbotron text-center hoverable p-4 card-horizontale">
          {/* <!-- Grid row --> */}
          <div class="row row-contact">
            {/* <!-- Grid column --> */}
            <div class="col-md-5 ">
              {/* <!-- Featured image --> */}
              <div class="view overlay contact-img">
                <MDBAnimation type="bounce" infinite>
                  <img
                    src="https://img.freepik.com/free-vector/emails-concept-illustration_114360-1355.jpg?size=338&ext=jpg&ga=GA1.2.789949379.1584276045"
                    style={{ width: 500, height: 500 }}
                  />
                </MDBAnimation>
              </div>
            </div>

            <div class="col-md-7">
              {/*************** * contact ************************/}

              <Contact />
            </div>
          </div>
        </div>

        {/************ * button back to top ************************/}
        <div>
        <div className="button-to-top">
          {/*<ScrollUpButton
            StopPosition={0}
            ShowAtPosition={150}
            EasingType="easeOutCubic"
            AnimationDuration={500}
            ContainerClassName="ScrollUpButton__Container"
            TransitionClassName="ScrollUpButton__Toggled"
            style={
              ({ width: 100 },
              { borderRadius: "50%", backgroundColor: "rgba(29, 210, 177)" })
            }
            ToggledStyle={{ right: 100 }}
          /> */}
        </div>
        </div>
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
