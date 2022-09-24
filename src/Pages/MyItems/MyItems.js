import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [service, setService] =useState([]);
  
  useEffect(()=>{
    axios.get("/service", {headers:{email:user.email}}).then(res=>setService(res.data));
  }, [])
  return (
    <div>
      <h2>My Items page{service.length}</h2>
    </div>
  );
};

export default MyItems;