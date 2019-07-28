import React from 'react';
export default class Info extends React.Component{
    render(){
        return(
            <div>
                这里是测试嵌套路由 路由 id是：
                {this.props.match.params.mainId}
            </div>
        )
    }
}