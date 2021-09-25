import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddPlant from "./components/add-plant.component";
import Plant from "./components/plant.component";
import PlantsList from "./components/plants-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/plants"} className="navbar-brand">
            Landscape Architect's Library
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/plants"} className="nav-link">
                List of Plants
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/plants"]} component={PlantsList} />
            <Route exact path="/add" component={AddPlant} />
            <Route path="/plants/:id" component={Plant} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;