import React from 'react';
import {Link} from 'react-router-dom';
export default class Main extends React.Component{
    render() {
        return (
            <div>
                this is Main Pagegr
                <br/>
                {/**嵌套路由 */}
                <Link to="/main/test-id">嵌套路由1</Link>
                <br/>
                <Link to="/main/test-456">嵌套路由2</Link>
                <hr/>
                {this.props.children}
            </div>
        )
    }
} 