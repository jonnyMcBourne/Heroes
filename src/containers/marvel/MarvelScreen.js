import React, { useContext, useEffect } from "react";
import { HeroList } from "../../components/HeroList";
//context
import { AuthContext } from "../../auth/authContext";

export const MarvelScreen = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user.user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user.user]);

  return (
    <div>
      <h1>Marvel</h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};
