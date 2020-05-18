import React from "react";
import { Pagination } from "@material-ui/lab";
import { makeStyles, createStyles, Grid, CardHeader } from "@material-ui/core";
import CardRepo from "./CardRepo";
import { useStoreState } from "../../store";
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
  const repos = useStoreState((state) => state.gitHub.repos);

  return (
    <div
      style={{
        alignItems: "flex-start",

        display: "flex",
        height: "100%",
        flexDirection: "row",
        padding: "0px 23% 0px 23%",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flex: 3, marginRight: 24, flexDirection: "column" }}>
        {repos && repos.map((repo) => <CardRepo key={repo?.id} repo={repo}></CardRepo>)}
      </div>
      <div style={{ backgroundColor: "#fafafa", display: "flex", height: 100, width: 100, flex: 1 }}></div>
    </div>
  );
};

export default ListRepos;
