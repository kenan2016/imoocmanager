import React from 'react';
import {Row, Col} from 'antd';
import Util from '../../utils/utils'
import Axios from './../../axios';
import './index.less'

export default class Header extends React.Component{
    // state 是內置對象？
    state = {};
    componentWillMount () {
        this.setState({
            userName:'kenan2016'  
        });

        setInterval(()=>{
            const sysTime = Util.formateDate(new Date());
            this.setState({
                sysTime
            })
        },1000);

        this.getWeatherData(); 
    }

    getWeatherData=()=> {
        let city = '北京';
        Axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if(res.status==='success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
        });
    }

    // 时间刷新函数
    
    render () {
        return(
            <div className="header">
                <Row className="header-top">
                    <Col span={4} className="logo">
                        <img src="/logo-ant.svg" alt=""/>
                            <span>通用管理系统</span>
                    </Col>
                    <Col span={20}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                                <span className="date">{this.state.sysTime}</span>
                                <span className="weather-img">
                                    <img src={this.state.dayPictureUrl} alt="" />
                                </span>
                                <span className="weather-detail">
                                    {this.state.weather}
                                </span>
                            </Col>
                </Row>
            </div>
        );
    }
}