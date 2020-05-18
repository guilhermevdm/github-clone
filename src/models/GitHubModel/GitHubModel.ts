import { action, Action, Thunk, thunk } from "easy-peasy";
import axios from "axios";
export interface GitHubModel {
  //state
  login?: string;
  name?: string;
  avatar_url?: string;
  location?: string;
  email?: string;
  public_repos?: number;
  blog?: string;
  type?: string;
  repos?: any[];
  userData?: any;

  //actions
  setLogin: Action<GitHubModel, string>;
  setName: Action<GitHubModel, string>;
  setAvatarUrl: Action<GitHubModel, string>;
  setLocation: Action<GitHubModel, string>;
  setEmail: Action<GitHubModel, string>;
  setPublicRepos: Action<GitHubModel, number>;
  setBlog: Action<GitHubModel, string>;
  setType: Action<GitHubModel, string>;
  setUserData: Action<GitHubModel, any>;
  setProperty: Action<
    GitHubModel,
    { property: "login" | "name" | "avatar_url" | "location" | "email" | "public_repos" | "blog"; value: string | number }
  >;
  setRepos: Action<GitHubModel, any[]>;
  //thunks
  loadGitHubUserInfo: Thunk<GitHubModel, string>;
  loadGitHubUserRepos: Thunk<GitHubModel, { login: string; type: string }>;
}

const gitHubModel: GitHubModel = {
  // state
  login: "",
  name: "",
  avatar_url: "",
  location: "",
  email: "",
  public_repos: 0,
  blog: "",
  repos: [],

  setLogin: action((state, payload) => {
    state.login = payload;
  }),
  setName: action((state, payload) => {
    state.name = payload;
  }),
  setAvatarUrl: action((state, payload) => {
    state.avatar_url = payload;
  }),
  setLocation: action((state, payload) => {
    state.location = payload;
  }),
  setEmail: action((state, payload) => {
    state.email = payload;
  }),
  setPublicRepos: action((state, payload) => {
    state.public_repos = payload;
  }),
  setBlog: action((state, payload) => {
    state.blog = payload;
  }),
  setType: action((state, payload) => {
    state.type = payload;
  }),
  setProperty: action((state, payload) => {
    //@ts-ignore
    state[payload.property] = payload.value;
  }),
  setRepos: action((state, payload) => {
    state.repos = payload;
  }),
  setUserData: action((state, payload) => {
    state.userData = payload;
  }),

  //thunks
  loadGitHubUserRepos: thunk(async (actions, payload) => {
    const { setRepos } = actions;
    const { login, type } = payload;
    const response = await axios.get(`https://api.github.com/${type === "Organization" ? "orgs" : "users"}/${login}/repos`, {
      headers: {
        Authorization: "token e2d3546389a0c98495a0a0b0fcee4ba431f2757b",
      },
      params: {
        sort: "updated",
      },
    });
    console.log("response", response);
    setRepos(response.data);
  }),
  loadGitHubUserInfo: thunk(async (actions, payload) => {
    const { setAvatarUrl, setBlog, setEmail, setLocation, setLogin, setName, setPublicRepos, setType } = actions;
    const response = await axios.get(`https://api.github.com/users/${payload}`, {
      headers: {
        Authorization: "token e2d3546389a0c98495a0a0b0fcee4ba431f2757b",
      },
    });
    const { name, login, avatar_url, location, blog, email, public_repos, type } = response.data;

    setLogin(login);
    setName(name);
    setAvatarUrl(avatar_url);
    setBlog(blog);
    setPublicRepos(public_repos);
    setEmail(email);
    setLocation(location);
    setType(type);
    actions.setUserData(response.data);

    actions.loadGitHubUserRepos({ login, type });
  }),
};

export default gitHubModel;
