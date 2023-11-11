import React from "react";
import { useParams } from "react-router";
import axios from "../../axios";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
const Verify = () => {
  const { id, name } = useParams();

  const verifyUser = () => {
    axios
      .post("/users/verify", { userId: id })
      .then((res) => console.log({ res }))
      .catch((error) => console.log({ error }));
  };

  const deleteUser = () => {
    axios
      .delete(`/users/delete/${id}`)
      .then((res) => console.log({ res }))
      .catch((error) => console.log({ error }));
  };

  return (
    <div>
      <button onClick={verifyUser} className="button-primary">
        verify {name}
      </button>

      <button onClick={deleteUser} className="button-black">
        delete {name}
      </button>
    </div>
  );
};

export default Verify;
