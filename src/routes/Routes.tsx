import * as React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import App from "../views/entrypoint/Main"
import HomePage from "../views/home/home-page"
import LandingPage from "../views/landing-page/landing-page"
import RegisterForm from "../views/landing-page/register-form/register-form"
import LoginForm from "../views/landing-page/login-form/login-form"
import AboutPage from "../views/landing-page/about-page/about-page"

interface RoutesInterface {
}

interface RoutesState {
  loggedIn: boolean
}

// const NonAuthRoute = ({ user: auth, component: Component, pathname: path, ...rest }) => (
//   <Route {...rest} render={props => (
//     !auth ? (
//       <Component {...props} />
//     ) : (
//         <Redirect
//           to={{ pathname: path }}
//         />
//       ))} />
// );

class Routes extends React.Component<RoutesInterface, RoutesState> {

  state = {
    loggedIn: false
  }

  render() {
    const userLogged = this.state.loggedIn
    return(
      <Switch>
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={AboutPage} pathname={"/login"} />
        {/* <Route path="*" component={PageNotFound} /> */}
      </Switch>
    )
  }
}

export default Routes