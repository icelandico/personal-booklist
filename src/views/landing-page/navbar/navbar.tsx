import * as React from 'react'
import { AppBar, Typography, Toolbar, IconButton, Button } from "@material-ui/core/"
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import { NavStyles } from "./navbar-styles"
import { inject, observer } from "mobx-react";
import { UserStore } from "../../../stores/user-store";
import MenuIcon from "@material-ui/icons/Menu";
interface NavigationProps extends WithStyles<typeof NavStyles> {
  userStore?: any
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
        <Toolbar className={this.classes.actionButtonsContainer}>
          <Button
            variant="contained"
            className={this.classes.actionButton}
          >
            Login
          </Button>
          <Button
            variant="contained"
          >
            Register
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(NavStyles)(Navigation)