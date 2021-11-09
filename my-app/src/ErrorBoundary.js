//we need to create a component with errorhandling life cycle methods and wrap it as a parent 
//so that errors can be handled that is fall back ui can be displayed
import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }
    //used to handle error
    static getDerivedStateFromError(error){
        return({
            hasError:true
        })
    }
    //used to log error
    componentDidCatch(error,info){
        console.log(info)
    }
    render() {
        if(this.state.hasError){
            return <h1>Something Went Wrong!!</h1>    
        }else{
            return this.props.children
        }
       
    }
}

export default ErrorBoundary
