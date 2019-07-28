import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Admin from './admin';
import Buttons from './pages/ui/buttons'
import NoMatch from './pages/nomatch';
export default class IRouter extends React.Component{
    render(){
        return(
            <HashRouter>
            {/*这样写，不管你进入任何一个路由都会优先加载App组件*/}
               <App>
                  <Route path="/login" component={Login}></Route>  
                  <Route path="/admin" render={ ()=>
                      <Admin>
                        <Route path="/admin/ui/buttons" component={ Buttons}></Route>
                        {/**404页面路由配置 */}
                        <Route component={ NoMatch}></Route>
                      </Admin>
                  }></Route>  
                  <Route path="/order/detail" component={Login}></Route>  
               </App>
            </HashRouter>
        )
    }
}