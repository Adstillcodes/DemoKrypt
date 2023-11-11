import React, { useEffect, useState } from "react";
import { RouteProps } from "react-router";
import axios from "../../axios";
import StartPage from "./Start";
import PollsPage from "./Polls";
import ResultPage from "./Result";
import Random12DigitGenerator from "./Random12DigitGenerator";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
const Home = (props: RouteProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [status, setStatus] = useState<"not-started" | "running" | "finished" | "not-started">(
    "not-started"
  );

  useEffect(() => {
    setLoading(true);
    axios
      .get("/polls/status")
      .then((res) => {
        setStatus(res.data.status);
        setLoading(false);
      })
      .catch((error) => console.log({ error }));
  }, []);

  if (loading) return <div></div>;

  if (status === "finished") return <ResultPage />;
  if (status === "running") return <PollsPage />;
  //if (status === "finished") return <Random12DigitGenerator />;

  
      




  return <StartPage />;
};


export default Home;
