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

  //actions
  setLogin: Action<GitHubModel, string>;
  setName: Action<GitHubModel, string>;
  setAvatarUrl: Action<GitHubModel, string>;
  setLocation: Action<GitHubModel, string>;
  setEmail: Action<GitHubModel, string>;
  setPublicRepos: Action<GitHubModel, number>;
  setBlog: Action<GitHubModel, string>;
  setProperty: Action<
    GitHubModel,
    { property: "login" | "name" | "avatar_url" | "location" | "email" | "public_repos" | "blog"; value: string | number }
  >;
  loadGitHubUserInfo: Thunk<GitHubModel, string>;
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
  setProperty: action((state, payload) => {
    //@ts-ignore
    state[payload.property] = payload.value;
  }),

  //thunks
  loadGitHubUserInfo: thunk(async (actions, payload) => {
    const { setAvatarUrl, setBlog, setEmail, setLocation, setLogin, setName, setPublicRepos } = actions;
    const response = await axios.get(`https://api.github.com/users/${payload}`);
    const { name, login, avatar_url, location, blog, email, public_repos } = response.data;

    setLogin(login);
    setName(name);
    setAvatarUrl(avatar_url);
    setBlog(blog);
    setPublicRepos(public_repos);
    setEmail(email);
    setLocation(location);
  }),
};

export default gitHubModel;
