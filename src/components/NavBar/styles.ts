import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      display: "flex",
      padding: "8px 16px",
      backgroundColor: "#24292e",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    navigation: {
      alignItems: "center",
      display: "flex",
    },

    logo: {
      width: 32,
      height: 32,
      margin: "0px 16px 0px 0px",
      "&:hover": {
        opacity: "50%",
      },
    },
    inputRoot: {
      color: "inherit",
      margin: "0px 16px 0px 0px",
    },

    inputInput: {
      backgroundColor: "#404448",
      height: 28,
      padding: "0px 8px 0px 8px",
      borderRadius: 3,
      transition: theme.transitions.create("width"),

      width: 300,
      "&:focus": {
        width: 478,
      },
    },

    link: {
      color: "white",
      margin: "0px 16px 0px 0px",
      fontSize: 14,
      fontWeight: 600,
      "&:hover": {
        opacity: "50%",
      },
    },
    profile: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: 120,
    },
    icon: {
      padding: 0,
      color: "white",
      "&:hover": {
        opacity: "50%",
      },
    },
  })
);