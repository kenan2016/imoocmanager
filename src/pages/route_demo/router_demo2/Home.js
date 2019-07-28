import React from 'react';
import {Link, HashRouter as Router} from 'react-router-dom';
export default class Home extends React.Component{
    render(){
        return(
            <div>
                <Link to="/main">Main</Link><br/>
                <Link to="/about">about</Link><br/>
                <Link to="/topic">topic</Link>  
                <hr></hr>
                {this.props.children}
            </div>
        )
    }
}