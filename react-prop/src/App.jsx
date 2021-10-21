import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Base from './components/Base';
import Inicio from './components/Inicio';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/inicio">
          <Inicio></Inicio>
        </Route>
        <Route path="/">
          <Base></Base>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
