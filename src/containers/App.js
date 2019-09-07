import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux'

 class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    // this.state = is same as state  
  }
  // state 
  state = {

    persons: [
      { 'id': '11', name: "nikitha", age: 21 },
      { 'id': '22', name: "janu", age: 24 },
      { 'id': '33', name: "neha", age: 23 }
    ],
    otherState: "THis is a other state",
    showPersons: false
  }

  // run get derived from props
  static getDerivedFromProps(props,state) {
    // it is used very rare  here we update the state with props
    console.log(' [app.js]getDerivedFrom props', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('it is used to intial the state')
  // }

 // These will run afte render these is something which we use to get by https call 
  componentDidMount ()  {
    console.log('[APP.JS] Component did mount')
  } 

shouldComponentUpdate(nextProps, nextState) {
  console.log("[APP.JS] should componentUpdate")
  return true 
}
 
// component Did Update 
componentDidUpdate() {
  console.log("[App.js] component did update");

}

  // this is es7 way of writting methods
  deletePersonHandler = (personIndex) => {

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
    // these is the check for the render method
    console.log("App.js rednder method")
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons =
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />


        </div>



    }

    return (
      <Aux>

        <Cockpit 
        showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonHandler}
          title={this.props.appTitle}
        />
        {persons}
      </Aux>
    );
  }

  // return React.createElement('div' ,{className:"App" } , React.createElement('h1','null','Hi welcome to react app'))

}

export default  withClass(App,classes.App)

