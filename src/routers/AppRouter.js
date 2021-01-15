import React,{useContext} from "react";
import { BrowserRouter as Router, Switch} from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { LoginScreen } from "../containers/login/LoginScreen";
import {DashBoardRoutes} from './DashBoardRoutes'
import { AuthContext } from "../auth/authContext";
import { PublicRoute } from "./PublicRoute";




export const AppRouter = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <PublicRoute  isAuthenticated={user.logged} exact path="/login" component={LoginScreen}/>
            <PrivateRoute isAuthenticated={user.logged}  path="/" component={DashBoardRoutes}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
