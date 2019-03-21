import * as React from 'react'
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import { HomePageStyles } from "./home-page-styles"
import Dashboard from "./dashboard/dashboard-page"
import { inject, observer } from "mobx-react"
import User from "../../../stores/user-store"

interface HomePageProps extends WithStyles<typeof HomePageStyles> {
  userStore?: User
}
@inject("userStore")
@observer
class HomePage extends React.Component<HomePageProps> {

  get classes() {
    return this.props.classes
  }

  render() {
    return (
      <div className={this.classes.mainPage}>
        <Dashboard />
      </div>
    )
  }
}

export default withStyles(HomePageStyles)(HomePage)