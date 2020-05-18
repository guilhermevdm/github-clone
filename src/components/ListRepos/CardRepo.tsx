import React from "react";
import { Grid, Card, Chip, makeStyles, Theme, createStyles, Typography } from "@material-ui/core";
import { BookOutlined } from "@material-ui/icons";

interface CardRepoProps {}
interface CardRepoContentProps {}
interface CardRepoImageProps {}
interface CardRepoTagProps {}

const CardRepoTag: React.FC<CardRepoTagProps> = (props) => {
  const classes = useStyles();
  return <div className={classes.cardRepoTag}>{props.children}</div>;
};

const CardRepoContent: React.FC<CardRepoContentProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.cardRepoContent}>
      <Typography variant="h6" style={{color: "#0366D6"}} >camunda-bpm-platform</Typography>
      <p>Flexible framework for workflow and decision automation with BPMN and DMN. Integration with Spring, Spring Boot, CDI.</p>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", flexWrap: "wrap" }}>
        {["java", "workflow", "bpmn", "bpm", "camunda-bpm-platform", "process-engine", "camunda-engine"].map((tag) => (
          <CardRepoTag key={tag}>{tag}</CardRepoTag>
        ))}
        <CardRepoTag>java</CardRepoTag>
        <CardRepoTag>java</CardRepoTag>
      </div>
    </div>
  );
};
const CardRepoImage: React.FC<CardRepoImageProps> = (props) => {
  const classes = useStyles();
  return <div className={classes.cardRepoImage}></div>;
};

const CardRepo: React.FC<CardRepoProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.cardRepoContainer}>
      <div className={classes.cardRepoBody}>
        <CardRepoContent></CardRepoContent>
        <CardRepoImage></CardRepoImage>
      </div>
      <div className={classes.cardRepoFooter}>
        <div style={{display:'flex',alignItems: 'center' ,backgroundColor: 'white', fontSize: 12, marginRight:5 }}>
          <BookOutlined className={classes.icon} />
          language
        </div>
        <div style={{display:'flex',alignItems: 'center' ,backgroundColor: 'white', fontSize: 12, marginRight:5 }}>
          <BookOutlined className={classes.icon} />
          license
        </div>
        <div style={{display:'flex',alignItems: 'center' ,backgroundColor: 'white', fontSize: 12, marginRight:5 }}>
          <BookOutlined className={classes.icon} />
          members
        </div>
        <div style={{display:'flex',alignItems: 'center' ,backgroundColor: 'white', fontSize: 12, marginRight:5 }}>
          <BookOutlined className={classes.icon} />
          stargazers
        </div>
        <div style={{display:'flex',alignItems: 'center' ,backgroundColor: 'white', fontSize: 12, marginRight:5 }}>
          <BookOutlined className={classes.icon} />
          issues
        </div>
        <div style={{display:'flex',alignItems: 'center' ,backgroundColor: 'white', fontSize: 12, marginRight:5 }}>
          <BookOutlined className={classes.icon} />
          pulls
        </div>
        <div style={{display:'flex',alignItems: 'center' ,backgroundColor: 'white', fontSize: 12, marginRight:5 }}>
          <BookOutlined className={classes.icon} />
          last updated
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRepoContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "100%",
    },
    cardRepoBody: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      alignItems: "flex-start",
    },
    cardRepoContent: {  flex: 3, marginRight: 10 },
    cardRepoImage: {  height: "100%", flex: 1.25 },
    cardRepoFooter: {  display:'flex', flexDirection: 'row', height: 25, width: "100%",  },
    cardRepoTag: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "4px 11px",
      backgroundColor: "#F1F8FF",
      color: "#0A6FE4",
      margin: "4px 6px 4px 0px",
      borderRadius: 2,
      fontSize: 12,
    },
    icon: {
      height: 15,
      width: 15,
    },
  })
);

export default CardRepo;
