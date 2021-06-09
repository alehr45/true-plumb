import React from "react";
import { Image, Button , Carousel } from "react-bootstrap";
import logo from "../images/logo1.png";
import pic1 from "../images/trueplumb-image1.jpeg";
import pic2 from "../images/trueplumb-image2.jpeg";
import pic3 from "../images/trueplumb-image3.jpeg";
import pic4 from "../images/trueplumb-image4.jpeg";

function Home() {
  return (
    <div>
      <div className="logo">
        <style>{"body { background-color: white; }"}</style>
        <Image className="pic" src={logo} />
        <div class="info"></div>
        
        <h1 className="call">Call True Plumb First!</h1>
        <h5 className="info1">Expert and reliable plumbing service in Chattanooga.{" "}
        </h5>
        <h5 className="info1">Licensed, experienced, locally owned and trusted.</h5>
        <h5 className="info1">Free estimates.</h5>
        <h5 className="info3">Schedule an appointment now.</h5>
        <Button variant="secondary">Call Now!</Button>{" "}
      </div>
      <Carousel className="carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ pic1 }
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ pic2 }
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ pic3 }
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ pic4 }
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Fourth slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


     
      </div>
    
  );
}
export default Home;
