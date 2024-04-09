import { BUY_PANCAKE, SELL_PANCAKE } from "./pancakeType"

export const buyPancake = (num) => {
    return {
        type: BUY_PANCAKE,
        payload: num
    }
}
export const sellPancake = (num) => {
    return {
        type: SELL_PANCAKE,
        payload: num
    }
}