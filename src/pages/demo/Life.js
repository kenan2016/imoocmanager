import React from 'react';
import Child from './Child';
import './index.less';
import {Button} from 'antd'
// import 

export default class Life extends React.Component {
    constructor(props){
        super(props);
        this.state = {count:0};
    }

    handleAdd = ()=> {
        this.setState({count:this.state.count+1});
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleAdd} >点我一下加一</Button>
                <p>{this.state.count}</p>
                <Child name="jack"></Child>
            </div>
        )
    }
}