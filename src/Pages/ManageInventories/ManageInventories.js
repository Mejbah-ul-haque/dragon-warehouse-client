import axios from "axios";
import React, { useEffect, useState } from "react";
import useItems from "../../hooks/useItems";
import InventoryRow from "./inventoryRow";

const ManageInventories = () => {
	// const [deletingProduct, setDeletingProduct] = useState(null);
	
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		axios.get("/service").then(res=> {
			setLoading(false);
			setItems(res.data)
		});
			// fetch('http://localhost:4000/service')
			// 		.then(res => res.json())
			// 		.then(data => setItems(data));
	}, [loading]);

	// return [items, setItems]
	

	// const [items] = useItems([]);

	return (
		<div className="bg-red-50 ">
			<div className="container mx-auto ">
				<h2 className="text-2xl text-center py-10">
					Manage Products : {items?.length}
				</h2>
				<div className="overflow-x-auto shadow-2xl">
					<table className="table w-full ">
						<thead >
							<tr className="bg-green">
								<th className="bg-red-500">No</th>
								<th>Avatar</th>
								<th>Name</th>
								<th>Quantity</th>
								<th>Price/ps</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{items?.map((product, index) => (
								<InventoryRow
									key={product._id}
									index={index}
									product={product}
									setLoading={setLoading}
									
								></InventoryRow>
							))}
						</tbody>
					</table>
				</div>
				{
					// deletingProduct && <DeleteConfirmModal deletingProduct={deletingProduct} refetch={refetch} setDeletingProduct={setDeletingProduct}></DeleteConfirmModal>
				}
			</div>
		</div>
	);
};

export default ManageInventories;
