import React from "react";
import logo from "../../assets/github-logo-white.svg";
import { AppBar, InputBase, Avatar, Toolbar, IconButton } from "@material-ui/core";
import { Notifications, ArrowDropDown } from "@material-ui/icons";
import { useStyles } from "./styles";
interface Props {}

const Header = (props: Props) => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.appBar}>
        <div className={classes.navigation}>
          <a href="/">
            <img alt="github logo" src={logo} className={classes.logo}></img>
          </a>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
          <a href="/" className={classes.link}>
            Pull Requests
          </a>
          <a href="/" className={classes.link}>
            Issues
          </a>
          <a href="/" className={classes.link}>
            Marketplace
          </a>
          <a href="/" className={classes.link}>
            Explore
          </a>
        </div>
        <div className={classes.profile}>
          <IconButton className={classes.icon}>
            <Notifications />
          </IconButton>
          <IconButton className={classes.icon}>
            +<ArrowDropDown></ArrowDropDown>
          </IconButton>
          <IconButton className={classes.icon}>
            <Avatar variant="square" style={{ height: 20, width: 20 }}></Avatar>
            <ArrowDropDown></ArrowDropDown>
          </IconButton>
        </div>
      </AppBar>
      <Toolbar style={{ backgroundColor: "#f1f1f1" }} />
    </>
  );
};

export default Header;
