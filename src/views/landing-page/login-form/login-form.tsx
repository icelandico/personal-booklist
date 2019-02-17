import * as React from 'react'
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import { LoginFormStyles } from "./login-form-styles"
import { Paper, TextField, Button, Typography, IconButton, InputAdornment } from "@material-ui/core/";
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import { inject, observer } from "mobx-react"
import User from "../../../stores/user-store"
import { Redirect } from "react-router-dom"
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
    password: "",
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
    return this.props.classes;
  }

  submitUser = (e: any) => {
    e.preventDefault();
    const user = {
      login: this.state.login,
      email: this.state.email,
      password: this.state.password
    };
    this.sendUser(user);
  };

  // login = (e: any) => {
  //   e.preventDefault()
  //   const { login, email } = this.state

  //   if (login === "Mike" && email === "mail@mail.pl") {
  //   }
  // }

   async login (e: any): Promise<any> {
    e.preventDefault()
    const { email, password } = this.state
    const response = await this.props.userStore.signUp(email, password)
    if (response === null) {
      console.log("Something went wrong...")
    } 
    else {
      this.props.userStore.loggedIn = true
    }
  }

  // async login(data: { email: string, password: string }): Promise<any> {
  //   // self.setToken("token")
  //   // return null
  //   const response = await getEnv(self).api.account.login(data)
  //   if (response.kind == "ok") {
  //     self.setToken(response.token)
  //     await (getParent(self) as any).init()
  //   }
  //   return response.kind == "ok" ? null : ["invalid_credentials"]
  // },

  sendUser = (user: any) => {
    this.props.userStore.addUser(user)
    this.setState(this.initialState)
  };

  changeCredentials = (e: any) => {
    const value = e.target.name
    this.setState({
      [value]: e.target.value
    });
  };

  handleClickShowPassword = () => {
    const visible = this.state.showPassword
    this.setState({
      showPassword: !visible
    });
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
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            value={this.state.email}
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
    );
  }
}


export default withStyles(LoginFormStyles)(LoginForm)