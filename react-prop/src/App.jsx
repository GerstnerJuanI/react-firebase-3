import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Usuarios from './components/Usuarios'
import Usuario from './components/Usuario'

function App() {

  return (
    <Router>
      
      <Link to="/">Usuarios</Link>



        <Switch>
          <Route exact path="/">
            <Usuarios></Usuarios>
          </Route>
          <Route path="/usuario/:id">
            <Usuario></Usuario>
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
