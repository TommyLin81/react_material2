import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props){
        super(props)
        this.state={
            number:0,
            state:true
        }
        console.log(`1. constructor done!`)
    }

    static getDerivedStateFromProps(props, state){
        console.log(`props=`,props,` state=`,state)
        console.log(`2. getDerivedStateFromProps done!`)
        return({
            number2:100
        })
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(`nextProps=`,nextProps,` nextState=`,nextState)
        console.log(`3. shouldComponentUpdate done!`)
        return(true)
        // return(false)
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(`prevProps=`,prevProps,` prevState=`,prevState)
        console.log(`4. getSnapshotBeforeUpdate done!`)
        return('123')
        // return('null')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`prevProps=`,prevProps,` prevState=`,prevState,` snapshot=`,snapshot)
        console.log(`5. componentDidUpdate done!`)
    }

    componentDidMount(){
        console.log(`this.props=`,this.props,` this.state=`,this.state)
        console.log(`6. componentDidMount done!`)
    }

    componentWillUnmount(){
        console.log(`7. componentWillUnmount done!`)
    }

    render() {
        return (
            <div>
                <h2>Life Cycle!!</h2>
                <button onClick={()=>{this.setState({state:!this.state.state})}}>change state</button>
            </div>
        )
    }
}

ReactDOM.render(<LifeCycle propsString={'propsString'}/>,document.getElementById('root'))
