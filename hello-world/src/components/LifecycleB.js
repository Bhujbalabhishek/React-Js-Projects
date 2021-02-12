import React, { Component } from 'react'


class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Abhishek'
        }
        console.log('LifecycleB constructor')
        
    }
    static getDerivedStateFromProps(state, props){
        console.log("LifecycleB getDerivedStateFromProps");
        return null
    }

    componentDidMount(){
        console.log("lifecycleB componentDidMount");
        
    }
    render() {
        console.log("lifecycle B render")
        return (
            
            <div>
                 Lifecycle B 
               
            </div>  
        )
    }
}

export default LifecycleB
