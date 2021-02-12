import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topic:'React'
        }
    }

    onchangeusername = event =>{
        this.setState({
            username : event.target.value
          
        })
    }

    onchangecomments = event =>{
        this.setState({
            comments : event.target.value
        })
    }
    
    ontopicchnage = event =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();
    }
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
               <div>
                   <label>
                       Username
                   </label>
                   <input type="text" value={this.state.username} onChange={this.onchangeusername}></input>
               </div>

               <div>
                   <label>
                       Comments
                   </label>
                  <textarea value={this.state.comments} onChange={this.onchangecomments}></textarea>
               </div>

               <div>
                  <select value={this.state.topic} onChange={this.ontopicchnage}>
                      <option value="React">React</option>
                      <option value="Angular">Angular</option>
                      <option value="HTML">HTML</option>
                  </select>
               </div>
               <div>
                   <button type="submit">Submit</button>
               </div>

           </form>
        )
    }
}

export default Form
