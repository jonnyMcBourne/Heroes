import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../auth/authContext";



export const Navbar = () => {
const {user,dispatch} = useContext(AuthContext)
const {replace}=useHistory()


const handleLogOut=()=>{
dispatch({type:"LOGOUT"})
localStorage.setItem('user',JSON.stringify({logged: false}))
replace("/login")

}


  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/find"
          >
            Search 
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
     
        <ul className="navbar-nav ml-auto">
       { user &&(<> <p
      className=" nav-item nav-link text-info"
      > Welcome Mr. {user.user}</p></>)}
          <button
          onClick={handleLogOut }
            className="btn btn-outline-info nav-item "
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
