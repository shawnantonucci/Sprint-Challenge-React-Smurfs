import React, { Component } from 'react';
import axios from "axios";
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [
        {
          name: '',
          age: null,
          height: '',
        }
      ],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }


  render() {
    return (
      <div className="App">
        <NavLink to='/'>SmurfList</NavLink>
        <NavLink to='/smurf-form'>SmurfList</NavLink>
        <Route path="/smurf-form" render={props => <SmurfForm {...props} />} />
        <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
