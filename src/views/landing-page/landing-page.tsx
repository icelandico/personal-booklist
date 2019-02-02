import * as React from 'react'
import withStyles from "@material-ui/core/styles/withStyles"
import { LandingPageStyles } from "./landing-page-styles"

interface LandingPageProps {
  classes?: any
}

class LandingPage extends React.Component<LandingPageProps> {

  get classes() {
    return this.props.classes;
  }

  render() {
    return(
      <div className={this.classes.mainPage}>
        Hello Typescript
      </div>
    ) 
  }
}

export default withStyles(LandingPageStyles)(LandingPage)