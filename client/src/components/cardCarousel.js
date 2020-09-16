import React from "react";
import ar4 from "./images/ar4.jpg";
import ar2 from "./images/ar2.jpg";
import ar3 from "./images/ar3.jpg";

class CardCarousel extends React.Component {
  state = {
    collapsed: false,
    lire: false,
  };
  render() {
    return (
      <div className="card-carousel">
        <div class=" py-3 container-carousel text-horizontal">
          {/* <!-- Card Start --> */}
          <div class="card row-card-carousel container text-horizontal">
            <div class="row  ">
              <div class="col-md-7 px-3  text-horizontal">
                <div class="card-block px-6 ">
                  <h4
                    class="display-4 titre-carousel-horizontal "
                    style={{ fontSize: 18 }}
                  >
                    {" "}
                    Prestation après prestation, nous devenons le meilleur
                    service de ménage{" "}
                  </h4>
                  <p class="lead p-carousel-horizontal col-sm-12 text-horizontal">
                    {" "}
                    Nous imaginons une planète où tout le monde vit dans un
                    environnement sain. Où chacun peut faire appel à une aide
                    ménagère de qualité, grâce à la technologie. Où les hommes
                    et les femmes de ménage sont considérés comme nos héros du
                    quotidien. Nous construisons ce monde chaque jour un peu
                    plus. Et l’histoire s’écrit avec vous.
                  </p>
                  {!this.state.lire ? (
                    <a
                      style={{ color: "#4b92dc", fontSize: 15 }}
                      onClick={() => this.setState({ lire: !this.state.lire })}
                    >
                      Lire la suite ...
                    </a>
                  ) : null}
                  {this.state.lire ? (
                    <p class="lead p-carousel-horizontal">
                      {" "}
                      Derrière chaque commande, il y a un homme, une femme de
                      ménage, qui quitte sa maison pour s'occuper de celle d'un
                      autre. Conscients de leurs efforts, nous donnons le
                      maximun pour améliorer leur quotidien.
                    </p>
                  ) : null}
                  <br></br>
                </div>
              </div>
              {/* <!-- Carousel start --> */}
              <div class="col-md-5">
                <div
                  id="CarouselTest"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators">
                    <li
                      data-target="#CarouselTest"
                      data-slide-to="0"
                      class="active"
                    ></li>
                    <li data-target="#CarouselTest" data-slide-to="1"></li>
                    <li data-target="#CarouselTest" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        class="d-block"
                        src={ar2}
                        alt=""
                        style={{ width: "774px" }}
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block"
                        src={ar3}
                        alt=""
                        style={{ width: "774px" }}
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        class="d-block"
                        src={ar4}
                        alt=""
                        style={{ width: "774px" }}
                      />
                    </div>
                    <a
                      class="carousel-control-prev"
                      href="#CarouselTest"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a
                      class="carousel-control-next"
                      href="#CarouselTest"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End of carousel --> */}
            </div>
          </div>
          {/* <!-- End of card --> */}
        </div>
      </div>
    );
  }
}

export default CardCarousel;
