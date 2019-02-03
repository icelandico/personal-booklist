import * as React from 'react'
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles"
import { RegisterFormStyles } from "./register-form-styles"
import { Paper, TextField, Button, Typography, IconButton, InputAdornment } from "@material-ui/core/";
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"

interface RegisterFormProps extends WithStyles<typeof RegisterFormStyles> {

}

class LoginForm extends React.Component<RegisterFormProps> {

  state = {
    showPassword: false
  }

  get classes() {
    return this.props.classes;
  }

  render() {
    return (
      <Paper
       elevation={10}
       className={this.classes.formContainer}
      >
        <Typography
          variant="title"
        >
          Register
        </Typography>
          <form className={this.classes.loginForm}>
            <TextField
              label="Username"
              type="login"
              name="login"
              autoComplete="login"
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-adornment-password"
              //className={classNames(classes.margin, classes.textField)}
              variant="outlined"
              type={"password"}
              label="Password"
              margin="normal"
              //value={this.state.password}
              //onChange={this.handleChange('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      //onClick={this.handleClickShowPassword}
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
            className={this.classes.registerButton}
          >
            Register
          </Button>
          </form>
        </Paper>
    );
  }
}

export default withStyles(RegisterFormStyles)(LoginForm)