import * as React from 'react'
import { Button, Typography } from "@material-ui/core/"
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import { LoggedInNavbarStyles } from "./logged-in-navbar-styles"
import { inject, observer } from "mobx-react"
import User from "../../../../../stores/user-store"
import { Link } from "react-router-dom"
import classNames from "classnames"
import SearchIcon from "@material-ui/icons/Search"
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
      <>
        {/* <Button
          variant="contained"
          className={classNames(this.classes.actionButton, this.classes.linkButton)}
        >
          <Link to="/search">
            Search
        </Link>
        </Button> */}
        <Button
          variant="contained"
          className={classNames(this.classes.actionButton, this.classes.linkButton)}
        >
          Search
        <SearchIcon  />
        </Button>
        <Typography
          variant="subtitle1"
        >
          Hello {userStore.username}
        </Typography>
      </>
    )
  }
}

export default withStyles(LoggedInNavbarStyles)(LoggedInNavbar)