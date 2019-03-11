import * as React from 'react'
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import { HomePageStyles } from "./home-page-styles"
import MainPage from "./main-page/main-page"

import Navigation from "./../landing-page/navbar/navbar"
interface HomePageProps extends WithStyles<typeof HomePageStyles> {

}
class HomePage extends React.Component<HomePageProps> {

  get classes() {
    return this.props.classes
  }

  render() {
    return (
      <div className={this.classes.mainPage}>
        <Navigation />
        <MainPage />
      </div>
    )
  }
}

export default withStyles(HomePageStyles)(HomePage)