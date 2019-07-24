import React from 'react';
import MenuConfig from './../../config/menuConfig';

import { Menu, Icon } from 'antd';
const  SubMenu = Menu.SubMenu;
import  './index.less';

export default class NavLeft extends React.Component {
    componentWillMount () {
        //在生命周期函数里调用，渲染的函数
        // 
        const menuTreeNode = this.renderMenu(MenuConfig);
        // 必选调用用setState 才能实现数据渲染到视图
        this.setState({
            menuTreeNode
        })
    }

    /*
     *  渲染菜单需接受 一个菜单数据data
     */
    renderMenu = (data) => {
        // 边里数据 data （这是一个数组） 
        return data.map((item)=>{
            // 基本思路这个datta是一个数组，每一个数组里面还有子节点
            if(item.children){// 如果有子节点，则继续渲染菜单,同时将该节点数据传到renderMenu函数
               return (// 注意这里的key 是antd菜单 api里规定的路由
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>                   
               )
            }
            return <Menu.Item title={item.title} key={item.key} >
                {item.title} 
            </Menu.Item>
        });
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""></img>
                    <h1>Imooc MS</h1>
                    <Menu theme="dark ">
                        {this.state.menuTreeNode}
                    </Menu>
                </div>
            </div>
        )
    }
}