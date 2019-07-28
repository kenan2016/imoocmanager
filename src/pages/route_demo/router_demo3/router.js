import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Main from './Main';
import About from './About';
import Topic from './Topic';
import Info from './info';
import NotMatch from './NotMatch';

export default class IRouter extends React.Component{
    render(){
        return(

            <Router>
                <Home>
                    <Switch>
                    // 这里记住了使用Switch 语法实现从上至下的匹配,匹配到一个以后就不往下执行和 默认的404
                        <Route path="/main" render={()=>
                            <Main> 
                                <Route  path="/main/:mainId" component={Info}></Route> 
                            </Main>}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topic" component={Topic}></Route>
                        <Route component={NotMatch}></Route>
                    </Switch> 
                </Home>
            </Router>
       
        )
    }
}