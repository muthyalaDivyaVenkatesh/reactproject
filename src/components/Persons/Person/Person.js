import React, { Component, Fragment } from 'react';
import classes from './Person.css';
import Radium from 'radium';
import Aux from '../../../hoc/Aux' 

// Note we have to here the React because React is used to convert write the jsx
class Person extends Component {
    render() {
        console.log("[person.js] rednereing ")

        return (
            <Aux>
            <p key="li" onClick={this.props.click}>
                Hi i am {this.props.name}
                my age is {this.props.age}</p>
            <p key="l2">{this.props.children}</p>
            <input
                key="l3"
                type="text"
                onChange={this.props.changed}
                value={this.props.name} 
                />
                </Aux  >
        )

    }
}



export default Person;























// here we are diing the media query
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

// we are exporing the person by default 
// export default Radium(person);



// event.