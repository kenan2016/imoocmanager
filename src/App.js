import React from 'react';

class App extends React.Component{
  render(){
    return (
      <div>
         {/**其实很好理解所有逐渐都是他的子组件，所以这样写来把子组件带过来*/}
         {this.props.children}
      </div>
    )
  }
}

export default App;
