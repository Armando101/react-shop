import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login/Login";
import { Layout } from "./containers/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { PasswordRecovery } from "./pages/PasswordRecovery/PasswordRecovery";
import { SendEmail } from "./pages/SendEmail/SendEmail";
import { NewPassword } from "./pages/NewPassword/NewPassword";
import { CreateAccount } from "./pages/CreateAccount/CreateAccount";
import { MyAccount } from "./pages/MyAccount/MyAccount";
import { Checkout } from "./pages/Checkout/Checkout";
import { Orders } from "./pages/Orders/Orders";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/password-recovery" component={PasswordRecovery} />
          <Route exact path="/send-email" component={SendEmail} />
          <Route exact path="/new-password" component={NewPassword} />
          <Route exact path="/account" component={MyAccount} />
          <Route exact path="/signup" component={CreateAccount} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/orders" component={Orders} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
