import React, { useEffect, useState } from "react";
import { Grid, Card, Chip, makeStyles, Theme, createStyles, Typography } from "@material-ui/core";
import { BookOutlined, AccountBox } from "@material-ui/icons";
import Octicon, { RepoForked, PrimitiveDot, Law, Star, IssueOpened, GitPullRequest } from "@primer/octicons-react";
import axios from "axios";
interface CardRepoProps {
  repo?: any;
}
interface CardRepoContentProps {
  repo?: any;
  topics?: any;
}
interface CardRepoImageProps {
  repo?: any;
}
interface CardRepoTagProps {}

const CardRepoTag: React.FC<CardRepoTagProps> = (props) => {
  const classes = useStyles();
  return <div className={classes.cardRepoTag}>{props.children}</div>;
};

const CardRepoContent: React.FC<CardRepoContentProps> = ({ repo, topics }) => {
  const classes = useStyles();
  console.log("CardContentTopics", topics);
  return (
    <div className={classes.cardRepoContent}>
      <Typography variant="h6" style={{ color: "#0366D6" }}>
        {repo?.name}
      </Typography>
      <p>{repo?.description}</p>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", flexWrap: "wrap" }}>
        {topics && topics?.names?.map((tag: any) => <CardRepoTag key={tag}>{tag}</CardRepoTag>)}
      </div>
    </div>
  );
};
const CardRepoImage: React.FC<CardRepoImageProps> = (props) => {
  const classes = useStyles();
  return <div className={classes.cardRepoImage}></div>;
};

const CardRepo: React.FC<CardRepoProps> = ({ repo }) => {
  const classes = useStyles();
  const [topics, setTopics] = useState();
  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/topics`, {
        headers: {
          Accept: "application/vnd.github.mercy-preview+json",
          Authorization: "token ab343c3f8d044401a98ce84a9641432c2e00256e",
        },
      })
      .then((res) => setTopics(res.data));
  }, []);
  return (
    <div className={classes.cardRepoContainer}>
      <div className={classes.cardRepoBody}>
        <CardRepoContent repo={repo} topics={topics}></CardRepoContent>
        <CardRepoImage repo={repo}></CardRepoImage>
      </div>
      <div className={classes.cardRepoFooter}>
        {repo.language && (
          <div style={{ display: "flex", alignItems: "center", backgroundColor: "#fafafa", fontSize: 12, marginRight: 10 }}>
            <div style={{ marginRight: 4 }}>
              <Octicon icon={PrimitiveDot} size="small" />
            </div>
            {repo.language}
          </div>
        )}
        {repo?.license?.name && (
          <div style={{ display: "flex", alignItems: "center", backgroundColor: "#fafafa", fontSize: 12, marginRight: 10 }}>
            <div style={{ marginRight: 4 }}>
              <Octicon icon={Law} size="small" />
            </div>
            {repo.license.name}
          </div>
        )}
        {repo?.forks && (
          <div style={{ display: "flex", alignItems: "center", backgroundColor: "#fafafa", fontSize: 12, marginRight: 10 }}>
            <div style={{ marginRight: 4 }}>
              <Octicon icon={RepoForked} size="small" />
            </div>
            {repo.forks}
          </div>
        )}
        {repo?.stargazers_count && (
          <div style={{ display: "flex", alignItems: "center", backgroundColor: "#fafafa", fontSize: 12, marginRight: 10 }}>
            <div style={{ marginRight: 4 }}>
              <Octicon icon={Star} size="small" />
            </div>
            {repo.stargazers_count}
          </div>
        )}
        {repo.open_issues && (
          <div style={{ display: "flex", alignItems: "center", backgroundColor: "#fafafa", fontSize: 12, marginRight: 10 }}>
            <div style={{ marginRight: 4 }}>
              <Octicon icon={IssueOpened} size="small" />
            </div>
            {repo.open_issues}
          </div>
        )}
        {repo.open_issues &&
          <div style={{ display: "flex", alignItems: "center", backgroundColor: "#fafafa", fontSize: 12, marginRight: 10 }}>
            <div style={{ marginRight: 4 }}>
              <Octicon icon={GitPullRequest} size="small" />
            </div>
            {repo.open_issues}
          </div>
        }
        {/* <div style={{ display: "flex", alignItems: "center", backgroundColor: "#fafafa", fontSize: 12, marginRight: 10 }}>
          <BookOutlined className={classes.icon} />
          last updated
        </div> */}
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
    cardRepoContent: { flex: 3, marginRight: 10 },
    cardRepoImage: { height: "100%", flex: 1.25 },
    cardRepoFooter: { display: "flex", flexDirection: "row", height: 25, width: "100%" },
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
