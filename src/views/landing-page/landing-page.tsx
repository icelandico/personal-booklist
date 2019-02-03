import * as React from 'react'
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import { LandingPageStyles } from "./landing-page-styles"
import RegisterForm from "./register-form/register-form"
interface LandingPageProps extends WithStyles<typeof LandingPageStyles>{

}
class LandingPage extends React.Component<LandingPageProps> {

  get classes() {
    return this.props.classes;
  }

  render() {
    return(
      <div className={this.classes.mainPage}>
        <RegisterForm />
      </div>
    ) 
  }
}

export default withStyles(LandingPageStyles)(LandingPage)