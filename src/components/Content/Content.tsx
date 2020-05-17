import React from "react";
import { Typography } from "@material-ui/core";
import {
  BookOutlined,
  LocationOnOutlined,
  LinkOutlined,
  EmailOutlined,
  AssessmentOutlined,
  Person,
} from "@material-ui/icons";
import { useStyles } from "./styles";
import packageIcon from "../../assets/caixa.svg";
interface Props {}

const TabNavigator = () => {
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

const Content = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 200,
        backgroundColor: "#f1f1f1",
        width: "100%",
        borderBottomWidth: "2px",
        borderColor: "#FFF",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",

          margin: "0px 23% 0px 23%",
          height: 120,
        }}
      >
        <div
          style={{ backgroundColor: "orange", height: 100, width: 100 }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft: 20,

            height: 80,
          }}
        >
          <Typography variant="h6">Camunda BPM</Typography>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography
              style={{
                display: "flex",
                marginRight: 15,
                alignItems: "center",
                fontSize: 12,
              }}
            >
              <LocationOnOutlined style={{ height: 16 }} /> Berlin
            </Typography>
            <Typography
              style={{
                display: "flex",
                marginRight: 15,
                alignItems: "center",
                fontSize: 12,
              }}
            >
              <LinkOutlined style={{ height: 16 }} /> http://www.camunda.org
            </Typography>
            <Typography
              style={{
                display: "flex",
                marginRight: 15,
                alignItems: "center",
                fontSize: 12,
              }}
            >
              <EmailOutlined style={{ height: 16 }} /> info@camunda.com
            </Typography>
          </div>
        </div>
      </div>
      <TabNavigator></TabNavigator>
    </div>
  );
};

export default Content;
