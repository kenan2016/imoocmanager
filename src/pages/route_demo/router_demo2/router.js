import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import Main from './Main';
import About from './About';
import Topic from './Topic';
export default class IRouter extends React.Component{
    render(){
        return(

            <Router>
                <Home>
                    <Route path="/main" render={()=><Main> <Route path path="/main/a" component={About}></Route> </Main>}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topic" component={Topic}></Route>
                </Home>
            </Router>
       
        )
    }
}