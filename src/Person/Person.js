import React from 'react';

// Note we have to here the React because React is used to convert write the jsx
const person  = (props) =>{
    return (
    <div>
        <p> Hi i am {props.name} my age is {props.age}</p>
        <p>{props.children}</p>
    </div>
    
    )}
// we are exporing the person by default 
export default person;

