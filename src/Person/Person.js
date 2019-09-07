import React from 'react';
import './Person.css';
import Radium from 'radium';


// Note we have to here the React because React is used to convert write the jsx
const person  = (props) =>{
   
    return (
    <div className="Person">
        <p onClick={props.click}> Hi i am {props.name} my age is {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
    
    )}


export default person;












    // here we are diing the media query
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

// we are exporing the person by default 
// export default Radium(person);



// event.