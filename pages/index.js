import React from "react";

import asyncComponent from "../utils/asyncComponent";

const Home = asyncComponent(() => import('../components/home'));


export default function HomePage() {
  return (
    <Home/>
  )
}
