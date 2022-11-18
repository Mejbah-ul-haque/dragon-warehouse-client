import React from 'react';
import extra1 from '../../../assets/Extra/extra1.jpg';
import extra2 from '../../../assets/Extra/extra2.jpg';
import item13 from '../../../assets/Items/item13.jpg';
import item18 from '../../../assets/Items/item18.jpg';
import item19 from '../../../assets/Items/item19.jpg';
import item20 from '../../../assets/Items/item20.jpg';
import "./Special1.css";

const Special1 = () => {
    return (
        <div className='container mx-auto mt-24'>
            

            <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
                <div className="col-span-2 ">
                    <img className='card-shadow w-full ' src={extra1} alt="" />
                </div>
                <div className=" transform transition duration-1000 ">
                    <img className='card-shadow w-full border border-[#dddddd]' src={item13} alt="" />
                </div>
                <div className="transform transition duration-1000">
                    <img className='card-shadow w-full border border-[#dddddd] ' src={item18} alt="" />
                </div>
                <div className="transform transition duration-1000">
                    <img className='card-shadow w-full border border-[#dddddd] ' src={item19} alt="" />
                </div>
                <div className="transform transition duration-1000">
                    <img className='card-shadow w-full border border-[#dddddd]' src={item20} alt="" />
                </div>
                <div className="col-span-2">
                    <img className='card-shadow w-full border border-[#dddddd] ' src={extra2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Special1;