import { INCREMENT, DECREMENT, RESET } from "./Actions"

const INITIAL_STATE = {
    count: 0
}

const Reducer = (state=INITIAL_STATE,action) => {
    const { type, payload } = action
    switch(type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...INITIAL_STATE
            }
        default:
            return state
    }
}

export default Reducer