import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./pages/Form";
import Home from "./pages/Home";
import Results from "./pages/Results";
import NonResults from "./pages/NonResults";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import NoMatch from "./pages/NoMatch";


const App = () =>
  <Router>
    <div>
      <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home/:email?" component={Home} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/results/:skill" component={Results} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/results/nonuser/:skill" component={NonResults} />
          <Route component={NoMatch} />
        </Switch>

    </div>
  </Router>;

export default App;