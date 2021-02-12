//classs Component

import React,{Component} from 'react';

class Welcome extends Component{
    render() {
        const{name,profession} = this.props
        return <h1>
           
            {name}
            A.k.A
            {profession}
        </h1>
    }
}

export default Welcome;