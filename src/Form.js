import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Activate, Deactivate, On, Off } from './Actions'

class Form extends Component {
    render() {
        const { ON, Bulb, Activate, Deactivate, On, Off } = this.props

        return (
            <div>
                {ON ? <p>Dectivate</p> : <p>Activate</p>}
                <button onClick={ON ? Deactivate : Activate}>Click</button>
                <br/>
                <p>{Bulb}</p>
                <button onClick={Off}>Click</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.Two.Bulb, state, "check")
    return {
        ON: state.One.On,
        Bulb: state.Two.Bulb
    }
}


export default connect(mapStateToProps,
    {
        Activate,
        Deactivate,
        On,
        Off
    })(Form)
