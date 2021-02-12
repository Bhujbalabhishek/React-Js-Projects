import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {
        //using if else condition
        // if(this.state.isLoggedIn == true){
        //     return <div>Hello Abhishek</div>
        // }
        // else{
        //     return <div>
        //         Hello Guest
        //     </div>
        // }


        //Using Element Variable 

    //     let message
    //     if(this.state.isLoggedIn){
    //         message = <div>Hello Abhishek</div>
    //     }else{
    //         message = <div>Hello Guest</div>
    //     }

    // return <div>{message}</div>

//ternary operator
//return this.state.isLoggedIn ? <div>welcome Abhishek</div> :<div>Welcome Guest</div>

//short circuit operator
return this.state.isLoggedIn && <div>Hello Abhishek</div>

    }
}

export default UserGreeting
