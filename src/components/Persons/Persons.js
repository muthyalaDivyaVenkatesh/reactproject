import React, { PureComponent } from 'react';

import Person from './Person/Person';

// In the same way we write 
class Persons extends PureComponent {
    // here we are getting derived state
    static getDerivedStateFromProps(props, state) {
        console.log("[persons.js]getDervied props")
        // console.log("this is the update props method first in this method we get the the state and props")
        return state;
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     // it is wher we get the next props and next state 
    //     console.log("[persons.js] shouldcomponentUpdate");
    //     if (nextProps.persons !== this.props.persons
    //         || nextProps.changed !== this.props.changed
    //         || nextProps.clicked !== this.props.clicked
    //     ) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }

    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[persons.js] getSnapShot before update");
        return null;
    }
    // THese will be the most used 
    componentDidUpdate() {
        console.log('[persons.js] componnet did update')
        console.log("These component will say whether the component is updated or not ")
    }

    componentWillUnmount() {
        console.log("[person.js] component will unmount")
    }

    render() {
        console.log("we are inside persons class")
        return (this.props.persons.map((person, Index) => {
            return (<Person
                click={() => this.props.clicked(Index)}
                name={person.name}
                age={person.age}
                key={person.key}
                changed={(event) => this.props.changed(event, person.id)}
            />)
        }

        ))
    }
}


export default Persons;







// es6  syntax of arrow function 
// const Persons = (props) => a // these wll automatically return a
