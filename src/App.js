import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const state={
  listing:[{ 
    list :  "asasa"  
  }]
}
clickEventHandler= () => {

}



class App extends Component {
  render() {
    return (
      <div className="App">
        <label></label>
        <input type='text' placeholder=" enter tasks " value={state.listing[0].list}/>
        <button type="button" onClick={this.clickEventHandler} >Submit Task</button>
        <ul>
          <li>{state.listing[0].list}</li>
        </ul>
      </div>
    );
  }
}

export default App;
