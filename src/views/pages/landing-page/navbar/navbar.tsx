import * as React from 'react'
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core/"
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import { NavStyles } from "./navbar-styles"
import { inject, observer } from "mobx-react"
import User from "../../../../stores/user-store"
import { Link } from "react-router-dom"
import classNames from "classnames"
import LoggedOutNavbar from "./logged-out-navbar/logged-out-navbar"
import LoggedInNavbar from "./logged-in-navbar/logged-in-navbar"

interface NavigationProps extends WithStyles<typeof NavStyles> {
  userStore?: User
}
@inject("userStore")
@observer
class Navigation extends React.Component<NavigationProps> {
  
  get classes() {
    return this.props.classes
  }

  render() {
    const userStore = this.props.userStore.fetchData || null

    return (
      <AppBar 
        position="absolute"
        className={this.classes.appBar}
      >
      <Toolbar>
        <Typography
          variant="h4"
          className={this.classes.navbarTitle}
        >
          Book tracker
        </Typography>
      </Toolbar>
        <Toolbar className={this.classes.actionButtonsContainer}>
        {
          !userStore ?
          <LoggedOutNavbar />
          :
          <LoggedInNavbar />
        }
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(NavStyles)(Navigation)