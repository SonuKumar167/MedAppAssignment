import './App.css';
import { Route, Switch } from "react-router-dom";
import Login from './Login/Login.js';
import DashboardContainer from './containers/DashboardContainer';
import CartContainer from './containers/CartContainer.js';
import Error from './Error/Error.js';
function App() {
  return (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Login" component={Login} />
        <Route path="/Dashboard" component={DashboardContainer} />
        <Route path="/Cart" component={CartContainer} />
        <Route component={Error} />
    </Switch>
  );
}

export default App;
