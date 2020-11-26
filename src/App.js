import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import PostPage from "./components/PostPage/PostPage";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/post" component={PostPage} />
    </Router>
  );
};

export default App;
