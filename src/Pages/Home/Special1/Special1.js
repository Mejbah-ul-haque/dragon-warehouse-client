import React from 'react';
import extra1 from '../../../assets/Extra/extra1.jpg';
import extra2 from '../../../assets/Extra/extra2.jpg';
import item13 from '../../../assets/Items/item13.jpg';
import item18 from '../../../assets/Items/item18.jpg';
import item19 from '../../../assets/Items/item19.jpg';
import item20 from '../../../assets/Items/item20.jpg';

const Special1 = () => {
    return (
        <div className='container mx-auto mt-24'>
            

            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2">
                    <img className='w-full border border-[#e6e6e6] opacity-90 hover:opacity-100' src={extra1} alt="" />
                </div>
                <div className="">
                    <img className='w-full border border-[#e6e6e6] opacity-90 hover:opacity-100' src={item13} alt="" />
                </div>
                <div className="">
                    <img className='w-full border border-[#e6e6e6] opacity-90 hover:opacity-100' src={item18} alt="" />
                </div>
                <div className="">
                    <img className='w-full border border-[#e6e6e6] opacity-90 hover:opacity-100' src={item19} alt="" />
                </div>
                <div className="">
                    <img className='w-full border border-[#e6e6e6] opacity-90 hover:opacity-100' src={item20} alt="" />
                </div>
                <div className="col-span-2">
                    <img className='w-full border border-[#e6e6e6] opacity-90 hover:opacity-100' src={extra2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Special1;