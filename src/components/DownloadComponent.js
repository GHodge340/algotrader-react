import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Download = (props) => {
  return (
    <div className="aboutPage">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>CryptAlgo Download and Usage</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src="./download1.png" width="90%"></img>
          </div>
          <div className="col-md-6">
            <h2>CryptAlgo Quick Start Guide</h2>
            <p> CryptAlgo is fairly simple to use.  Once you have completed the download:<br></br> 1) launch the app to begin.  You should first see the initializtion screen that prompts you to begin using the app.<br></br>2) Select Your preffered trading exchange (currently CryptAlgo supports Coinbase and Binance)<br></br> 3) Enter your account information. (Api keys, api secrets and passphrases are needed to use CryptAlgo.  This information is only used to access your account to make trades on the account holders behalf as directed by the account holder.)<br></br>4) Enter the trading strategy information that you desire CryptAlgo executes and press the start button. <br></br> 5) Click on the Orders tab to view all the trades <br></br> 6) The app will run continously unless there is a network interference. To stop CryptAlgo simply press the Stop button on the main page.<br></br>*Notes* There is a documentation link that gives you detial info on ea of the UI features.  It's strongly recomended that one reviews the documentation prior to using CryptAlgo. </p>
            
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

export default Download;
