import React from 'react'

export class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            todo:[],
            query:""
        }
    }
 handleChange=(e)=>{
        this.setState({
            query:e.target.value
        })
    }
    render(){
        const {todo,query}=this.state

        
        return(
            <>
            <div>
                <input value={query} onChange={this.handleChange} type="text" placeholder="Write something"/>
                <button>add Todo</button>
            </div>
            </>
        )
    }
}