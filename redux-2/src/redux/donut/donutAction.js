import { BUY_DONUT } from "./donutType"

export const buyDonut = (count) => {
    return {
        type: BUY_DONUT,
        payload: count
    }
}