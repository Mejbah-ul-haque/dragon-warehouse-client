import React from "react";
import Item from "../Item/Item";
import { useNavigate } from "react-router-dom";
import useItems from "../../../hooks/useItems";

const Items = () => {
	const navigate = useNavigate();
	const [items] = useItems([]);

	const navigateToManageInventories = (id) => {
		navigate("/inventories");
	};

	return (
		<div id="items" className="container mx-auto">
			<p
				
				className="flex justify-center"
			>
				<button
					onClick={navigateToManageInventories}
					className="btn bg-[#003366] rounded-full text-xl font-bold text-uppercase mb-8 pb-10 p-5 mt-[-50px] z-10 border-2 border-[#e6e6e6]"
				>
					Manage Inventories
				</button>
			</p>
			<ul>
				<li className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
					{items.slice(0, 6).map((item) => (
						<Item key={item._id} item={item}></Item>
					))}
				</li>
			</ul>
		</div>
	);
};

export default Items;
