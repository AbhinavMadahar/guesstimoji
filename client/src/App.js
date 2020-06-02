import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/home.page";
import GamePage from "./pages/game/game.page";
import './index.css';


function App() {
  return (
    <Router>
      <div className="App" >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/game" component={GamePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;