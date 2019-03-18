import * as React from 'react'
import { Button } from "@material-ui/core/"
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import { LoggedInNavbarStyles } from "./logged-in-navbar-styles"
import { inject, observer } from "mobx-react"
import User from "../../../../../stores/user-store"
import { Link } from "react-router-dom"
import classNames from "classnames"
interface NavigationProps extends WithStyles<typeof LoggedInNavbarStyles> {
  userStore?: User
}
@inject("userStore")
@observer
class LoggedInNavbar extends React.Component<NavigationProps> {
  
  get classes() {
    return this.props.classes
  }

  render() {
    const userStore = this.props.userStore.fetchData || null

    return (
      <Button
        variant="contained"
      >
        Hello {userStore.username}
      </Button>
    )
  }
}

export default withStyles(LoggedInNavbarStyles)(LoggedInNavbar)