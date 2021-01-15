import React,{useContext} from 'react'
import {AuthContext} from '../../auth/authContext'

export const LoginScreen = ({history}) => {

 const {user,dispatch} = useContext(AuthContext)
  const handleClick =()=>{
  dispatch({type:"LOGIN", payload:"McBourne"})
  
  history.replace("/")
  }

    return (
        <div className=" container mt-5" >
            <h1>Login Screen</h1>
            <hr/>
            <button 
            className=" btn btn-primary"
            onClick={handleClick}
            > Login </button>
        </div>
    )
}
