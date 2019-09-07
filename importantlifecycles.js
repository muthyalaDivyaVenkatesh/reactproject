
componetDidMount() {

}


shouldcomponentUpdate() {

}

// it will be called at the end of all the life cycles methods
componetDidUpdate () {

}


// In component DIDMOunt and componentDidUpdate we get the data from the server

// In shouldcomponetUpdate  we compare the  props and state 

// In hooks we use UseEffect 

import React,{useEffect} from 'React';


// And we will pass an empty [] whwnever we want only once  
useEffect(()=>{
    // In these callback we do what ever we want 
} , []);

// THe second argument says on what the following depends on 

