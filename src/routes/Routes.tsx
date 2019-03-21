import * as React from "react"
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom"
import { withRouter } from "react-router"
import HomePage from "../views/pages/home/home-page"
import RegisterForm from "../views/pages/landing-page/register-form/register-form"
import LoginForm from "../views/pages/landing-page/login-form/login-form"
import AboutPage from "../views/pages/landing-page/about-page/about-page"
import { inject, observer } from "mobx-react"
import User from "../stores/user-store"
import SearchPage from "../views/pages/home/search-site/search-site-page"
import DashboardPage from "../views/pages/home/dashboard/dashboard-page"

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
        <Route exact path="/home" component={DashboardPage} />
        <Route path="/home/search" component={SearchPage} />
        {/* <Redirect to="/home" /> */}
      </Switch>
    );
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