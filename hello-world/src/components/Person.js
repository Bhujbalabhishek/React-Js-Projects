import React from 'react'

function Person({person}) {
    return (
        <div>
            <h1>{person.index}I am {person.name} I am {person.age}years old experts in {person.skill} </h1>
        </div>
    )
}

export default Person
