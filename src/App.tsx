import React, { useEffect } from "react";
import "./App.css";
import { Header, NavBar, PinnedItems, ListRepos } from "./components";
import { Switch, Route, Redirect, useParams } from "react-router-dom";
import { useStoreActions, useStoreState } from "./store";

function InnerApp() {
  const loadGitHubUserInfo = useStoreActions((actions) => actions.gitHub.loadGitHubUserInfo);
  const gitHubState = useStoreState((state) => state.gitHub);
  const { login } = useParams<{ login: string }>();

  useEffect(() => {
    loadGitHubUserInfo(login);
  }, [loadGitHubUserInfo, login]);
  console.log(gitHubState);
  return (
    <div style={{ height: 900 }}>
      <NavBar></NavBar>
      <Header></Header>
      {/* <PinnedItems></PinnedItems> */}
      <ListRepos></ListRepos>
    </div>
  );
}

function App() {
  return (
    <Switch>
      <Route path="/:login">
        <InnerApp />
      </Route>
      <Route path="/" exact>
        <Redirect to="/camunda" />
      </Route>
    </Switch>
  );
}

export default App;
