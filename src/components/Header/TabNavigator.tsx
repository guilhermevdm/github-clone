import React from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { BookOutlined, AssessmentOutlined, Person } from "@material-ui/icons";
import packageIcon from "../../assets/caixa.svg";
import { useStoreState } from "../../store";

export const TabNavigator = () => {
  const classes = useStyles();
  const public_repos = useStoreState((state) => state.gitHub.public_repos);
  return (
    <div className={classes.tabContainer}>
      <div className={classes.tabItemSelected}>
        <div className={classes.tabItemSelectedDivider} />
        <div className={classes.tabItemSelectedContent}>
          <BookOutlined className={classes.icon} />
          Repositories
          <div className={classes.tabItemBadge}>{public_repos}</div>
        </div>
      </div>
      <div className={classes.tabItemUnSelected}>
        <Typography className={classes.tabItemUnSelectedContent}>
          <img alt="icon package" src={packageIcon} style={{ height: 18, width: 18, marginRight: 4 }}></img>
          Packages
        </Typography>
      </div>
      <div className={classes.tabItemUnSelected}>
        <Typography className={classes.tabItemUnSelectedContent}>
          <Person className={classes.icon} />
          People
        </Typography>
      </div>
      <div className={classes.tabItemUnSelected}>
        <Typography className={classes.tabItemUnSelectedContent}>
          <AssessmentOutlined className={classes.icon} />
          Projects
        </Typography>
      </div>
    </div>
  );
};
