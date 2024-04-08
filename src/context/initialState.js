import { fetchUser } from "../utilis/fetchLocalStorageData";

const unserInfo = fetchUser();

export const initialState = {
  user: unserInfo,
};
