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
      <Layout>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/login"} component={Login} />
          <Route
            exact
            path={"/recovery-password"}
            component={RecoveryPassword}
          />
          <Route exact path={"*"} component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
