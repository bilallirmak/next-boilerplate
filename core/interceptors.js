import http from "./base.api";
import UserStore from "../store/user.store";

const responseInterceptors = http._getHttpClient().interceptors.response;

responseInterceptors.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const errorObj = {
      status: error.response.status,
      statusText: error.response.statusText,
      message: error.message,
      data: error.response.data,
      error: null,
    };

    // Interceptor Helpers
    const errorMessage = ErrorFormatter(errorObj);

    // if (errorMessage === "wrong_token") {
    //   UserStore.logout();
    // } else {
    //   message.error(i18n.t(errorMessage));
    // }

    errorObj.error = errorMessage;

    // // Error Interceptors
    // Authentication(errorObj);

    return Promise.reject(errorObj);
  }
);

const ErrorFormatter = (error) => {
  let errorMessage = "";

  const errorData = error.data.message;

  if (errorData) {
    errorMessage = errorData;
  }

  return errorMessage;
};

// const Authentication = ({error}) => {
//   if (error === 'ERROR.USER_NOT_FOUND') {
//     RootNavigation.goBack();
//     UserStore.verifySession().then();
//     SnackbarStore.closeSnack();
//     SnackbarStore.openSnack('Tekrar Giriş Yapmanız Gerekiyor');
//   }
// };

const interceptors = responseInterceptors;
export default interceptors;
