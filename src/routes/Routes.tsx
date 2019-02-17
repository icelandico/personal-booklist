import * as React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import App from "../views/entrypoint/Main"
import HomePage from "../views/home/home-page"
import LandingPage from "../views/landing-page/landing-page"
import RegisterForm from "../views/landing-page/register-form/register-form"
import LoginForm from "../views/landing-page/login-form/login-form"
import AboutPage from "../views/landing-page/about-page/about-page"
import { inject, observer } from "mobx-react"
import User from "../stores/user-store"

interface RoutesInterface {
  userStore?: User
}

interface RoutesState {
  loggedIn: boolean,
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
@inject("userStore")
@observer
class Routes extends React.Component<RoutesInterface, RoutesState, any> {

  state = {
    loggedIn: false
  }

  authorizedRouting() {
    return (
      <Switch>
        <Route path="/home" component={HomePage} />
      </Switch>
    )
  }

  unauthorizedRouting() {
    return (
      <Switch>
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={LoginForm} />
        {/* <Route path="*" component={PageNotFound} /> */}
      </Switch>
    )
  }

  render() {
    // const PrivateRoute = ({ component: Component, ...rest } : { component: any, path: any }) => (
    //   <Route {...rest} render={(props) => (
    //     this.props.userStore.loggedIn ? 
    //       <Component {...props} />
    //       : 
    //       <Redirect to='/login' />
    //     )} 
    //   />
    // )

    return (
      <Switch>
        {
          this.props.userStore.loggedIn ?
           this.authorizedRouting()
          :
           this.unauthorizedRouting()
        }
      </Switch>
    )
  }
}

export default Routes