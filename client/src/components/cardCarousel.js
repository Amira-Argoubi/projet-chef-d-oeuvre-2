import React from "react";
import ar4 from "./images/ar4.jpg";
import ar2 from "./images/ar2.jpg";
import ar3 from "./images/ar3.jpg";

function CardCarousel() {
  return (
    <div>
      <div class=" py-3 container-carousel">
        <div class="titre h1 text-center">Horizontal cards - Bootstrap 4</div>
        {/* <!-- Card Start --> */}
        <div class="card">
          <div class="row ">
            <div class="col-md-7 px-3">
              <div class="card-block px-6">
                <h4 class="card-title">
                  Horizontal Card with Carousel - Bootstrap 4{" "}
                </h4>
                <p class="card-text">
                  The Carousel code can be replaced with an img src, no problem.
                  The added CSS brings shadow to the card and some adjustments
                  to the prev/next buttons and the indicators is rounded now. As
                  in Bootstrap 3
                </p>
                <p class="card-text">
                  Made for usage, commonly searched for. Fork, like and use it.
                  Just move the carousel div above the col containing the text
                  for left alignment of images
                </p>
                <br></br>
                <a href="#" class="mt-auto btn btn-primary  ">
                  Read More
                </a>
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
                    <img class="d-block" src={ar2} alt="" style={{width:"774px"}} />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block" src={ar3} alt="" style={{width:"774px"}} />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block" src={ar4} alt="" style={{width:"774px"}} />
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

export default CardCarousel;
