import * as React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import App from "../views/entrypoint/Main"
import HomePage from "../views/home/home-page"
import LandingPage from "../views/landing-page/landing-page"

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
        <Route path="/main" component={App} />
        <Route path="/home" component={HomePage} pathname={"/home"} />
        <Route path="/login" component={LandingPage} pathname={"/login"} />
        <Route path="/register" component={LandingPage} pathname={"/register"} />
        {/* <Route path="*" component={PageNotFound} /> */}
      </Switch>
    )
  }
}