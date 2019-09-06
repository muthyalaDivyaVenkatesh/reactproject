import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {

    persons: [
      { name: "mdvenkatesh", age: 21 },
      { name: "mdv", age: 24 },
      { name: "neha", age: 23 }
    ],
    otherState = "THis is a other state"
  }

  switchNameHandler = () => {
    // console.log("you have succesfully clicked")
    this.setState({
      persons: [
        { name: "mdvenk", age: 21 },
        { name: "md", age: 24 },
        { name: "janu", age: 22 }
      ]
    })
  }

  render() {
    // here return parentesses is used to group everything 
    return (
      <div className="App">
        <h1>Hi, i am react App</h1>
        <p>These is relly working</p>
        <button onClick={this.switchNameHandler}>Switch name </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies are sleeping </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }

  // return React.createElement('div' ,{className:"App" } , React.createElement('h1','null','Hi welcome to react app'))

}

export default App;
