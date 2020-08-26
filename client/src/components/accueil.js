import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
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

/******************************************************** ******/
export class Accueil extends Component {
  state = {
    jour: "",
    ville: "",
    service: "",
    modal: false,
  };

  componentDidMount() {
    this.props.getAideFromDB();
    this.props.getUser();
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  /************************************************************ */
  render() {
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
        <div className="text">
          <h1>
            {" "}
            <i class="fa fa-quote-left"></i>
            <span class="black">
              <p>
                Un service d’aide à domicile <strong>de qualité</strong>
              </p>
            </span>
            <i class="fa fa-quote-right"></i>
          </h1>
        </div>
        {/**** * *****carousel *********/}
        <div className="caroussel">
          <MDBContainer>
            <MDBCarousel
              activeItem={1}
              length={3}
              showControls={true}
              showIndicators={true}
              className="z-depth-1"
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://media.istockphoto.com/photos/woman-wiping-dust-from-shelf-and-other-furniture-in-living-room-picture-id1220442502?b=1&k=6&m=1220442502&s=170667a&w=0&h=JPuSLNKXK01C4pM1JyDw8gzeHPBp00UIZqHk61_cB-g="
                      style={{ height: "400px" }}
                      alt="First slide"
                    />
                    <MDBMask overlay="black-light" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <h3 className="h3-responsive">Light mask</h3>
                    <p>First text</p>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://media.gettyimages.com/photos/time-to-get-clean-picture-id894344972?b=1&k=6&m=894344972&s=612x612&w=0&h=wP3vlVQKz-UFOjmLR5fAlK6tRVKa5qnp_D1y6VJvLEI="
                      style={{ height: "400px" }}
                      alt="Second slide"
                    />
                    <MDBMask overlay="black-strong" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <h3 className="h3-responsive">Strong mask</h3>
                    <p>Second text</p>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://media.istockphoto.com/photos/cleaning-with-spray-detergent-rubber-gloves-and-dish-cloth-on-work-picture-id1202033073?b=1&k=6&m=1202033073&s=170667a&w=0&h=nd8p55j2wjh2nNXEUuLa6PefgvTqOSCUcZ096bby2Wo="
                      style={{ height: "400px" }}
                      alt="Third slide"
                    />
                    <MDBMask overlay="black-slight" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <h3 className="h3-responsive">Slight Mast</h3>
                    <p>Third text</p>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        </div>
        {/* text */}
        <div className="text">
          <h1>
            {" "}
            <i class="fa fa-quote-left"></i>
            <span class="black">
              <p> Réservez votre ménage à domicile en un simple clic</p>
            </span>
            <i class="fa fa-quote-right"></i>
          </h1>
        </div>
        {/************ ************** les filtres ************************/}
        <div className="filtre container">
          {/* *********** filtre par délégation ***************/}
          <select
            className="browser-default custom-select"
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

        {/* ***********cards *******************/}
        {/* fonction filtre */}
        <div className="cards container">
          {this.props.aides
            
            .filter((jr) =>
              this.state.jour === "" ? jr : jr.dispo === this.state.jour
            )
            .filter((dl) =>
              this.state.ville === "" ? dl : dl.ville === this.state.ville
            )
            .filter((serv) =>
              this.state.service === ""
                ? serv
                : serv.service === this.state.service
            )

            .map((el) => (
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      className="card-aide"
                      src={"http://localhost:8000/" + el.photo}
                      alt="Avatar"
                    />
                    <br></br>
                    <h2>{el.nom}</h2>

                    <hr className="line"></hr>
                    <h5>
                      Plus de détails <MDBIcon icon="angle-double-right" />
                    </h5>
                  </div>
                  <div className="flip-card-back">
                    <h1>{el.age}</h1>
                    <h4>{el.ville}</h4>
                    <h4>{el.exp}</h4>
                    <h4>{el.service}</h4>

                    <MDBBtn
                      gradient="blue"
                      onClick={this.toggle}
                      style={{ borderRadius: "20px" }}
                    >
                      Réserver
                      <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="connexion">
          <MDBContainer autoWidth="false">
            {/* <MDBBtn
              gradient="blue"
              onClick={this.toggle}
              style={{ borderRadius: "20px" }}
            >
              Connexion
            </MDBBtn> */}
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
// /**************ESSAI PAGINATION SANS FILTRE */
// import React, { Component } from "react";
// import {
//   MDBCarousel,
//   MDBCarouselCaption,
//   MDBCarouselInner,
//   MDBCarouselItem,
//   MDBView,
//   MDBMask,
//   MDBContainer,
//   MDBIcon,
//   MDBBtn,
//   MDBModal,
//   MDBModalBody,
//   MDBModalHeader,
//   MDBModalFooter,
//   MDBRow,
//   MDBCol,
//   MDBInput,
// } from "mdbreact";
// import { login } from "../actions/auth";
// import { getAideFromDB } from "../actions/aideActionCreator";
// import { getUser } from "../actions/auth";
// import { connect } from "react-redux";

// /******************************************************** ******/
// export class Accueil extends Component {
//   state = {
//     jour: "",
//     ville: "",
//     modal: false,
//     /**** * pagination   */
//     currentPage: 1,
//     todosPerPage: 3,
//   };

//   componentDidMount() {
//     this.props.getAideFromDB();
//     this.props.getUser();
//   }

//   toggle = () => {
//     this.setState({
//       modal: !this.state.modal,
//     });
//   };
//   /************pagination */
//   handleClick = (event) => {
//     this.setState({
//       currentPage: Number(event.target.id),
//     });
//   };
//   /************************************************************ */
//   render() {
//     const villes = [
//       "Bab El Bhar",
//       "Bab Souika",
//       "Carthage",
//       "Cité El Khadra",
//       "Sidi Hassine",
//       "Sidi El Béchir",
//       "Séjoumi",
//       "Médina",
//       "Le Kram",
//       "Le Bardo",
//       "La Marsa",
//       "La Goulette",
//       "Hraïria",
//       "Ezzouhour",
//       "Ettahrir",
//       "Ouardia",
//       "El Omrane supérieur",
//       "El Omrane",
//       "El Menzah",
//       "El Kabaria",
//       "Djebel Jelloud",
//     ];
//     //console.log("taw", this.props.user);

//     /**********pagination */
//     const { currentPage, todosPerPage } = this.state;

//     // Logic for displaying current todos
//     const indexOfLastTodo = currentPage * todosPerPage;
//     const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
//     // const currentTodos = this.props.aides
//     //   .slice(indexOfFirstTodo, indexOfLastTodo)
//     //   .filter((jr) =>
//     //     this.state.jour === "" ? jr : jr.dispo === this.state.jour
//     //   )
//     //   .filter((dl) =>
//     //     this.state.ville === "" ? dl : dl.ville === this.state.ville
//     //   );

//     // Logic for displaying page numbers
//     const pageNumbers = [];
//     for (
//       let i = 1;
//       i <= Math.ceil(this.props.aides.length / todosPerPage);
//       i++
//     ) {
//       pageNumbers.push(i);
//     }

//     const renderPageNumbers = pageNumbers.map((number) => {
//       return (
//         <li key={number} id={number} onClick={this.handleClick}>
//           {number}
//         </li>
//       );
//     });
//     /********************* */
//     return (
//       <div className="accueil">
//         <div className="text">
//           <h1>
//             {" "}
//             <i class="fa fa-quote-left"></i>
//             <span class="black">
//               <p>
//                 Un service d’aide à domicile <strong>de qualité</strong>
//               </p>
//             </span>
//             <i class="fa fa-quote-right"></i>
//           </h1>
//         </div>
//         {/**** * *****carousel *********/}
//         <div className="caroussel">
//           <MDBContainer>
//             <MDBCarousel
//               activeItem={1}
//               length={3}
//               showControls={true}
//               showIndicators={true}
//               className="z-depth-1"
//             >
//               <MDBCarouselInner>
//                 <MDBCarouselItem itemId="1">
//                   <MDBView>
//                     <img
//                       className="d-block w-100"
//                       src="https://media.istockphoto.com/photos/woman-wiping-dust-from-shelf-and-other-furniture-in-living-room-picture-id1220442502?b=1&k=6&m=1220442502&s=170667a&w=0&h=JPuSLNKXK01C4pM1JyDw8gzeHPBp00UIZqHk61_cB-g="
//                       style={{ height: "400px" }}
//                       alt="First slide"
//                     />
//                     <MDBMask overlay="black-light" />
//                   </MDBView>
//                   <MDBCarouselCaption>
//                     <h3 className="h3-responsive">Light mask</h3>
//                     <p>First text</p>
//                   </MDBCarouselCaption>
//                 </MDBCarouselItem>
//                 <MDBCarouselItem itemId="2">
//                   <MDBView>
//                     <img
//                       className="d-block w-100"
//                       src="https://media.gettyimages.com/photos/time-to-get-clean-picture-id894344972?b=1&k=6&m=894344972&s=612x612&w=0&h=wP3vlVQKz-UFOjmLR5fAlK6tRVKa5qnp_D1y6VJvLEI="
//                       style={{ height: "400px" }}
//                       alt="Second slide"
//                     />
//                     <MDBMask overlay="black-strong" />
//                   </MDBView>
//                   <MDBCarouselCaption>
//                     <h3 className="h3-responsive">Strong mask</h3>
//                     <p>Second text</p>
//                   </MDBCarouselCaption>
//                 </MDBCarouselItem>
//                 <MDBCarouselItem itemId="3">
//                   <MDBView>
//                     <img
//                       className="d-block w-100"
//                       src="https://media.istockphoto.com/photos/cleaning-with-spray-detergent-rubber-gloves-and-dish-cloth-on-work-picture-id1202033073?b=1&k=6&m=1202033073&s=170667a&w=0&h=nd8p55j2wjh2nNXEUuLa6PefgvTqOSCUcZ096bby2Wo="
//                       style={{ height: "400px" }}
//                       alt="Third slide"
//                     />
//                     <MDBMask overlay="black-slight" />
//                   </MDBView>
//                   <MDBCarouselCaption>
//                     <h3 className="h3-responsive">Slight Mast</h3>
//                     <p>Third text</p>
//                   </MDBCarouselCaption>
//                 </MDBCarouselItem>
//               </MDBCarouselInner>
//             </MDBCarousel>
//           </MDBContainer>
//         </div>
//         {/* text */}
//         <div className="text">
//           <h1>
//             {" "}
//             <i class="fa fa-quote-left"></i>
//             <span class="black">
//               <p> Réservez votre ménage à domicile en un simple clic</p>
//             </span>
//             <i class="fa fa-quote-right"></i>
//           </h1>
//         </div>
//         {/************ ************** les filtres ************************/}
//         <div className="filtre container">
//           {/* *********** filtre par délégation ***************/}
//           <select
//             className="browser-default custom-select"
//             style={{ width: "200px" }}
//             onChange={(e) => this.setState({ ville: e.target.value })}
//           >
//             <option value="">Choisir la Délégation</option>
//             {villes.map((el) => (
//               <option>{el}</option>
//             ))}
//           </select>
//           {/* ***********filtre par jour ***************/}

//           <select
//             className="browser-default custom-select"
//             style={{ width: "200px" }}
//             onChange={(e) => this.setState({ jour: e.target.value })}
//           >
//             <option value="">Choisir le jour</option>
//             <option value="Lundi">Lundi</option>
//             <option value="Mardi">Mardi</option>
//             <option value="Mercredi">Mercredi</option>
//             <option value="Jeudi">Jeudi</option>
//             <option value="Vendredi">Vendredi</option>
//             <option value="Samedi">Samedi</option>
//             <option value="Dimanche">Dimanche</option>
//           </select>
//         </div>
//         {/* ***********cards *******************/}
//         {/* fonction filtre */}
//         <div className="cards container">
//           {this.props.aides
//             .slice(indexOfFirstTodo, indexOfLastTodo)
//             .filter((jr) =>
//               this.state.jour === "" ? jr : jr.dispo === this.state.jour
//             )
//             .filter((dl) =>
//               this.state.ville === "" ? dl : dl.ville === this.state.ville
//             )
//             .map((el, index) => (
//               <div className="flip-card" key={index}>
//                 <div className="flip-card-inner">
//                   <div className="flip-card-front">
//                     <img
//                       className="card-aide"
//                       src={"http://localhost:8000/" + el.photo}
//                       alt="Avatar"
//                     />
//                     <br></br>
//                     <h2>{el.nom}</h2>

//                     <hr className="line"></hr>
//                     <h5>
//                       Plus de détails <MDBIcon icon="angle-double-right" />
//                     </h5>
//                   </div>
//                   <div className="flip-card-back">
//                     <h1>{el.age}</h1>
//                     <h4>{el.ville}</h4>
//                     <h4>{el.exp}</h4>

//                     <MDBBtn
//                       gradient="blue"
//                       onClick={this.toggle}
//                       style={{ borderRadius: "20px" }}
//                     >
//                       Réserver
//                       <MDBIcon far icon="paper-plane" className="ml-2" />
//                     </MDBBtn>
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>

//         <div className="connexion">
//           <MDBContainer autoWidth="false">
//             {/* <MDBBtn
//               gradient="blue"
//               onClick={this.toggle}
//               style={{ borderRadius: "20px" }}
//             >
//               Connexion
//             </MDBBtn> */}
//             <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
//               <MDBModalHeader toggle={this.toggle}>Se connecter</MDBModalHeader>
//               <MDBModalBody>
//                 <MDBContainer>
//                   <MDBRow>
//                     <MDBCol md="6">
//                       <form>
//                         <div className="grey-text">
//                           <i
//                             class="fas fa-envelope"
//                             style={{ fontSize: "30px" }}
//                           ></i>
//                           <MDBInput
//                             style={{ color: "black" }}
//                             label="Adresse email"
//                             group
//                             type="email"
//                             validate
//                             error="wrong"
//                             success="right"
//                             onChange={(e) =>
//                               this.setState({ email: e.target.value })
//                             }
//                           />
//                           <i
//                             class="fas fa-lock"
//                             style={{ fontSize: "30px" }}
//                           ></i>
//                           <MDBInput
//                             style={{ color: "black" }}
//                             label="Mot de passe"
//                             group
//                             type="password"
//                             validate
//                             error="wrong"
//                             success="right"
//                             onChange={(e) =>
//                               this.setState({ password: e.target.value })
//                             }
//                           />
//                         </div>
//                       </form>
//                     </MDBCol>
//                   </MDBRow>
//                 </MDBContainer>
//               </MDBModalBody>
//               <MDBModalFooter>
//                 <MDBBtn color="secondary" onClick={this.toggle}>
//                   Fermer{" "}
//                 </MDBBtn>
//                 <MDBBtn
//                   gradient="blue"
//                   onClick={() =>
//                     this.props.signin({
//                       email: this.state.email,
//                       password: this.state.password,
//                     })
//                   }
//                 >
//                   Se connecter
//                   <MDBIcon far icon="paper-plane" className="ml-2" />
//                 </MDBBtn>
//               </MDBModalFooter>
//             </MDBModal>
//           </MDBContainer>
//         </div>
//         {/* pagination */}
//         <ul id="page-numbers">{renderPageNumbers}</ul>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     aides: state.aides,
//     user: state.auth,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     signin: (el) => dispatch(login(el)),
//     getUser: () => dispatch(getUser()),
//     getAideFromDB: () => dispatch(getAideFromDB())
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Accueil);

/************* ESSAI VOIR PLUS************************** */
// import React, { Component } from "react";
// import {
//   MDBCarousel,
//   MDBCarouselCaption,
//   MDBCarouselInner,
//   MDBCarouselItem,
//   MDBView,
//   MDBMask,
//   MDBContainer,
//   MDBIcon,
//   MDBBtn,
//   MDBModal,
//   MDBModalBody,
//   MDBModalHeader,
//   MDBModalFooter,
//   MDBRow,
//   MDBCol,
//   MDBInput,
// } from "mdbreact";
// import { login } from "../actions/auth";
// import { getAideFromDB } from "../actions/aideActionCreator";
// import { getUser } from "../actions/auth";
// import { connect } from "react-redux";

// /******************************************************** ******/
// export class Accueil extends Component {
//   state = {
//     ville: "",
//     modal: false,
//     /******pagination */
//     // items: [],
//     // visible: 2,
//     // error: false,
//   };

//   componentDidMount() {
//     this.props.getAideFromDB();
//     this.props.getUser();
//     /**********pagination */
//   }

//   toggle = () => {
//     this.setState({
//       modal: !this.state.modal,
//     });
//   };
//   /******** pagination********* */

//   // loadMore = () => {
//   //   this.setState((prev) => {
//   //     return { visible: prev.visible + 4 };
//   //   });
//   // };
//   /************************************************************ */
//   render() {
//     const villes = [
//       "Bab El Bhar",
//       "Bab Souika",
//       "Carthage",
//       "Cité El Khadra",
//       "Sidi Hassine",
//       "Sidi El Béchir",
//       "Séjoumi",
//       "Médina",
//       "Le Kram",
//       "Le Bardo",
//       "La Marsa",
//       "La Goulette",
//       "Hraïria",
//       "Ezzouhour",
//       "Ettahrir",
//       "Ouardia",
//       "El Omrane supérieur",
//       "El Omrane",
//       "El Menzah",
//       "El Kabaria",
//       "Djebel Jelloud",
//     ];
//     //console.log("taw", this.props.user);
//     return (
//       <div className="accueil">
//         <div className="text">
//           <h1>
//             {" "}
//             <i class="fa fa-quote-left"></i>
//             <span class="black">
//               <p>
//                 Un service d’aide à domicile <strong>de qualité</strong>
//               </p>
//             </span>
//             <i class="fa fa-quote-right"></i>
//           </h1>
//         </div>
//         {/**** * *****carousel *********/}
//         <div className="caroussel">
//           <MDBContainer>
//             <MDBCarousel
//               activeItem={1}
//               length={3}
//               showControls={true}
//               showIndicators={true}
//               className="z-depth-1"
//             >
//               <MDBCarouselInner>
//                 <MDBCarouselItem itemId="1">
//                   <MDBView>
//                     <img
//                       className="d-block w-100"
//                       src="https://media.istockphoto.com/photos/woman-wiping-dust-from-shelf-and-other-furniture-in-living-room-picture-id1220442502?b=1&k=6&m=1220442502&s=170667a&w=0&h=JPuSLNKXK01C4pM1JyDw8gzeHPBp00UIZqHk61_cB-g="
//                       style={{ height: "400px" }}
//                       alt="First slide"
//                     />
//                     <MDBMask overlay="black-light" />
//                   </MDBView>
//                   <MDBCarouselCaption>
//                     <h3 className="h3-responsive">Light mask</h3>
//                     <p>First text</p>
//                   </MDBCarouselCaption>
//                 </MDBCarouselItem>
//                 <MDBCarouselItem itemId="2">
//                   <MDBView>
//                     <img
//                       className="d-block w-100"
//                       src="https://media.gettyimages.com/photos/time-to-get-clean-picture-id894344972?b=1&k=6&m=894344972&s=612x612&w=0&h=wP3vlVQKz-UFOjmLR5fAlK6tRVKa5qnp_D1y6VJvLEI="
//                       style={{ height: "400px" }}
//                       alt="Second slide"
//                     />
//                     <MDBMask overlay="black-strong" />
//                   </MDBView>
//                   <MDBCarouselCaption>
//                     <h3 className="h3-responsive">Strong mask</h3>
//                     <p>Second text</p>
//                   </MDBCarouselCaption>
//                 </MDBCarouselItem>
//                 <MDBCarouselItem itemId="3">
//                   <MDBView>
//                     <img
//                       className="d-block w-100"
//                       src="https://media.istockphoto.com/photos/cleaning-with-spray-detergent-rubber-gloves-and-dish-cloth-on-work-picture-id1202033073?b=1&k=6&m=1202033073&s=170667a&w=0&h=nd8p55j2wjh2nNXEUuLa6PefgvTqOSCUcZ096bby2Wo="
//                       style={{ height: "400px" }}
//                       alt="Third slide"
//                     />
//                     <MDBMask overlay="black-slight" />
//                   </MDBView>
//                   <MDBCarouselCaption>
//                     <h3 className="h3-responsive">Slight Mast</h3>
//                     <p>Third text</p>
//                   </MDBCarouselCaption>
//                 </MDBCarouselItem>
//               </MDBCarouselInner>
//             </MDBCarousel>
//           </MDBContainer>
//         </div>
//         {/* text */}
//         <div className="text">
//           <h1>
//             {" "}
//             <i class="fa fa-quote-left"></i>
//             <span class="black">
//               <p> Réservez votre ménage à domicile en un simple clic</p>
//             </span>
//             <i class="fa fa-quote-right"></i>
//           </h1>
//         </div>
//         {/************ ************** les filtres ************************/}
//         <div className="filtre container">
//           {/* *********** filtre par délégation ***************/}
//           <select
//             className="browser-default custom-select"
//             style={{ width: "200px" }}
//             onChange={(e) => this.setState({ ville: e.target.value })}
//           >
//             <option>Choisir la Délégation</option>
//             {villes.map((el) => (
//               <option>{el}</option>
//             ))}
//           </select>
//           {/* ***********filtre par jour ***************/}

//           <select
//             className="browser-default custom-select"
//             style={{ width: "200px" }}
//             onChange={(e) => this.setState({ jour: e.target.value })}
//           >
//             <option value="">Choisir le jour</option>
//             <option value="Lundi">Lundi</option>
//             <option value="Mardi">Mardi</option>
//             <option value="Mercredi">Mercredi</option>
//             <option value="Jeudi">Jeudi</option>
//             <option value="Vendredi">Vendredi</option>
//             <option value="Samedi">Samedi</option>
//             <option value="Dimanche">Dimanche</option>
//           </select>
//         </div>
//         {/* ***********cards *******************/}
//         {/* fonction filtre */}
//         {/* pagination */}
//         {/* {this.state.visible < this.props.aides.length && (
//           <button
//             onClick={() => this.loadMore()}
//             type="button"
//             className="load-more"
//           >
//             Load more
//           </button>
//         )} */}
//         <div className="cards container">
//           {this.props.aides
//             .filter((jr) =>
//               this.state.jour === "" ? jr : jr.dispo === this.state.jour
//             )
//             .filter((dl) =>
//               this.state.ville === "" ? dl : dl.ville === this.state.ville
//             )
//             .map((el) => (
//               <div className="flip-card">
//                 {/* pagination */}
//                 {/* <span className="count">{index + 1}</span> */}
//                 <div className="flip-card-inner">
//                   <div className="flip-card-front">
//                     <img
//                       className="card-aide"
//                       src={"http://localhost:8000/" + el.photo}
//                       alt="Avatar"
//                     />
//                     <br></br>
//                     <h2>{el.nom}</h2>

//                     <hr className="line"></hr>
//                     <h5>
//                       Plus de détails <MDBIcon icon="angle-double-right" />
//                     </h5>
//                   </div>
//                   <div className="flip-card-back">
//                     <h1>{el.age}</h1>
//                     <h4>{el.ville}</h4>
//                     <h4>{el.exp}</h4>

//                     <MDBBtn
//                       gradient="blue"
//                       onClick={this.toggle}
//                       style={{ borderRadius: "20px" }}
//                     >
//                       Réserver
//                       <MDBIcon far icon="paper-plane" className="ml-2" />
//                     </MDBBtn>
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>

//         <div className="connexion">
//           <MDBContainer autoWidth="false">
//             <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
//               <MDBModalHeader toggle={this.toggle}>Se connecter</MDBModalHeader>
//               <MDBModalBody>
//                 <MDBContainer>
//                   <MDBRow>
//                     <MDBCol md="6">
//                       <form>
//                         <div className="grey-text">
//                           <i
//                             class="fas fa-envelope"
//                             style={{ fontSize: "30px" }}
//                           ></i>
//                           <MDBInput
//                             style={{ color: "black" }}
//                             label="Adresse email"
//                             group
//                             type="email"
//                             validate
//                             error="wrong"
//                             success="right"
//                             onChange={(e) =>
//                               this.setState({ email: e.target.value })
//                             }
//                           />
//                           <i
//                             class="fas fa-lock"
//                             style={{ fontSize: "30px" }}
//                           ></i>
//                           <MDBInput
//                             style={{ color: "black" }}
//                             label="Mot de passe"
//                             group
//                             type="password"
//                             validate
//                             error="wrong"
//                             success="right"
//                             onChange={(e) =>
//                               this.setState({ password: e.target.value })
//                             }
//                           />
//                         </div>
//                       </form>
//                     </MDBCol>
//                   </MDBRow>
//                 </MDBContainer>
//               </MDBModalBody>
//               <MDBModalFooter>
//                 <MDBBtn color="secondary" onClick={this.toggle}>
//                   Fermer{" "}
//                 </MDBBtn>
//                 <MDBBtn
//                   gradient="blue"
//                   onClick={() =>
//                     this.props.signin({
//                       email: this.state.email,
//                       password: this.state.password,
//                     })
//                   }
//                 >
//                   Se connecter
//                   <MDBIcon far icon="paper-plane" className="ml-2" />
//                 </MDBBtn>
//               </MDBModalFooter>
//             </MDBModal>
//           </MDBContainer>
//         </div>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     aides: state.aides,
//     user: state.auth,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     signin: (el) => dispatch(login(el)),
//     getUser: () => dispatch(getUser()),
//     getAideFromDB: () => dispatch(getAideFromDB()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Accueil);
