import * as React from 'react'
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import { SearchSiteStyles } from "./search-site-page-styles"
import { Paper, TextField, Button, Typography, IconButton, InputAdornment } from "@material-ui/core/"
import { inject, observer } from "mobx-react"
import User from "../../../../stores/user-store"
import { Redirect } from "react-router-dom"

interface SearchSiteProps extends WithStyles<typeof SearchSiteStyles> {
  userStore?: User
}
@inject("userStore")
@observer
class SearchSite extends React.Component<SearchSiteProps> {
  state: any = {
    showPassword: false,
    login: "",
    email: "",
    password: "",
    logged: false
  }

  get initialState() {
    return {
      showPassword: false,
      login: "",
      email: "",
      password: ""
    }
  }

  get classes() {
    return this.props.classes
  }

  render() {

    return (
      <Paper elevation={10}>
        Dashboard
      </Paper>
    )
  }
}


export default withStyles(SearchSiteStyles)(SearchSite)