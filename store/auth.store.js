import { action, makeAutoObservable } from "mobx";
import authAPI from "../api/auth.api";
import StorageService from "../utils/session";

class AuthStore {
  accessToken = null;

  constructor() {
    makeAutoObservable(this);
  }

  async login (values)  {
    const [err, response] = await authAPI.login(values).toArray();

    if (!err && response) {
      localStorage.setItem("token", response);
      this.accessToken = response;
    }

    return !err;
  };

   async register (values){
    const [err, response] = await authAPI.register(values).toArray();

    if (!err && response) {
      localStorage.setItem("token", response);
      this.accessToken = response;
    }

    return !err;
  };

  async logout () {
    await localStorage.removeItem("token");
  };

}

export default new AuthStore();
