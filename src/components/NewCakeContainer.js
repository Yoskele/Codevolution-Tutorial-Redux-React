import { buyCake } from "../redux"
import {connect} from 'react-redux'
import {useState} from 'react';
// Buy more than one cake at same time.
function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);
    // Calling Redux Function.
    // {props.buyCake(number)}
    // Action Creator buyCake()
    return (
        <div>
            <h3> Buy Many Cakes: {props.numOfCakes}</h3>
            <input type="text" value={number} onChange={(e)=> setNumber(e.target.value)}/>
            <button onClick={()=>props.buyCake(number)}>Buy Cake {number}</button>
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
    buyCake: (number) => dispatch(buyCake(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);