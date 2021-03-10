import {makeAutoObservable, action, runInAction} from "mobx";
import userAPI from "../api/user.api";


class UserStore {
  user = null;
  isLogin = false;
  darkTheme = false;
  loading = true;


  constructor() {
    makeAutoObservable(this);
  }


  async verifySession() {
    if (!this.loading) {
      runInAction(() => {
        this.loading = true;
      });
    }

    const [err, response] = await userAPI.verifySession().toArray();

    if (!err) {
      runInAction(() => {
        this.user = response;
        this.isLogin = true;
        this.loading = false;
      });

      return true;
    }

    this.removeUser();

    return false;
  };

  removeUser() {
    this.loading = false;
    this.isLogin = false;
  };


  async setTheme() {
    // this.darkTheme = !this.darkTheme;
    // localStorage.setItem("darkTheme", JSON.stringify(this.darkTheme));
  };

  async getTheme() {
    // const dark = localStorage.getItem("darkTheme");
    // runInAction(() => {
    //   if (JSON.parse(dark)) {
    //     this.darkTheme = dark;
    //   } else {
    //     this.darkTheme = false;
    //   }
    // });
  };
}

export default new UserStore();
