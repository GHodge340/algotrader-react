import logo from './logo.svg';
import './App2.css';
import React, { useState } from 'react'
import {
  Button,  
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

function App2() {

    

  return (
    <div>
       <div className="App">
            <header className="App-header"> 
          
                <img src="./logo-white.png" width="150" alt="Test" />
                <p>App Under Development</p>
                <Button color="primary">
                    More Details
                </Button>
            </header>
        </div> 
    </div>
  );
}

export default App2;
