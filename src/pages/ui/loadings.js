import React from 'react';
import {Card, Spin, Alert, Button, Icon} from 'antd';
import './ui.less';
export default class Loadings extends React.Component{
    render(){
        const icon = <Icon type="loading" style={{fontSize:24}}/>;
        const LoadingIcon = <Icon type="loading"/>
        return(
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size={"small"}></Spin>
                    <Spin size="large" style={{margin:'0,10px'}}></Spin>
                    <Spin indicator={icon} style={{marginLeft:10}}></Spin>
                </Card>
                <Card title="Spin自定义Icon" className="card-wrap">
                    <Spin>
                        <Alert message="Success Text" type="success" ></Alert>
                    </Spin>
                    <Spin  indicator={LoadingIcon}>
                        <Alert message="info Text" type="info"></Alert>
                    </Spin>
                </Card>
            </div>
        )
    }
}