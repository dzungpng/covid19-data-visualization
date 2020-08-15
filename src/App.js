import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Home from './Pages/Home'
import Story from './Pages/Story'
import Visualization from './Pages/Visualization'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/story' exact component={Story} />
          <Route path='/visualization' exact component={Visualization} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
