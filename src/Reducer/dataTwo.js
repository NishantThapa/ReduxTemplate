import { ON, OFF } from '../Constant'
const initialState = {
    Bulb: "ON"
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case ON:
            return { Bulb: "ON" }
        case OFF:
            return { Bulb: "OFF" }

        default:
            return state
    }
}

