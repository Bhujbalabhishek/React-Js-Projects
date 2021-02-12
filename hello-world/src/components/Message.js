//classs Component


import React,{Component} from 'react';

class Message extends Component{

    constructor(){

        super()
        this.state = 
        {
            message: 'welcome visitor',
            demo : 'hello '
        }
    }


    changeMessage(){

        this.setState(
        {
            message:'Thank You for subscribing'
            
        })
    }
    demoClick(){
        this.setState(
            {
                demo:"hello abhishek"
            }
        )
    }


    render()
    {
     
    return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>

            <h1>{this.state.demo}</h1>
            <button onClick={()=>this.demoClick()}>demo</button>
        </div>

    
    )
    }
}


export default Message;