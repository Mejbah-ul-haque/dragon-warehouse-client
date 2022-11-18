import React from "react";
import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({ item }) => {
	const { _id, name, img, description, price, supplierName, quantity } = item;
	// console.log(typeof quantity);

	return (
		<div className="my-4">
			<div className="card bg-base-100 my-xl h-[48rem] border border-[#dddddd] ">
				<figure>
					<img
						src={img}
						className="h-96 transform transition duration-1000 hover:scale-110"
					/>
				</figure>
				<div className="card-body">
					<h2 className="text-2xl text-center font-bold border-y-2 mb-4 py-2 hover:text-red-500">
						{name.slice(0,19)}
					</h2>
					<p className="text-[#999999] text-center">
						{description.slice(0, 170)}
					</p>
					<div className="card-actions text-center justify-between border-2 my-4 rounded-lg">
						<p className="text-2xl  font-bold p-1">${price}</p>
						<p className="text-lg border-x-2  bg-black text-white p-2">
							<small>{supplierName}</small>
						</p>
						<p className="text-xl  p-2">Qty: {quantity}</p>
					</div>

					<div className="card-actions mx-auto">
						<Link to={`/inventory/${item._id}`}>
							<button className="font-bold border-2 px-14 py-2 hover:bg-black hover:text-white">
								UPDATE
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Item;
