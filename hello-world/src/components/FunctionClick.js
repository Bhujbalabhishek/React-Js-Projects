import React from 'react'

function FunctionClick() {

    function buttonClicked(){

        console.log("button clicked");
        
    }
    return (
        <div>
            <button onClick={buttonClicked}>Click</button>
        </div>
    )
}

export default FunctionClick
