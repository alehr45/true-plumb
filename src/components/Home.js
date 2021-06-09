import React from "react";
import { Image, Button , Carousel } from "react-bootstrap";
import logo from "../images/logo1.png";
import pic1 from "../images/trueplumb-image1.jpeg";
import pic2 from "../images/trueplumb-image2.jpeg";
import pic3 from "../images/trueplumb-image3.jpeg";
import pic4 from "../images/trueplumb-image4.jpeg";
import pic5 from "../images/trueplumb-image5.jpeg";
import pic6 from "../images/trueplumb-image6.jpeg";
import coupon from "../images/coupon.pdf"

function Home() {
  return (
    <div>
      <div className="logo">
        <style>{"body { background-color: white; }"}</style>
        <Image className="pic" src={logo} />

        <div>
        <a href={coupon} target="_blank" rel="noreferrer">
      <Button className="button3" variant="warning">
            
       
            <span>Free $15 Coupon</span>
            </Button>
        </a>
     


        </div>
        
        <div class="info"></div>
        
        <h1 className="call">Call True Plumb First!</h1>
        <h5 className="info1">Expert and reliable plumbing service in Chattanooga.{" "}
        </h5>
        <h5 className="info1">Licensed, experienced, locally owned and trusted.</h5>
        <h5 className="info1">Free estimates.</h5>
        <h5 className="info3">Schedule an appointment now.</h5>

        
        <Button className="callnow" variant="success">Call Now!</Button>{" "}
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
      alt="Fourth slide"
    />
    <Carousel.Caption>
      <h3>Fourth slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>



  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ pic5 }
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Fifth slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>



<Carousel.Item>
    <img
      className="d-block w-100"
      src={ pic6 }
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Sixth slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>


  
</Carousel>




      </div>
    
  );
}
export default Home;
