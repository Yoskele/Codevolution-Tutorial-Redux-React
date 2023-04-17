import React from 'react'
import {connect} from 'react-redux'
import { buyIceCream } from '../redux'
import { buyCake } from '../redux'
// Combine two states into one React component Displayer.

function ItemContainer(props) {
  return (
    <div>
        <h2> Item - {props.item}</h2>
        <button onClick={props.buyItem}>Buy Items</button>
    </div>
  )
}
//ownProps brings all the props from the Redux Store.
// We need to pass in the props we want. We check for the right value and pass it to an Object.
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream
    return {
        item:itemState
    }
}

const mapToDispatchToProps = (dispatch, ownProps) =>{
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())
    return {
        buyItem:dispatchFunction
    }
}


export default connect(mapStateToProps, mapToDispatchToProps)(ItemContainer);