import React from 'react'


//create an object and apply to style attribute
function Inline() {

    const heading = {
        fontSize:'60px',
        color:'green',
        backgroundColor:'yellow'

    }
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline
