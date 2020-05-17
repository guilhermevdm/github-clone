import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { useStoreState, useStoreActions } from "../../store";

interface Props {}

const PinnedItems = (props: Props) => {
  const setGitHubState = useStoreActions((actions) => actions.gitHub.setProperty);

  const gitHubState = useStoreState((state) => state.gitHub);

  useEffect(() => {
    setGitHubState({property:"login", value: "aiusdhiudhasui"});
  }, [setGitHubState]);

  return (
    <div
      style={{
        display: "flex",
        padding: "0px 23% 0px 23%",
        height: 120,
        backgroundColor: "#FAFAFA",
        flexDirection: "column",
      }}
    >
      <Typography style={{ fontSize: 16, marginBottom: 20 }}>Pinned Repositories</Typography>
      <div style={{ backgroundColor: "gray", height: 50 }}>
        <pre>{JSON.stringify(gitHubState, null, 2)}</pre>
      </div>
    </div>
  );
};

export default PinnedItems;
