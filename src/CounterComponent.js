import { render } from '@testing-library/react';
import React from 'react'

class CounterCom extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            sum: 0,
            numCounter: 3,
            inputs: [1, 2, 3]
        }
    }


    render() {
        const setCounterFn = (x) => {
            this.setState({ numCounter: parseInt(x.target.value) });
            //this.setState({ input: new Array(parseInt(x.target.value)) })
        }

        const changeInput = (i, y) => {
            this.state.inputs[i] = parseInt(y.target.value);
            this.setState({ inputs: this.state.inputs })
        }

        const changeInput2 = (i) => {
            const changeInput = y => {
                this.state.inputs[i] = parseInt(y.target.value);
                this.setState({ inputs: this.state.inputs })
            }

            return changeInput;
        }

        const createInput = (i) => <input onChange={changeInput2(i)} value={this.state.inputs[i]} />

        return <div>

            {this.state.inputs.map((x, i) => createInput(i))}

            {this.state.inputs.reduce((a, c) => a + ', ' + c)}

            <button onClick={() => this.setState({ sum: this.state.inputs.reduce((a, c) => a + c) })}> Sum</button>

            {this.state.sum}
        </div>
    }
}
export default CounterCom