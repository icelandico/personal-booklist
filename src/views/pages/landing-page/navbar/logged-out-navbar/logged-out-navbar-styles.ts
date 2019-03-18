import { createStyles } from "@material-ui/core";

export const LoggedOutNavbarStyles = () =>
  createStyles({
    formContainer: {
      position: "absolute",
      top: "2%",
      left: "10%",
      padding: "2rem"
    },
    appBar: {
      backgroundColor: "#cbb7a7",
      display: "flex",
      alignItems: "flex-end",
      flexDirection: "row"
    },
    actionButtonsContainer: {
      minWidth: "15%",
      flex: 1,
      display: "flex",
      justifyContent: "flex-end",
    },
    actionButton: {
      marginRight: "1rem",
    },
    navbarTitle: {
      fontFamily: "Cardo",
    },
    linkButton: {
      "& span a": {
        textDecoration: "none",
        color: "#000"
      }
    }
  });
