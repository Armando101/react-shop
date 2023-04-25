import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Login } from "./containers/Login/Login";
import { RecoveryPassword } from "./containers/Recovery/RecoveryPassword";
import { Layout } from "./containers/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/login"} component={Login} />
          <Route
            exact
            path={"/recovery-password"}
            component={RecoveryPassword}
          />
          <Route path={"*"} component={NotFound} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
