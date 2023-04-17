// Here you have the actions to alter the state.
// These functions will be called from front end and we will pass them to the Reducer file.
import {BUY_ICECREAM} from './IceCreamTypes';

// Here we send in the command to Reducer what is the order we want him to do.
export const buyIceCream = () => {
    return{
        type: BUY_ICECREAM
    }
}

