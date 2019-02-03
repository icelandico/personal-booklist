import { createStyles } from "@material-ui/core";
import Background from "./../../images/background/book-shelves-book-stack-bookcase-207662.jpg"

export const LandingPageStyles = () => createStyles({
  mainPage: {
    textAlign: "center",
    minHeight: "100vh",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
})
