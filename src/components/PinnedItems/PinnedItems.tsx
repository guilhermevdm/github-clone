import React from "react";
import { Typography } from "@material-ui/core";

interface Props {}

const PinnedItems = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "0px 23% 0px 23%",
        height: 120,
        backgroundColor: "#FAFAFA",
        flexDirection: 'column'
      }}
    >
      <Typography style={{fontSize: 16, marginBottom: 20}}>Pinned Repositories</Typography>
      <div style={{backgroundColor: 'gray', height: 50}}>
        SdasdA
      </div>
    </div>
  );
};

export default PinnedItems;
