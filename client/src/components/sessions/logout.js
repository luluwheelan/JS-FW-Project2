import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function Logout() {
  useEffect(() => {
      Axios.post("/api/logout");
  }, []); //if put a value in [], this will a value than a event listen to
  return <Redirect to="/" />;
}

export default Logout;
