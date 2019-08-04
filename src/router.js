import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Admin from './admin';
import Buttons from './pages/ui/buttons'
import NoMatch from './pages/nomatch';
import Modals from './pages/ui/modal';
import Loadings from './pages/ui/loadings';
import Notices from './pages/ui/notice';
import Messages from './pages/ui/messages';
import Tab from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousel from './pages/ui/carousel';

export default class IRouter extends React.Component{
    render(){
        return(
            <HashRouter>
            {/*这样写，不管你进入任何一个路由都会优先加载App组件*/}
               <App>
                    <Route path="/login" component={Login}></Route>  
                    <Route path="/admin" render={ ()=>
                        <Admin>
                            <Switch>
                            <Route path="/admin/ui/buttons" component={ Buttons}></Route>
                            <Route path="/admin/ui/modals" component={ Modals}></Route>
                            <Route path="/admin/ui/loadings" component={ Loadings}></Route>
                            <Route path="/admin/ui/notification" component={ Notices}></Route>
                            <Route path="/admin/ui/messages" component={ Messages}></Route>
                            <Route path="/admin/ui/tabs" component={Tab}></Route>
                            <Route path="/admin/ui/gallery" component={Gallery}></Route>
                            <Route path="/admin/ui/carousel" component={Carousel}></Route>
                                {/**404页面路由配置 */}
                                <Route component={ NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }></Route>  
                    <Route path="/order/detail" component={Login}></Route>  
               
                  
               </App>
            </HashRouter>
        )
    }
}