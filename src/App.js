import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
class App extends Component {
   
  render() {
    const {Content} = Layout;
    const path = this.props.match.path;
    const props = this.props;
    let context = ""
    switch(path){
      case '/':
        context = <Home {...props}/>;
      break;
      default:
        context = "";
    }
    return (
      <div className="App">
        <Header {...props}/>
          <Content>
            {context}
          </Content>
        <Footer {...props} />
      </div>
    );
  }
}

export default App;
