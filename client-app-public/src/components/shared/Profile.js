import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";



const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && ( 
     
        <h5>{user.name}</h5>
        
      
    )


   

  )
}

export default Profile
