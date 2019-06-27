import React from "react";
import { Route } from "react-router-dom";

import Header from "./Components/Header";
import CreateUserForm from "./Components/CreateUserForm";
import LoginForm from "./Components/LoginForm";
import DashboardContainer from "./Components/Dashboard/Container";
import PrivateRoute from "./util/PrivateRoute";
import Recommendation from "./util/Recommendation";

// The plus button (add sleep) is built out inside the Header component. My thoughts are to only show that when the user is logged in. I think the user should be shown the login page by default and everything else is protected.

const App = () => {
  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        height: "100%",
        backgroundColor: "#262626",
        paddingBottom: 100
      }}
    >
      <Header />
      <Route exact path="/" render={props => <LoginForm {...props} />} />
      <Route path="/create" render={props => <CreateUserForm {...props} />} />
      <PrivateRoute path="/dashboard" component={DashboardContainer} />
    </div>
  );
};

export default App;
