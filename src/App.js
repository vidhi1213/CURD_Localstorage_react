import Menu from './Components/Navigation';
import Create from './Components/Create';
import Contact from './Components/Contact';
import EditContact from './Components/EditContact';
import { Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
 <>
 <Menu/>

     <Provider store={store}>
    <Switch>
{/* <Route exact path="/" component={Contact}/> */}

<Route exact path="/create" component={Create}/>
<Route exact path="/Contact" component={Contact}/>
{/* <Route exact path='/Contact/edit/:id' component={EditContact}/> */}
</Switch>
</Provider> 
 </>

  );
}

export default App;
