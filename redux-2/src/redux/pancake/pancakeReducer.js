import { BUY_PANCAKE, SELL_PANCAKE } from "./pancakeType";

const initialState = { numOfPancakes: 40 }

const pancakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PANCAKE:
            const newCount = state.numOfPancakes - action.payload
            return newCount <= 0 ? { ...state, numOfPancakes: 1 } : { ...state, numOfPancakes: state.numOfPancakes - action.payload }
        case SELL_PANCAKE:
            return { ...state, numOfPancakes: state.numOfPancakes + parseInt(action.payload) }
        default: return state
    }
}
export default pancakeReducer