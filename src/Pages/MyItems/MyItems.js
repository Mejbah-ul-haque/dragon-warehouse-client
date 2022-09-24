import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItemsDetail from './MyItemsDetail';

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [service, setService] =useState([]);
  
  useEffect(()=>{
    axios.get("/service", {headers:{email:user.email}}).then(res=>setService(res.data));
  }, [])
  return (
    <div className='container mx-auto'>
      <h2>My Items page{service.length}</h2>
      
      <ul>
				<li className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
					{service.map((service) => (
						<MyItemsDetail key={service._id} service={service}></MyItemsDetail>
					))}
				</li>
			</ul>
    </div>
  );
};

export default MyItems;