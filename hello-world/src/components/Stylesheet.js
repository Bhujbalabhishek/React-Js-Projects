import React from 'react'
import './mystyle.css'
function Stylesheet(props) {
    let demoName = props.primary ? 'primary' : ''
    return (
        <div>
           <h1 className={`${demoName} font-xl`}>Stylesheets</h1> 
        </div>
    )
}

export default Stylesheet
