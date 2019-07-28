import React from 'react';

import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import Main from './Main';
import About from './About';
import Topic from './Topic';
export default class Home extends React.Component{
    render() {
        return(
            <HashRouter>
                {/*注意HashRouter下只能有一根节点，所以要使用div包一下 */}
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/about">about</Link>
                        </li>
                        <li>
                        <Link to="/topic">topic</Link>
                        </li>
                    </ul>
                    <hr></hr>
                    {/* <Route exact={true} path="/" component={Main}></Route>
                    <Route exact={true} path="/about" component={About}></Route>
                    <Route exact={true} path="/topic" component={Topic}></Route> */}

                    <Switch>
                        <Route exact={true} path="/" component={Main}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topic" component={Topic}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
       
    }
}