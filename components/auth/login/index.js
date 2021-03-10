import React, {useEffect} from "react";
import Header from "./header";

const Login = () => {

  useEffect(() => {
    setTimeout(() => {
      console.log("AT")
    }, 20000)

  }, [])

  return (
    <Header/>

  )
}

export default Login
