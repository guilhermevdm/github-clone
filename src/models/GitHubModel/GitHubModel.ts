import { action, Action } from "easy-peasy";

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
}

const gitHubModel: GitHubModel = {
  // state
  login: "camunda",
  name: "Camunda BPM",
  avatar_url: "https://avatars3.githubusercontent.com/u/2443838?v=4",
  location: "Berlin",
  email: "info@camunda",
  public_repos: 115,
  blog: "http://www.camunda.org",

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
};

export default gitHubModel;
