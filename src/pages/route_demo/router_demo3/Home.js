import React from 'react';
import {Link, HashRouter as Router} from 'react-router-dom';
export default class Home extends React.Component{
    render(){
        return(
            <div>
                <Link to="/main">Home</Link><br/>
                <Link to="/about">about</Link><br/>
                <Link to="/topic">topic</Link><br/>
                <Link to="/imooc1">imooc1</Link><br/>
                <Link to="/imooc2">imooc2</Link>  
                <hr></hr>
                {this.props.children}
            </div>
        ) 
    }
}