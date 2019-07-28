import React from 'react';
import { Menu, Icon } from 'antd';
import {NavLink} from 'react-router-dom';
const  SubMenu = Menu.SubMenu;
import MenuConfigs from './../../config/menuConfig';
import  './index.less';
export default class NavLeft extends React.Component{
    componentWillMount() {
        const treeNodes = this.renderMenu(MenuConfigs);
        this.setState({
            treeNodes
        });
    }
    // 核心函数
    renderMenu = (data)=>{
        return data.map((item)=>{
            if (item.children) {// 有子节点
                return <SubMenu title={item.title} key={item.key}>
                    {this.renderMenu(item.children)}
                </SubMenu>
            }
            return <Menu.Item key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }
    render() {
        return(
            <div>
                <div>
                    <div className="logo">
                        <img src="/assets/logo-ant.svg" alt=""></img>
                        <h1>react-antd MS</h1>
                    </div>
                    <Menu theme="dark">
                        {this.state.treeNodes}
                    </Menu>
                </div>
            </div>
        )
    }
}