import CakeContainer from "./components/CakeContainer";
import {Provider} from 'react-redux';
import store from "./redux/Store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";
function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        <h2> React & Redux </h2>
        <CakeContainer />
        <h2> Redux UseSelector Hook </h2>
        <HooksCakeContainer />
        <hr></hr>
        <h2> Redux With Combine Reducer</h2>
        <IceCreamContainer />
        <h2> New Cakes: </h2>
        <NewCakeContainer />
        <h2> Item Container: </h2>
        {/* Pass in the object name u want to display. We have Cake or IceCream */}
        <ItemContainer iceCream />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
