import * as React from 'react'
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import { RegisterFormStyles } from "./register-form-styles"
import { Paper, TextField, Button, Typography, IconButton, InputAdornment } from "@material-ui/core/";
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import { inject, observer } from "mobx-react"
import User from "../../../../stores/user-store"

interface RegisterFormProps extends WithStyles<typeof RegisterFormStyles> {
  userStore?: User
}
@inject("userStore")
@observer
class RegisterForm extends React.Component<RegisterFormProps> {
  state = {
    showPassword: false,
    login: "",
    email: "",
    password: "",
    repeatedPassword: ""
  };

  get initialState() {
    return {
      showPassword: false,
      login: "",
      email: "",
      password: "",
      repeatedPassword: ""
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

  sendUser = (user: any) => {
    this.props.userStore.addUser(user);
    this.setState(this.initialState);
  };

  changeCredentials = (e: any) => {
    const value = e.target.name;
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
        <Typography variant="title">Register</Typography>
        <form
          className={this.classes.loginForm}
          onSubmit={e => this.submitUser(e)}
        >
          <TextField
            label="Username"
            type="login"
            name="login"
            autoComplete="login"
            margin="normal"
            variant="outlined"
            value={this.state.login}
            onChange={e => this.changeCredentials(e)}
          />
          <TextField
            label="Email"
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
          {/* <TextField
            id="outlined-adornment-password"
            //className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            type={this.state.showPassword ? "text" : "password"}
            label="Repeat password"
            margin="normal"
            name="password"
            value={this.state.repeatedPassword}
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
          /> */}
          <Button
            variant="contained"
            type="submit"
            className={this.classes.registerButton}
          >
            Register
          </Button>
        </form>
      </Paper>
    );
  }
}


export default withStyles(RegisterFormStyles)(RegisterForm)