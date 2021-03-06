import { createStyles } from "@material-ui/core";

export const RegisterFormStyles = () =>
  createStyles({
    formContainer: {
      padding: "2rem",
      backgroundColor: "#cbb7a7"
    },
    loginForm: {
      display: "flex",
      flexDirection: "column"
    },
    registerButton: {
      marginTop: "1rem"
    }
  });
