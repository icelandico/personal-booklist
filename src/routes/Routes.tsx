import * as React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import App from "./../App"

interface RoutesInterface {

}

interface RoutesState {
  loggedIn: boolean
}

class Routes extends React.Component<RoutesInterface, RoutesState> {

  state = {
    loggedIn: false
  }

  render() {
    const userLogged = this.state.loggedIn
    return(
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    )
  }
}