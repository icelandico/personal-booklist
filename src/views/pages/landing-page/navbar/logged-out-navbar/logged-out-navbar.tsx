import * as React from 'react'
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core/"
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import { LoggedOutNavbarStyles } from "./logged-out-navbar-styles"
import { inject, observer } from "mobx-react"
import User from "../../../../../stores/user-store"
import { Link } from "react-router-dom"
import classNames from "classnames"
interface NavigationProps extends WithStyles<typeof LoggedOutNavbarStyles> {
  userStore?: User
}
@inject("userStore")
@observer
class LoggedOutNavbar extends React.Component<NavigationProps> {
  
  get classes() {
    return this.props.classes
  }

  render() {
    const userStore = this.props.userStore.fetchData || null

    return (
      <Toolbar className={this.classes.actionButtonsContainer}>
      
        <Button
          variant="contained"
          className={classNames(this.classes.actionButton, this.classes.linkButton)}
        >
          <Link to="/login">
            Login
          </Link>
        </Button>
        <Button
          variant="contained"
          className={classNames(this.classes.actionButton, this.classes.linkButton)}
          >
          <Link to="/register">
            Register
          </Link>
        </Button>
        <Button
          variant="contained"
          className={classNames(this.classes.actionButton, this.classes.linkButton)}
        >
        <Link to="/about">
          About project
        </Link>
        </Button>
        
      </Toolbar>
    )
  }
}

export default withStyles(LoggedOutNavbarStyles)(LoggedOutNavbar)