import React from 'react'

class StateComponent extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            a: 10
        }
    }

    render() {
        const decreaseFn = () => this.setState({ a: this.state.a - 1 })

        return <div>
            <p>{this.state.a}</p>
            <button onClick={decreaseFn}> De</button>
        </div>

    }
}
export default StateComponent