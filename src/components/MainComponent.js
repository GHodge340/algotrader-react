import React, { Component } from 'react';
import Download from './DownloadComponent';
//import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
//import { connect } from 'react-redux';
import Contact from './ContactComponent';
import About from './AboutComponent';



class Main extends Component {

    render() {

        return (
            <div>
                <Header />
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/download' component={Download} />
                        <Route path='/contact' component={Contact} />
                    </Switch>
            </div>
        );
    }
}

export default Main;