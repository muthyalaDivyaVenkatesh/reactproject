import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
// import Radium, { StyleRoot } from 'radium';


class App extends Component {
  state = {

    persons: [
      { 'id': '11', name: "nikitha", age: 21 },
      { 'id': '22', name: "janu", age: 24 },
      { 'id': '33', name: "neha", age: 23 }
    ],
    otherState: "THis is a other state",
    showPersons: false
  }

  // this is es7 way of writting methods
  deletePersonHandler = (personIndex) => {
    // we can copy by these method
    // const persons  = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  // write a method to set 

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    })

    console.log(personIndex);

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [... this.state.persons];

    persons[personIndex] = person;
    // console.log("you have succesfully clicked")
    this.setState({
      persons: persons
    });
  }

  // writting a method 

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // ':hover': {
      //   backgroundColor:'lightgreen',
      //   color:'black'
      // }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            console.log(person)
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>
      );

      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor : 'violet ',
      //   color:'black'
      // }
    }


    // create a class of array  
    // let classes = ['red', 'bold'].join(' ')

    const classes = [];
    // first check whether the length is  gerater than 2 
    if (this.state.persons.length <= 2) {
      classes.push('red') // classes = [red]
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold') // classes = [red,bold]
    }

    // here return parentesses is used to group everything 
    return (
      // styleRoot is used when we are using media queries we have to wrap 
      // your entire app  inside styleoot 
      // <StyleRoot>
      <div className="App">
        <h1>Hi, i am react App</h1>
        <p className={classes.join(' ')}>These is relly working</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}
        >Toogle persons </button>
        {persons}
      </div>
    );
  }

  // return React.createElement('div' ,{className:"App" } , React.createElement('h1','null','Hi welcome to react app'))

}

export default App

// this Rdium making your component as higher order function 
// export default Radium(App);
