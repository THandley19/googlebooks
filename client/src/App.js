import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/index";
import { Container } from "./components/Grid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Pages/Search";
import Saved from "./Pages/Saved";
import NoMatch from "./Pages/No Match";
import Detail from "./Pages/Detail";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Container>
          <Router>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/saved" component={Saved} />
              <Route exact path="/books/:id" component={Detail} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;
