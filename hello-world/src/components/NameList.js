import React from 'react'
import Person from './Person'

function NameList() {
    const persons =[{id:1,name:"abc",age:20,skill:"React"},{id:2,name:"xyz",age:30,skill:"Angular"},{id:3,name:"mno",age:50,skill:"VUE"}]

    const personList = persons.map((person,index) =>
         <Person key= {person.id} person = {person}></Person>
         )
    return<div>{personList}</div>    
}

export default NameList
