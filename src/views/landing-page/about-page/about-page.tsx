import * as React from 'react'
import { Paper, Typography } from "@material-ui/core/"
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import { AboutPageStyles } from "./about-page-styles"
import { inject, observer } from "mobx-react"
import User from "../../../stores/user-store"
import classNames from "classnames"

interface AboutPageProps extends WithStyles<typeof AboutPageStyles> {
  userStore?: User
}
@inject("userStore")
@observer
class AboutPage extends React.Component<AboutPageProps> {

  get classes() {
    return this.props.classes;
  }

  render() {
    const { userStore }: any = this.props;

    return (
      <Paper
        className={this.classes.aboutHeaderContainer}
        elevation={2}
      >
        <Typography
          variant="display2"
        >
          Welcome to the Book Tracker
        </Typography>
      </Paper>

    );
  }
}

export default withStyles(AboutPageStyles)(AboutPage)