import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    const { _id, name, img, description, price, supplierName, quantity } = item;
    // console.log(typeof quantity);


    return (
        <div className="my-4 ">
			<div className="card bg-base-100 my-xl h-[48rem] border border-[#dddddd]">
				<figure>
					<img src={img} className="h-96 transform transition duration-1000 hover:scale-110" />
				</figure>
				<div className="card-body">
					<h2 className="text-2xl text-center font-bold hover:text-red-500">
						{name}
					</h2>
					<p className="text-[#999999]">{description.slice(0, 200)}</p>
					<p className="text-3xl font-bold">${price}</p>
					<div className="card-actions justify-between">
						<div className="badge badge-outline p-4 hover:bg-black hover:text-white">Sup: {supplierName}</div>
						<div className="badge badge-outline p-4 hover:bg-black hover:text-white">Qty : {quantity}</div>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Item;