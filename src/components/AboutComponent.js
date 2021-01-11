import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const About = (props) => {
  return (
    <div className="aboutPage">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>CryptAlgo Cryptocurrency Trading Tool</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img src="./about1.png"></img>
          </div>
          <div className="col-lg-6">
            <h2> What is CryptAlgo?</h2>
            <p> “CryptAlgo” is a cryptocurrency scanner and algorithmic trader.  As cryptocurrency is gaining mainstream attention due to the rise of Bitcoin, the unregulated market space is becoming more popular which creates more opportunities for the investor with the proper tools.  This app is designed as such a tool with the use of data from the leading crypto exchanges and market information.</p>
            <h2>Why use CryptAlgo?</h2>
            <p> CryptAlgo provides a list of benefits to traders. Some of these benefits include but are not limited to executed trades at the best possible prices, instant order placement, reduced transaction costs, reduced risk of manual errors and reduced possibility of trading errors due to human emotional and psychological factors.
            </p>
            <h2>Download CryptAlgo</h2>
            <br></br>
            <Button>Download Now</Button>
          </div>
        </div>
        <div className="row">
          <div className="whtdivder"></div> 
          <br></br>
            <p>CryptAlgo is currently available for Windows, Mac and Linux systems.</p>
        </div>
        
      </div>
      <div className="divider">
          <p>CryptAlgo Designed By: @GTheCodeGuy  2021</p>
      </div>
    </div>  
  );
}

export default About;
