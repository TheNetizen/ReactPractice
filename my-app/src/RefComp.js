import React, { Component, createRef } from 'react'

export class RefComp extends Component {
    constructor(props) {
        super(props)
        this.inputref=createRef()
    }
    componentDidMount(){
        this.inputref.current.focus()
    }
    clickHandler=()=>{
        alert(`Hello ${this.inputref.current.value}`)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputref}></input>
                <button onClick={this.clickHandler}>Click</button>

            </div>
        )
    }
}

export default RefComp
