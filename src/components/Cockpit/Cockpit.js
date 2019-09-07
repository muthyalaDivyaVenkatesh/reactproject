import React, { useEffect } from 'react';

import classes from './Cockpit.css' 

const cockpit = (props) => {
    useEffect(()=>{
        console.log("[cockpit.js]the use effect");
        // we can send the http request
        const timer = setTimeout(() =>{
            alert("saved  data to cloud");    
        },1000)

        return () =>{
            // clearTimeout(timer);
            console.log('[Cockpt.js] cleanup work useEffect');
        }
    },[])

    
    let btnClass = '';
    
    if(props.showPersons) {
        btnClass = classes.Red
    }
    
    const assignClasses = [];
    
    // first check whether the length is  gerater than 2 

    if (props.personsLength <= 2) {
        assignClasses.push(classes.red) // classes = [red]
    }
    if (props.personsLength <= 1) {
        assignClasses.push(classes.bold) // classes = [red,bold]
    }

    return (
        <div className = {classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignClasses.join(' ')}>These is relly working</p>
            <button
                className={btnClass}
                onClick={props.clicked}
            >Toogle persons </button>
        </div>
    );

}


export default React.memo(cockpit);