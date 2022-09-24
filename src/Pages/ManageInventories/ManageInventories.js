import React, { useState } from "react";
import useItems from "../../hooks/useItems";
import InventoryRow from "./inventoryRow";

const ManageInventories = () => {
  // const [deletingProduct, setDeletingProduct] = useState(null);
  
	const [items] = useItems([]);

	return (
		<div className="container mx-auto">
			<h2 className="text-2xl text-center my-10">Manage Products : {items?.length}</h2>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
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
						{
              items?.map((product, index) =><InventoryRow key={product._id} index={index} product={product}></InventoryRow>)
            }
					</tbody>
				</table>
			</div>
      {
        // deletingProduct && <DeleteConfirmModal deletingProduct={deletingProduct} refetch={refetch} setDeletingProduct={setDeletingProduct}></DeleteConfirmModal>
      }
		</div>
	);
};

export default ManageInventories;
