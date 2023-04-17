import {BUY_CAKE} from './CakeTypes'

// Set default value for the cake 1. So every time we click on Buy Cake it will buy one cake.
// payload send extra info to the Reducer.
export const buyCake = (number = 1) => {
    return {
        type:BUY_CAKE,
        payload:number
    }
}
