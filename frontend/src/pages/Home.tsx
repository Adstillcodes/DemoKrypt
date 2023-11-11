import React from "react";
import { RouteProps } from "react-router";
import Features from "../components/Home/Features";
import Landing from "../components/Home/Landing";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
const Home = (props: RouteProps): JSX.Element => {
  return (
    <>
      <Landing />
      <Features />
    </>
  );
};

export default Home;
