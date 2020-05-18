import React from "react";
import { Pagination } from "@material-ui/lab";
import { makeStyles, createStyles, Grid, CardHeader } from "@material-ui/core";
import CardRepo from "./CardRepo";
interface Props {}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: "pink",
    },
    listRepos: {
      backgroundColor: "gray",
    },
    usersInfo: {
      backgroundColor: "gray",
      alignSelf: "flex-start",
    },
  })
);

const ListRepos = (props: Props) => {
  const classes = useStyles();

  return (
    <div
      style={{
          alignItems: 'flex-start',
        
        display: "flex",
        height: "100%",
        flexDirection: "row",
        padding: "0px 23% 0px 23%",
        justifyContent: "space-between",
      }}
    >
      <div style={{  display: "flex", flex: 3, marginRight: 24 }}>
        <CardRepo></CardRepo>
      </div>
      <div style={{ backgroundColor: "gray", display: "flex", height: 100, width: 100, flex: 1 }}></div>
    </div>
    // <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={2} className={classes.root}>
    //   <Grid item xs={6} className={classes.listRepos}>
    //     <Grid container direction="column" alignItems="center">
    //       <CardRepo></CardRepo>
    //       <Grid item>
    //         <Pagination count={10} />
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //   <Grid className={classes.usersInfo} item xs={3}>
    //     Side Info Repos
    //   </Grid>
    //   <Grid direction="column" justify="flex-end" alignContent="flex-end" alignItems="center" container>
    //     <Grid item xs={12}>
    //       ASDASDASD
    //     </Grid>
    //   </Grid>
    // </Grid>
  );
};

export default ListRepos;
