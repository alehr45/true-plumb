import React from "react";
import { Image , Button } from "react-bootstrap";
import logo from "../images/logo1.png";

function Home() {
  return (
    <div>
      
      <div className="logo">
        <style>{"body { background-color: white; }"}</style>
        <Image className="pic" src={logo} />
        <div class="info"></div>
        <h1>Call True Plumb First!</h1>
            <h5>We provide expert and reliable plumbing services in Chattanooga. </h5>
            <h5>Licensed, experienced, locally owned and trusted.</h5> 
            <h5>We provide free estimates. </h5>
            <h5>Call to schedule an appointment now. </h5>
            <Button variant="secondary">Call Now!</Button>{' '}

      </div>
    </div>
  );
}
export default Home;
