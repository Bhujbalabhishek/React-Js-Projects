
//class Component

import React,{Component} from 'react';
 
class Counter extends Component{
constructor(props) {
    super(props)

    this.state = {
         count : 0
    }
}
add(){
   // this.state.count = this.state.count + 1;

//    this.setState({

//     count:this.state.count+1
  
//    },
   
//    //callback arrow function
//    ()=>{console.log("callback value", this.state.count);
//    })

this.setState((anotherState,props) => ({
    count: anotherState.count+1
}))
   console.log(this.state.count);
}

addfive(){
    this.add();
    this.add();
    this.add();
    this.add();
    this.add();
}

    render(){

        return(
            <div>
            <h1>Hello Counter {this.state.count}</h1>
            <button onClick={()=>this.addfive()}>increment</button>
            </div>
        ) 
    }
}

export default Counter;
