import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";

const Logout = () => {
   const history = useHistory();

   async function logout() {
      // alert(v.username + v.password);

      const token = localStorage.getItem("authToken");

      await axios
         .post(
            "http://127.0.0.1:8000/auth/logout/",
            {},
            {
               headers: {
                  Authorization: `Token ${token}`,
               },
            }
         )
         .then((res) => {
            localStorage.clear();
            history.push("/login");
         })
         .catch((error) => {
            alert(error);
         });
   }

   useEffect(() => {
      logout();
   }, []);

   return <></>;
};
export default Logout;
