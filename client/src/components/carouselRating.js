import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { getRatingFromDB } from "../actions/ratingAction";
import { connect } from "react-redux";
let tab = [];
export class CarouselRating extends Component {
  componentDidMount() {
    this.props.getRatingFromDB();
  }

  render() {
    tab = Array(5).fill(<p>ok</p>);
    return (
      <div className="carousel-proof">
        <div className="carousel-rating">
          <OwlCarousel
            className="owl-theme"
            loop={true}
            margin={20}
            nav={true}
            dots={false}
            autoplay={true}
            autoplayTimeout={2000}
            items={3}
          >
            {this.props.rating.map((el) => (
              <>
                <div className="item">
                  <h3 className="text-center" style={{ fontSize: "30px",color:"white" ,fontWeight:800,fontFamily:"Roboto Mono, monospace"}}>
                    {el.nom_prenom}
                  </h3>
                  <h1 className="text-center" style={{ fontSize: "30px" }}>
                    {el.rating === 5 ? (
                      <>
                        {
                          <i
                            class="fas fa-star"
                            style={{ color: "rgba(29, 210, 177, 0.7)" }}
                          ></i>
                        }
                        {/* <i class="fas fa-star"  style={{ color: "blue" }}></i> */}
                        <i
                          class="fas fa-star"
                          style={{ color: "rgba(29, 210, 177, 0.7)" }}
                        ></i>
                        <i
                          class="fas fa-star"
                          style={{ color: "rgba(29, 210, 177, 0.7)" }}
                        ></i>
                        <i
                          class="fas fa-star"
                          style={{ color: "rgba(29, 210, 177, 0.7)" }}
                        ></i>
                        <i
                          class="fas fa-star"
                          style={{ color: "rgba(29, 210, 177, 0.7)" }}
                        ></i>{" "}
                      </>
                    ) : el.rating === 4 ? (
                      <>
                        <i
                          class="fas fa-star"
                          style={{ color: "rgba(29, 210, 177, 0.7)" }}
                        ></i>
                        <i
                          class="fas fa-star"
                          style={{ color: "rgba(29, 210, 177, 0.7)" }}
                        ></i>
                        <i
                          class="fas fa-star"
                          style={{ color: "rgba(29, 210, 177, 0.7)" }}
                        ></i>
                        <i
                          class="fas fa-star"
                          style={{ color: "rgba(29, 210, 177, 0.7)" }}
                        ></i>
                        <i class="fas fa-star" style={{ color: "white" }}></i>{" "}
                      </>
                    ) : el.rating === 3 ? (
                      <>
                        {" "}
                        <i
                          class="fas fa-star"
                          style={{ color: "rgba(29, 210, 177, 0.7)" }}
                        ></i>
                        <i
                          class="fas fa-star"
                          style={{ color: "rgba(29, 210, 177, 0.7)" }}
                        ></i>
                        <i
                          class="fas fa-star"
                          style={{ color: "rgba(29, 210, 177, 0.7)" }}
                        ></i>
                        <i class="fas fa-star" style={{ color: "white" }}></i>
                        <i
                          class="fas fa-star"
                          style={{ color: "white" }}
                        ></i>{" "}
                      </>
                    ) : el.rating === 2 ? (
                      <>
                        {" "}
                        <i
                          class="fas fa-star"
                          style={{ color: "rgba(29, 210, 177, 0.7)" }}
                        ></i>
                        <i
                          class="fas fa-star"
                          style={{ color: "rgba(29, 210, 177, 0.7)" }}
                        ></i>
                        <i class="fas fa-star" style={{ color: "white" }}></i>
                        <i class="fas fa-star" style={{ color: "white" }}></i>
                        <i
                          class="fas fa-star"
                          style={{ color: "white" }}
                        ></i>{" "}
                      </>
                    ) : (
                      <>
                        <i
                          class="fas fa-broom icon"
                          style={{ color: "rgba(29, 210, 177, 0.7)" }}
                        ></i>
                        <i class="fas fa-star" style={{ color: "white" }}></i>
                        <i class="fas fa-star" style={{ color: "white" }}></i>
                        <i class="fas fa-star" style={{ color: "white" }}></i>
                        <i class="fas fa-star" style={{ color: "white" }}></i>
                      </>
                    )}{" "}
                  </h1>

                  <h3 className="text-center" style={{color:"white",fontWeight:500}}>"{el.msg}"</h3>
                </div>
              </>
            ))}
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rating: state.rating,
  };
};

export default connect(mapStateToProps, { getRatingFromDB })(CarouselRating);
