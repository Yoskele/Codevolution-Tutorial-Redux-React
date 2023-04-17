import { buyIceCream } from "../redux"
import {connect} from 'react-redux'

function IceCreamContainer(props) {

  return (
      <div>
          <h3> Number Of IceCreams: {props.numOfIceCream}</h3>
          <button onClick={props.buyIceCream}>Buy IceCram</button>
      </div>
  )
}

// Get The State from Redux Store and put them in props.
const mapStateToProps = state => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);