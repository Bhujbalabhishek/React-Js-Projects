import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)

    this.inputRef = React.createRef()

    // Another way to create a ref

    this.Cbref = null;
    this.setCbRef = element => {
       this.Cbref = element 
    }

    }
    
    componentDidMount(){
        // this.inputRef.current.focus()
        if(this.Cbref){
            this.Cbref.focus()
        }
        console.log(this.inputRef);
        
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>

                <input type="text" ref={this.setCbRef}></input>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
