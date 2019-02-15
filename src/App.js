import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './component/dashboard/Dashboard';
import Form from './component/form/Form';
import Header from './component/header/Header';

class App extends Component {
  constructor () {
    super();

    this.state = {
        products:[]
    };
  };

  componentDidMount=()=>{
    axios.get('/api/inventory').then(res=>{
      console.log(res.data)
      this.setState({
        products:res.data
      })
    })
  };

  render() {
    return (
      <div className="App">
        <Dashboard products={this.state.products}/>
        <Form />
        <Header />

      </div>
    );
  }
}

export default App;
