import * as React from "react"
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom"
import { withRouter } from "react-router"
import App from "../views/entrypoint/Main"
import HomePage from "../views/home/home-page"
import LandingPage from "../views/landing-page/landing-page"
import RegisterForm from "../views/landing-page/register-form/register-form"
import LoginForm from "../views/landing-page/login-form/login-form"
import AboutPage from "../views/landing-page/about-page/about-page"
import { inject, observer } from "mobx-react"
import User from "../stores/user-store"

interface RoutesInterface extends RouteComponentProps<any> {
  userStore?: User
}

interface RoutesState {
  loggedIn: boolean
}
@inject("userStore")
@observer
class Routes extends React.Component<RoutesInterface, RoutesState> {

  authorizedRoutes = () => {
    return (
      <Switch>
        <Route path="/home" component={HomePage} />
        <Redirect to="/home" />
      </Switch>
    )
  }

  notAuthorizedRoutes = () => {
    return (
      <Switch>
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={LoginForm} pathname={"/login"} />
      </Switch>
    )
  }

  render() {
    return (
      this.props.userStore.loggedIn ?
        this.authorizedRoutes()
      : 
        this.notAuthorizedRoutes()
    )
  }
}

export default withRouter<RoutesInterface>(Routes)