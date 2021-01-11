import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const Contact = (props) => {
  return (
    <div className="aboutPage">
      <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Contact Us </h1>
                    <p>Please fill out the form below to recieve the latest news,<br></br> information and updates with CryptAlgo.<br></br>You will be enrolled in our mailing list <br></br> and get special access to the latest developments.  </p>
                </div>
                </div>
                <div className="row">
                <div className="col">
                    <Form>
                    <FormGroup>
                        <Label for="exampleName">Name</Label>
                        <Input
                        type="text"
                        name="name"
                        id="exampleName"
                        placeholder="Enter Name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter Name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Send us a message</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                        
                    <br></br>           
                    <Button>Submit</Button>
                    <br></br>
                    </Form>
                    <br></br>
                    <h1>Support CryptAlgo </h1>
                    <p>CryptAlgo is currently a freeware if you would like to donate to the project and support the developer you can send some Bitcoin to CryptAlgo crypto wallet at:
                    </p>
                    <strong>3QofK27H83D5dBmi7Cr4YwTUA4zgaBpt63</strong>
                </div>  
            </div>   
        </div>
        <div className="divider">
            <p>CryptAlgo Designed By: @GTheCodeGuy  2021</p>
        </div>     
    </div>  
  );
}

export default Contact;
