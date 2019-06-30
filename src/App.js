import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Sidebar from './components/Sidebar';
import Main from './components/Main';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedNode: {}
    }

    this.handleNodeSelect = this.handleNodeSelect.bind(this);
  }

  handleNodeSelect(node) {
    this.setState ({
      selectedNode: node
    })
  }

  render() {
    return (
      <div className="App">
        <Main handleNodeSelect={this.handleNodeSelect}/>
        <Sidebar person={this.state.selectedNode}/>
      </div>
    );
  }
}

export default App;
