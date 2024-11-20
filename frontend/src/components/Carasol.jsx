import React from "react";

const CarouselComponent = () => {
  const imageSrc = "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"; // Image URL
  const altText = "Carousel Slide"; // Alt text for accessibility

  return (
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img src={imageSrc} className="d-block w-100" alt={altText} style={{ height: "500px", objectFit: "cover" }} />
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Example headline.</h1>
              <p className="opacity-75">
                Some representative placeholder content for the first slide of the carousel.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Sign up today
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img src={imageSrc} className="d-block w-100" alt={altText} style={{ height: "500px", objectFit: "cover" }} />
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>Some representative placeholder content for the second slide of the carousel.</p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img src={imageSrc} className="d-block w-100" alt={altText} style={{ height: "500px", objectFit: "cover" }} />
          <div className="container">
            <div className="carousel-caption">
              <h1>Example headline 3.</h1>
              <p>Some representative placeholder content for the third slide of the carousel.</p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Join us
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="carousel-item">
          <img src={imageSrc} className="d-block w-100" alt={altText} style={{ height: "500px", objectFit: "cover" }} />
          <div className="container">
            <div className="carousel-caption">
              <h1>Example headline 4.</h1>
              <p>Some representative placeholder content for the fourth slide of the carousel.</p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Get started
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Slide 5 */}
        <div className="carousel-item">
          <img src={imageSrc} className="d-block w-100" alt={altText} style={{ height: "500px", objectFit: "cover" }} />
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>Final headline example.</h1>
              <p>Some representative placeholder content for the fifth slide of the carousel.</p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Browse our services
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
