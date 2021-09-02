import React, { createContext, useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';



const Profile = () => {
  const { user, isAuthenticated } = useAuth0();


  useEffect(() => {

    if (isAuthenticated) {

      const sendingUser = {
        name: user.name,
        sub: user.sub
      };

      axios.post("http://localhost:5000/api/user/login", sendingUser)
        .then((response) => {
          console.log(response);
        })
    }
  }, [isAuthenticated])


  console.log("user", user)
  return (
    isAuthenticated && (

      <h5>{user.name}</h5>

    )




  )
}

export default Profile
