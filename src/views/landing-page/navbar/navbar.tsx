import * as React from 'react'
import { Paper } from "@material-ui/core/"
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import { NavStyles } from "./navbar-styles"
import { inject, observer } from "mobx-react";
import { UserStore } from "../../../stores/user-store";
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
      <Paper elevation={10} className={this.classes.formContainer}>
        <h2>There is {userStore.userCount} users</h2>
        <p>
          Users name are:
          {
            this.props.userStore.users.map((user: any) => (
                <h2>{user.login}</h2>
              )
            )
          }
        </p>
      </Paper>
    );
  }
}

export default withStyles(NavStyles)(Navigation)