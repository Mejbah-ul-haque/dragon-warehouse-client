import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useItemDetails from "../../hooks/useItemDetails";

const Inventory = () => {
	const { id } = useParams();
	const [itemDetail, setItemDetail] = useState([]);
	const { name, img, description, quantity, price, supplierName } = itemDetail;
	


	useEffect(() => {
		fetch(`http://localhost:4000/service/${id}`)
			.then((res) => res.json())
			.then((data) => setItemDetail(data));
	}, [id]);
	
	const handleToDelivered = () => {
		setItemDetail({
				...itemDetail,
				quantity: quantity-1	
		})	
	}

	return (
		<>
			<div className="py-4 bg-slate-200 text-center">
				<h3 className="text-2xl font-bold">INVENTORY PAGE</h3>
				<div
					style={{ height: "1px" }}
					className="bg-dark w-50 d-block mx-auto"
				></div>
				<p className="text-xl my-4">product informations</p>
				<Link to="/">
					<button
						style={{
							margin: "5px 0",
							border: "2px solid #003366",
							borderRadius: "50px",
							backgroundColor: "#003366",
						}}
						className="text-center fw-bold py-2 px-3 text-white btn add-new-item-btn"
					>
						Manage Inventories
					</button>
				</Link>
			</div>
			<div className="container mt-5 mx-auto">
				<div className="hero ">
					<div className="hero-content flex-col lg:flex-row">
						<img src={img} className="max-w-sm xl:max-w-2xl rounded-lg" />
						<div>
							<div className="card-body">
								<h2 className="text-5xl capitalize text-center  font-bold border-y-2 mb-4 py-2 hover:text-red-500">
									{name}
								</h2>
								<p className="text-[#999999] text-center">{description}</p>
								<div className="card-actions text-center justify-between border-2 my-4 rounded-lg">
									<p className="text-3xl  font-bold p-1">${price}</p>
									<p className="text-lg border-x-2  bg-black text-white p-2">
										{supplierName}
									</p>
									<p className="text-xl font-bold  p-2">Qty: {quantity}</p>
								</div>
								<div className="card-actions text-center justify-between border-2 my-4 rounded-lg bg-slate-400 text-white">
									
									<p className="text-xl  p-2">ID: {id}</p>
								</div>

								<div className="card-actions mx-auto">
								
									<button onClick={handleToDelivered} className={`font-bold border-2 px-14 py-2 ${quantity > 0 ? " hover:bg-black hover:text-white" : "bg-red-600 text-white"}`}
									disabled={quantity === 0}
									>
											{quantity > 0 ? 'DELIVERED' : 'SOLD OUT'}
										
										</button>
								
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Inventory;
