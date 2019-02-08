import * as React from 'react'
import { AppBar, Typography, Toolbar, IconButton, Button } from "@material-ui/core/"
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import { NavStyles } from "./navbar-styles"
import { inject, observer } from "mobx-react";
import User from "../../../stores/user-store";
interface NavigationProps extends WithStyles<typeof NavStyles> {
  userStore?: User
}
@inject("userStore")
@observer
class Navigation extends React.Component<NavigationProps> {
  
  get classes() {
    return this.props.classes;
  }

  render() {
    const { userStore }: any = this.props;

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
          <Button
            variant="contained"
            className={this.classes.actionButton}
          >
            Login
          </Button>
          <Button
            variant="contained"
            className={this.classes.actionButton}
          >
            Register
          </Button>
          <Button
            variant="contained"
          >
            About Project
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(NavStyles)(Navigation)