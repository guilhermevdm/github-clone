import React from "react";
import { Typography, makeStyles, Theme, createStyles } from "@material-ui/core";
import { useStoreState } from "../../store";
import { AccountTreeOutlined, BookOutlined } from "@material-ui/icons";
import Octicon, { RepoForked, PrimitiveDot, Law, Star, IssueOpened, GitPullRequest } from "@primer/octicons-react";

interface PinnedItemsProps {}
interface PinnedCardProps {
  language: string;
  forks: string;
  stargazers_count: number;
  description: string;
}

const PinnedCard: React.FC<PinnedCardProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.pinnedCardContainer}>
      <div className={classes.pinnedCardContent}>
        <div className={classes.pinnedCardHeader}>{props.children}</div>
        <div className={classes.pinnedCardBody}>{props.description}</div>
      </div>
      <div className={classes.pinnedCardFooter}>
        <div className={classes.pinnedCardFooterLanguage}>
          <Octicon size="small" icon={PrimitiveDot} />
          <div style={{ marginRight: 4 }}></div>
          {props.language}
        </div>
        <div className={classes.pinnedCardFooterStarGazers}>
          <Octicon size="small" icon={Star} />
          <div style={{ marginRight: 4 }}></div>
          {props.stargazers_count}
        </div>
        <div className={classes.pinnedCardFooterMembers}>
          <Octicon size="small" icon={GitPullRequest} />
          <div style={{ marginRight: 4 }}></div>
          {props.forks}
        </div>
      </div>
    </div>
  );
};

const PinnedItems = (props: PinnedItemsProps) => {
  const repos = useStoreState((state) => state.gitHub.repos);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.header}>Pinned Repositories</Typography>
      <div className={classes.body}>
        {repos && (
          <PinnedCard
            description={repos[0]?.description}
            language={repos[0]?.language}
            forks={repos[0]?.forks}
            stargazers_count={repos[0]?.stargazers_count}
          >
            <BookOutlined className={classes.icon} /> {repos[0]?.name}
          </PinnedCard>
        )}
        {repos && (
          <PinnedCard
            description={repos[1]?.description}
            language={repos[1]?.language}
            forks={repos[1]?.forks}
            stargazers_count={repos[1]?.stargazers_count}
          >
            <BookOutlined className={classes.icon} /> {repos[1]?.name}
          </PinnedCard>
        )}
        {repos && (
          <PinnedCard
            description={repos[2]?.description}
            language={repos[2]?.language}
            forks={repos[2]?.forks}
            stargazers_count={repos[2]?.stargazers_count}
          >
            <BookOutlined className={classes.icon} /> {repos[2]?.name}
          </PinnedCard>
        )}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      padding: "0px 23% 0px 23%",
      height: 200,
      backgroundColor: "#FAFAFA",
      flexDirection: "column",
      marginBottom: 25,
    },
    header: { fontSize: 16, marginBottom: 20 },

    body: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      height: "100%",
    },
    pinnedCardContainer: {
      display: "flex",
      flexDirection: "column",
      padding: 15,
      borderRadius: 2,
      border: "1px solid #e5e8eb",
      backgroundColor: "#fAfAfA",
      justifyContent: "space-between",
      margin: '0px 0border: "1px solid #e5e8eb",px 0px 0px',
      width: 320,
    },
    pinnedCardContent: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      flex: 2,
      // backgroundColor: "gray",
    },
    pinnedCardHeader: {
      display: "flex",
      alignItems: "center",
      color: "#1A66D6",
      fontWeight: 600,
      marginBottom: 10
    },
    pinnedCardBody: {
      width: "100%",
    },
    pinnedCardFooter: { display: "flex", flexDirection: "row", flex: 1, alignItems: "flex-end" },
    pinnedCardFooterLanguage: {
      display: "flex",
      flexDirection: "row",
      margin: "0px 16px 0px 0px",
      alignItems: "center",
      fontSize: 12,
    },
    languageContainer: {
      height: 12,
      width: 12,
      borderRadius: 6,
      backgroundColor: "#B07218",
      marginRight: 3,
    },
    pinnedCardFooterStarGazers: {
      display: "flex",
      flexDirection: "row",
      margin: "0px 16px 0px 0px",
      alignItems: "center",
      fontSize: 12,
    },
    pinnedCardFooterMembers: {
      display: "flex",
      flexDirection: "row",
      margin: "0px 16px 0px 0px",
      alignItems: "center",
      fontSize: 12,
    },
    icon: {
      color: "#586068",
      height: 16,
      width: 16,
    },
  })
);

export default PinnedItems;
