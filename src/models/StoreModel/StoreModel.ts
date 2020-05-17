import gitHubModel, { GitHubModel } from "../GitHubModel/GitHubModel";

export interface StoreModel {
  gitHub: GitHubModel;
}

const storeModel: StoreModel = {
  gitHub: gitHubModel,
};

export default storeModel;
