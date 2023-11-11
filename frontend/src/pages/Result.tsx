import React, { useEffect, useState } from "react";
import axios from "../axios";
import Chart from "../components/Polls/Chart";
import Panel from "../components/Polls/Panel";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
const Result = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ name: "", description: "", votes: {} });

  useEffect(() => {
    axios.get("/polls/").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div></div>;

  return (
    <Panel name={data.name} description={data.description}>
      <Chart votes={data.votes} />
    </Panel>
  );
};

export default Result;
