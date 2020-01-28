import React from "react";
import { Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useSelector } from "react-redux";
import WorkspaceUrl from "../WorkspaceUrl/WorkspaceUrl";
import Dashboard from "../ChatDashboard/CharDashboard";
import Header from "../Header/Header";
import SignIn from "../SignIn/SignIn";
import SnackBar from "../SnackBar/SnackBar";
import Footer from "../Footer/Footer";

const customHistory = createBrowserHistory();

function App() {
  const error = useSelector(state => state.error);
  return (
    <div className="App">
      <SnackBar error={error} />
      <Router history={customHistory}>
        <Header />
        <main>
          <Route exact path="/" component={WorkspaceUrl} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/signin/:team" component={SignIn} />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
