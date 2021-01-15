import React, { useEffect, useReducer } from "react";
import { AppRouter } from "./routers/AppRouter";
//

import { authReducer } from "../src/auth/authReducer";
import { AuthContext } from "./auth/authContext";
function App() {
  const init = () => {
    return JSON.parse(localStorage.getItem("user")) || { logged: false,user:"" };
  };
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
   
  }, []);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
