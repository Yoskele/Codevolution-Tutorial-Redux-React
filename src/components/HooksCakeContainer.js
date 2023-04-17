import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux';

function HooksCakeContainer() {
    const cakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Num of Cakes:{cakes} </h3>
            <button onClick={()=> dispatch(buyCake())}> Buy Cake with Selector </button>
        </div>
    )
}

export default HooksCakeContainer

