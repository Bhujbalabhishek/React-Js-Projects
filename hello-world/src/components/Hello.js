import React from 'react';

const Hello = () => {
    //with using JSX syntax


    // return <h1>

    //     Hello From JSX
    // </h1>

// ========================================
    // without using JSX syntax
return React.createElement(

    'div',
    {id:'demoid', className:'democlass' },
    React.createElement('h1',null,'Hello without JSX')
)

}


export default Hello;