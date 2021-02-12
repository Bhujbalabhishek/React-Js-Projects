import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Abhishek'
        }
        console.log('LifecycleA constructor')
        
    }
    static getDerivedStateFromProps(state, props){
        console.log("LifecycleA getDerivedStateFromProps");
        return null
    }

    componentDidMount(){
        console.log("lifecycleA componentDidMount");
        
    }
    render() {
        console.log("lifecycle A render")
        return (
            <div>
                <div>
                    Lifecycle A
                </div>
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
