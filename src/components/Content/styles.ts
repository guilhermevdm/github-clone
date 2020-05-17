import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabContainer: {
      margin: "0px 23% 0px 23%",
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#f1f1f1",
    },
    tabItemUnSelected: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f1f1f1",
      width: 150,
      height: 45,
    },
    tabItemUnSelectedContent: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 14,
      padding: "7.5px 0px 7.5px 0px",
      justifyContent: "space-around",
      color: "#586069",
    },
    tabItemSelected: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#f1f1f1",
      width: 150,
      height: 45,
      justifyContent: "space-between",
      border: "1px solid #e5e8eb",
      borderBottom: 0,
    },
    tabItemSelectedContent: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
      fontSize: 14,
      fontWeight: 600,
      padding: "7.5px 0px 7.5px 0px",
      justifyContent: "space-around",
    },
    tabItemSelectedDivider: { backgroundColor: "#E36209", height: 4 },
    tabItemBadge: {
      fontSize: 12,
      backgroundColor: "#EDEDED",
      borderRadius: 7.35,
      padding: "2px 5px",
    },
    icon: {
      height: 18,
      width: 18,
    },
  })
);
