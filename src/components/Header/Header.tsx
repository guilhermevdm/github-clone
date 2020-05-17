import React from "react";
import { Typography } from "@material-ui/core";
import { LocationOnOutlined, LinkOutlined, EmailOutlined } from "@material-ui/icons";
import { TabNavigator } from "./TabNavigator";
import { useStoreState } from "../../store";

interface Props {}

const Header = (props: Props) => {
  const name = useStoreState((state) => state.gitHub.name);
  const location = useStoreState((state) => state.gitHub.location);
  const blog = useStoreState((state) => state.gitHub.blog);
  const avatar_url = useStoreState((state) => state.gitHub.avatar_url);
  const email = useStoreState((state) => state.gitHub.name);

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
        marginBottom: 20,
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
        <img alt="avatar" src={avatar_url} style={{ height: 100, width: 100 }} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft: 20,
            height: 80,
          }}
        >
          <Typography variant="h6">{name}</Typography>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography
              style={{
                display: "flex",
                marginRight: 15,
                alignItems: "center",
                fontSize: 12,
              }}
            >
              <LocationOnOutlined style={{ height: 16 }} />
              {location}
            </Typography>
            <Typography
              style={{
                display: "flex",
                marginRight: 15,
                alignItems: "center",
                fontSize: 12,
              }}
            >
              <LinkOutlined style={{ height: 16 }} />
              {blog}
            </Typography>
            <Typography
              style={{
                display: "flex",
                marginRight: 15,
                alignItems: "center",
                fontSize: 12,
              }}
            >
              <EmailOutlined style={{ height: 16 }} />
              {email}
            </Typography>
          </div>
        </div>
      </div>
      <TabNavigator></TabNavigator>
    </div>
  );
};

export default Header;
