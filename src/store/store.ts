import { storeModel, StoreModel } from "../models";
import { createStore, createTypedHooks } from "easy-peasy";

const store = createStore(storeModel);

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export default store;
