import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';


const app = props => {
   const [personState, setPersonState] = useState({
        persons: [
            { name: "mdvenkatesh", age: 21 },
            { name: "mdv", age: 24 },
            { name: "neha", age: 23 }
        ],
    })

    switchNameHandler = () => {
        // console.log("you have succesfully clicked")
        setPersonState({
          persons: [
            { name: "mdvenk", age: 21 },
            { name: "md", age: 24 },
            { name: "janu", age: 22 }
          ]
        })
      }

    return (
        // here return parentesses is used to group everything 

        <div className="App">
            <h1>Hi, i am react App</h1>
            <p>These is relly working</p>
            <button onClick={this.switchNameHandler}>Switch name </button>
            <Person name={pesonState[0].name} age={personState[0].age} />
            <Person name={personState[1].name} age={personState[1].age}>My hobbies are sleeping </Person>
            <Person name={personState[2].name} age={personState[2].age} />
        </div>
    );


}