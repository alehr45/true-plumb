import React from "react";
import { Image, Button, Carousel, Navbar, Container } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import logo from "../images/trueplumblogo.png";
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
     

        <Carousel className="carousel">
          <Carousel.Item>
            <img className="d-block w-100" src={pic1} alt="First slide" />
            <Carousel.Caption>
              <h3>Keep it clean with True Plumb</h3>
              <p>
                Cleanliness is priority at our organization. We show up wearing
                shoe covers and use drop cloths to protect your home.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={pic2} alt="Second slide" />

            <Carousel.Caption>
              <h3>We Take the Time</h3>
              <p>
                We will make sure that everything is true and plumb before we
                leave. Anything worth doing is worth doing right!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={pic3} alt="Third slide" />
            <Carousel.Caption>
              <h3>We Stand Behind the Work</h3>
              <p>
                You shouldn't pay to worry! Upon hiring us you can depend on the
                quality, we offer a 90 day labor guarantee.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={pic4} alt="Fourth slide" />
            <Carousel.Caption>
              <h3>Free Estimates</h3>
              <p>
                We would be thrilled to come take a look at your upcoming
                project! Call the office to set up an estimate, sometimes we can
                even quote you over the phone.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={pic5} alt="First slide" />
            <Carousel.Caption>
              <h3>No Job is Too Small</h3>
              <p>
                We can handle any plumbing related issue in your house. If you
                have a running toilet, drip at a shower head, or even a strange
                thumping sound under the house, you can depend on us to solve
                the problem.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={pic6} alt="First slide" />
            <Carousel.Caption>
              <h3>Mission Statement</h3>
              <p>
                At True Plumb, it is our ultimate goal to forge long lasting
                relationships with our customers and community. We believe this
                goal can be achieved by working to perfect our trade, focusing
                on cleanliness, and honestly by being nice to one another.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h5 className="services">Services Available:</h5>
        <ul className="serviceslist">
          <li>Remodels</li>
          <li>Leak repair</li>
          <li>Toilet Repair</li>
          <li>Sink Repair</li>
          <li>Shower Repair</li>
          <li>Faucet Repair</li>
          <li>Garbage Disposals</li>
          <li>Water Main Replacement</li>
          <li>Water Heater Tank Repair/Replacement</li>
          <li>Complete Plumbing repairs & solutions</li>
          <li>Tankless Water Heaters Installation/Repair</li>
        </ul>
      </div>
      <div>
        <Button
          className="callnow"
          variant="success"
          href="tel:+1-423-305-8212"
        >
          Schedule an Appointment Now!
        </Button>{" "}
      </div>
      <div>
        <Button
          className="button3"
          variant="success"
          href={coupon}
          target="_blank"
          rel="noreferrer"
        >
          <span>Coupon for $15 off</span>
        </Button>
        <div>
          <h1 className="footer">&copy; 2021 True Plumb, Rights Reserved</h1>
        </div>
        <div>
          <SocialIcon
            className="social"
            url="https://www.facebook.com/trueplumb.tn"
          />
          <SocialIcon
            className="social"
            url="https://instagram.com/true.plumb?utm_medium=copy_link"
          />
          <SocialIcon className="social" url="mailto:office@trueplumbtn.com" />
        </div>
      </div>
    </div>
  );
}

export default Home;
