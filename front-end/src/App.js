import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "./util/apiURL.js";
import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage";
import { Dashboard }from "./Pages/Dashboard"
import { UserProvider, UserContext } from "./Providers/UserProvider.js";

const API = apiURL();

function App() {
  return(
    <div>
      <UserProvider >
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route>
            <Dashboard path="/dashboard"/>
          </Route>
        </Switch>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
