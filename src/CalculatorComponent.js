
import React123 from 'react'

class Calculator extends React123.Component {
    constructor(prop) {
        super(prop);
        this.state ={
            sum:0,
            a:3,
            b:4
        }
    }


    render() {
        
        const sumFn = () => this.setState({sum:this.state.a+this.state.b})
        const setNum1Fn = (x) => this.setState({a: parseInt(x.target.value)})
        const setNum2Fn = (x) => this.setState({b: parseInt(x.target.value)})
        
        const createSetNumFn = (propName) => (x) => this.setState({[propName]: parseInt(x.target.value) })

        return <div>
            Number 1
            <input onChange={createSetNumFn('a')} value={this.state.a}></input>
            
            Number 2
            <input onChange={createSetNumFn('a')} value={this.state.b}></input>
            <button onClick={sumFn}> Sum {this.state.sum} </button>

            Sum = {this.state.sum}
    </div>
    }
}
export default Calculator