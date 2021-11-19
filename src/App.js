import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "./lib/GlobalStyle";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/main" component={Main} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
