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
        products:[
          { id: 1,
            name:'MacBook Pro',
            price:'1200',
            imageUrl:'macbook_pro_pic.com'
          },
          { id: 2,
            name: 'MacBook Air',
            price:'1000',
            imageUrl:'macbook_air_pic.com'
          },
          { id: 3,
            name:'Lenovo New',
            price:'1100',
            imageUrl:'lenovo_pic.com'
          },
          { id: 4,
            name:'Dell Inspiron',
            price:'700',
            imageUrl:'dell_inspiron_pic.com'
          }, 
          { id: 5,
            name:'HP',
            price:'650',
            imageUrl:'hp_pic.com'
          }
        ]
    };
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
