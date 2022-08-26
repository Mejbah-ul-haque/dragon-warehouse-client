import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Special1 from '../Special1/Special1';
import Special2 from '../Special2/Special2';
import Special3 from '../Special3/Special3';
import Special4 from '../Special4/Special4';

const Home = () => {
  return (
    <div className="bg-[#ededed]">
    <Banner></Banner>
    <Items></Items>
    <Special1></Special1>
    <Special2></Special2>
    <Special3></Special3>
    <Special4></Special4>
    
    </div>
      
 
  );
};

export default Home;