import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';

import classes from './Person.css';
import Radium from 'radium';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';


// Note we have to here the React because React is used to convert write the jsx
class Person extends Component {
    
    // React createRef creates the refrence to the current 
    inputElemetRef =  React.createRef()

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElemetRef.current.focus();  
    }

    render() {
        console.log("[person.js] rednereing ")

        return (
            <Aux>
                <p key="ii" onClick={this.props.click}>
                    Hi i am {this.props.name}
                    my age is {this.props.age}</p>
                <p key="i2">{this.props.children}</p>
                <input
                    key="i3"
                    // ref = {(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElemetRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        )

    }
}

// it will check the props type
Person.propTypes = {
    click: propTypes.func,
    name: propTypes.string,
    age: propTypes.number,
    changed: propTypes.func
}




export default withClass(Person, classes.Person);























// here we are diing the media query
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

// we are exporing the person by default 
// export default Radium(person);



// event.