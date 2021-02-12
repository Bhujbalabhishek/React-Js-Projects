import React, { Component } from 'react'

class ClassClick extends Component {

    clicked(){

        console.log("clicked");
        
    }
    render() {
        return (
            <div>
                <button onClick={this.clicked}>class CLiCK</button>
            </div>
        )
    }
}

export default ClassClick
