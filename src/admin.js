import React from 'react';
import { Row,Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './style/common.less';
import Home from './pages/home';
export default class Admin extends React.Component {
    render() {
        return (
                <Row className="container">
                    <Col span={4} className="nav-left">
                        <NavLeft/>
                    </Col>
                    <Col span={20} className="main">
                        <Header/>
                        <Row className="content">
                              {/**<Home></Home> 路由内容显示区 */}
                              {this.props.children}
                        </Row>
                        <Footer/>
                    </Col>
                </Row>
        )
    }
}