import React, { Component } from 'react'

// Functional Component
// const Counter = () => {
//   return (
//     <div>Counter</div>
//   )
// }

//class component
class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    render() {
        // while using props the props name should be same,when we use props
        const {title}=this.props
        const {count}=this.state
        console.log(this.props)
        console.log(this)
        return(
            <>
            <h1>Class Component :{title}</h1>
            <h2>{count}</h2>
            </>
        )
    }
}
export default Counter