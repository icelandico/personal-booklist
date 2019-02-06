import { createStyles } from "@material-ui/core";

export const NavStyles = () =>
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
      alignItems: "flex-end"
    },
    actionButtonsContainer: {
      minWidth: "15%",
      flex: 1,
      display: "flex",
      justifyContent: "center"
    },
    actionButton: {
      marginRight: "1rem"
    }
  });
