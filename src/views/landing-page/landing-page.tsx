import * as React from 'react'
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import { LandingPageStyles } from "./landing-page-styles"
import Navigation from "./navbar/navbar"
import Routes from "./../../routes/Routes"
interface LandingPageProps extends WithStyles<typeof LandingPageStyles>{
  
}
class LandingPage extends React.Component<LandingPageProps> {

  get classes() {
    return this.props.classes;
  }

  render() {
    return(
      <div className={this.classes.mainPage}>
        <Navigation />
        <Routes />
      </div>
    ) 
  }
}

export default withStyles(LandingPageStyles)(LandingPage)