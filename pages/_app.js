import React from "react";
import '../styles/globals.css'

//TODO: DON'T REMOVE
import "../core/extensions/promise";
import interceptors from "../core/interceptors";
//TODO: DON'T REMOVE END


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
