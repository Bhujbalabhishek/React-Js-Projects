import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello event handling"
        }


        //3rd way using event handler binding in class constructor  

        //this.onChange = this.onChange.bind(this);
    }
    // onChange(){
    //     this.setState({
    //         message:"goodbye event handling"
    //     })

    //     console.log(this);
        
    // }


    //4 th way of event handling as class property as arrow function
    onChange = () =>{
        this.setState({
            message:'Goodbye event Handling'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
              {/* 1st way using bind method <button onClick={this.onChange.bind(this)}>Event Bind Click</button>   */}

              {/* 2nd way using arrow functions <button onClick={()=>this.onChange()}>Event Bind Click</button> */}

              <button onClick={this.onChange}>Event Bind Click</button>
            </div>
        )
    }
}

export default EventBind
