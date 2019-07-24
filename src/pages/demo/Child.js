import React from 'react';

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    //生命周期函数
    componentWillMount() {
        console.log("this is componentWillMount");
    }

    componentDidMount() {
        console.log("this is componentDidMount");
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps);
    }

    shouldComponentUpdate(){debugger;
        console.log("当 调用setState时触发");
        // 同时这里必须要有一个 return ture
        return true;
    }

    componentWillUpdate() {debugger;
        console.log("componentWillUpdate")
    }
    componentDidUpdate() {debugger;
        console.log("componentDidUpdate")
    }

    render() {
        return(
            <div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}