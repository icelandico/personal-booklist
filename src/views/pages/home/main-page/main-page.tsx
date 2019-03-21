import * as React from 'react'
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import { MainPageStyles } from "./main-page-styles"

interface MainPageProps extends WithStyles<typeof MainPageStyles> {

}
class MainPage extends React.Component<MainPageProps> {

  get classes() {
    return this.props.classes
  }

  render() {
    return (
      <div>
        TEST
      </div>
    )
  }
}

export default withStyles(MainPageStyles)(MainPage)