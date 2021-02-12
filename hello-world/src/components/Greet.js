

//Functional component

import React from 'react';

// function Greet(){
//     return <h1>hello abhishek learning react</h1>
// }

const Greet = props =>{

    const {name,profession,children} = props //destructuring in function body from props object
    //const {state1, state2} = state
    
    
    //({name,profession,children}) [instead of props ] destruturing in the parameter
// console.log(props);
// props.name = "vishwas"; cannot do this cannot assign to read only property 'name' of object
return(


    <div>
        <h1>Hello {name} A.K.A {profession}</h1> 
        {children}
    </div>
) 
}
export default Greet;