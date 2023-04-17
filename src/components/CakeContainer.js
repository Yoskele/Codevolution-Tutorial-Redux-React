import { buyCake } from "../redux"
import {connect} from 'react-redux'

function CakeContainer(props) {
  return (
    <div>
        <h3> Number Of Cakes: {props.numOfCakes}</h3>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

// Get The State from Redux Store and put them in props.
const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);