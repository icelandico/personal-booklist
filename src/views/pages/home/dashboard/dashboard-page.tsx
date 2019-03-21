import * as React from 'react'
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import { DashboardPageStyles } from "./dashboard-page-styles"

interface MainPageProps extends WithStyles<typeof DashboardPageStyles> {

}
class DashboardPage extends React.Component<MainPageProps> {

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

export default withStyles(DashboardPageStyles)(DashboardPage);