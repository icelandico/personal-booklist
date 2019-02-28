import * as React from 'react'
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import { LoginFormStyles } from "./login-form-styles"
import { Paper, TextField, Button, Typography, IconButton, InputAdornment } from "@material-ui/core/";
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import { inject, observer } from "mobx-react"
import User from "../../../../stores/user-store"

interface LoginFormProps extends WithStyles<typeof LoginFormStyles> {
  userStore?: User
}
@inject("userStore")
@observer
class LoginForm extends React.Component<LoginFormProps> {
  state: any = {
    showPassword: false,
    login: "",
    email: "",
    password: ""
  };

  get initialState() {
    return {
      showPassword: false,
      login: "",
      email: "",
      password: ""
    };
  }

  get classes() {
    return this.props.classes
  }

   async login (e: any): Promise<any> {
    e.preventDefault()
    const { login, password } = this.state
    const response = await this.props.userStore.signIn(login, password)
    const data = this.props.userStore.fetchData
    if (data.userExists) {
      alert("Wrong credentials!")
    } else {
      this.props.userStore.loggedIn = true
    }
  }

  changeCredentials = (e: any) => {
    const value = e.target.name
    this.setState({
      [value]: e.target.value
    })
  }

  handleClickShowPassword = () => {
    const visible = this.state.showPassword
    this.setState({
      showPassword: !visible
    })
  }

  render() {
    return (
      <Paper elevation={10} className={this.classes.formContainer}>
        <Typography variant="title">Enter credentials</Typography>
        <form
          className={this.classes.loginForm}
          onSubmit={e => this.login(e)}
        >
          <TextField
            label="Email or username"
            type="text"
            name="login"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            value={this.state.login}
            onChange={e => this.changeCredentials(e)}
          />
          <TextField
            id="outlined-adornment-password"
            //className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            type={this.state.showPassword ? "text" : "password"}
            label="Password"
            margin="normal"
            name="password"
            value={this.state.password}
            // onChange={this.handleChange('password')}
            onChange={e => this.changeCredentials(e)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? (
                      <VisibilityOff />
                    ) : (
                        <Visibility />
                      )}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Button
            variant="contained"
            type="submit"
            className={this.classes.registerButton}
          >
           Login
          </Button>
        </form>
      </Paper>
    )
  }
}


export default withStyles(LoginFormStyles)(LoginForm)