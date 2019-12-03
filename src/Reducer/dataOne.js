import { ACTIVATE, DEACTIVATE } from '../Constant'
 const initialState = {
    data:{
    On: false,
    text: "IamWorking"
    }

}
export default (state = initialState,{ type, payload }) => {
    switch (type) {
        case ACTIVATE:
            return { 
                On: true,
            }
        case DEACTIVATE:
            return { 
                On: false,
            }
        default:
            return state
    }
}


