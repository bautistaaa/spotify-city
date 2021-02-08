import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Callback from './Callback';
import Home from './Home';
import Login from './Login';
import { AppProvider } from './AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/callback" component={Callback} />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
