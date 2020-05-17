import React from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { BookOutlined, AssessmentOutlined, Person } from "@material-ui/icons";
import packageIcon from "../../assets/caixa.svg";

export const TabNavigator = () => {
  const classes = useStyles();
  return (
    <div className={classes.tabContainer}>
      <div className={classes.tabItemSelected}>
        <div className={classes.tabItemSelectedDivider} />
        <Typography className={classes.tabItemSelectedContent}>
          <BookOutlined className={classes.icon} />
          Repositories
          <div className={classes.tabItemBadge}>115</div>
        </Typography>
      </div>
      <div className={classes.tabItemUnSelected}>
        <Typography className={classes.tabItemUnSelectedContent}>
          <img
            src={packageIcon}
            style={{ height: 18, width: 18, marginRight: 4 }}
          ></img>
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
