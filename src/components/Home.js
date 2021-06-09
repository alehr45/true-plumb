import React from "react";
import { Image, Button, Carousel } from "react-bootstrap";
import logo from "../images/logo1.png";
import pic1 from "../images/trueplumb-image1.jpeg";
import pic2 from "../images/trueplumb-image2.jpeg";
import pic3 from "../images/trueplumb-image3.jpeg";
import pic4 from "../images/trueplumb-image4.jpeg";
import pic5 from "../images/trueplumb-image5.jpeg";
import pic6 from "../images/trueplumb-image6.jpeg";
import coupon from "../images/coupon.pdf";

function Home() {
  return (
    <div>
      <div className="logo">
        <style>{"body { background-color: white; }"}</style>
        <Image className="pic" src={logo} />
        <div></div>
        <div class="info"></div>
        <h1 className="call">Need Help? Call True Plumb First!</h1>
        <h5 className="info1">
          Expert and reliable plumbing service in Chattanooga.{" "}
        </h5>
        <h5 className="info1">
          Licensed, experienced, locally owned and trusted.
        </h5>
        <h5 className="info1">Free estimates.</h5>
       
        <Button className="callnow" variant="success" href="tel:+1-423-305-8212">
          Book an Appointment
        </Button>{" "}
      </div>
      <Carousel className="carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={pic1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pic2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pic3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pic4} alt="Fourth slide" />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pic5} alt="First slide" />
          <Carousel.Caption>
            <h3>Fifth slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pic6} alt="First slide" />
          <Carousel.Caption>
            <h3>Sixth slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
   
    <h5 className="services">Services Available</h5>
    <ul className="serviceslist">
      <li>Toilet Repair</li>
      <li>Drain cleaning</li>
      <li>Shower Repair</li>
      <li>Tankless Water Heaters Installation/Repair</li>
      <li>Water Heater Tank Repair/Replacement</li>
      <li>Sink Repair</li>
      <li>Faucet Repair</li>
      <li>Garbage Disposals</li>
      <li>Dishwasher Installation</li>
      <li>Remodels</li>
      <li>Complete Plumbing repairs & solutions</li>
      <li>Leak repair</li>
    </ul>

    <a href={coupon} target="_blank" rel="noreferrer">
        <Button className="button3" variant="success">
          <span>Free $15 Coupon</span>
        </Button>
      </a>
     
    </div>

    
   
  );
}
export default Home;
