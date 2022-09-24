import axios from "axios";
import React from "react";
// import { toast } from "react-toastify";

const InventoryRow = ({ product, index }) => {
	const { name, quantity, price, img, _id } = product;
	
	const handleDeletingProduct = ()=>{
		axios.delete(`/service/${_id}`);
	}

	return (
		<tr className="">
			<th className="bg-red-200 text-center border-2 border-white rounded-lg">{index + 1}</th>
			<td>
				<div className="avatar">
					<div className="w-16 rounded">
						<img src={img} alt={name} />
					</div>
				</div>
			</td>
			<td>{name}</td>
			<td>{quantity}</td>
			<td>{price}</td>
			<td>
				<label onClick={handleDeletingProduct} htmlFor="delete-confirm-modal" className="btn btn-error btn-outline btn-xs">
					Delete
				</label>
				
			</td>
		</tr>
	);
};

export default InventoryRow;
