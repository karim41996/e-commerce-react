import React from "react";
import { Carousel } from "react-bootstrap";

const images = [
  { src: "./assets/main.png.jpg", alt: "Card", isHero: true },
  { src: "./assets/img1.jpg", alt: "First slide" },
  { src: "./assets/img4.jpg" },
  { src: "./assets/img2.jpg", alt: "Second slide" },
  { src: "./assets/img3.jpg", alt: "Third slide" },
];

const Home = () => {
  return (
    <>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            {image.isHero ? (
              <div className="hero border-1 pb-3">
                <div className="card bg-dark text-white border-0 mx-3">
                  <img
                    className="card-img img-fluid"
                    src={image.src}
                    alt={image.alt}
                  />
                  <div className="card-img-overlay d-flex align-items-center">
                    <div className="container">
                      <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
                      <p className="card-text fs-5 d-none d-sm-block">
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card mx-3">
                <img className="card-img img-fluid" src={image.src} alt={image.alt} />
              </div>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Home;