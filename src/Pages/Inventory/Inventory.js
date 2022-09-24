import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useItemDetails from "../../hooks/useItemDetails";
import axios from "axios";
// import Loading from "../Shared/Loading/Loading";

const Inventory = () => {
	const { id } = useParams();
	const [itemDetail, setItemDetail] = useState({});
	const [loading, setLoading] = useState(true);
	const { name, img, description, quantity, price, supplierName } = itemDetail;
	
	

	useEffect(() => {
		axios.get(`/service/${id}`).then((res) => {
			setItemDetail(res.data)
			setLoading(false)
		});
		// fetch(`http://localhost:4000/service/${id}`)
			// .then((res) => res.json())
			// .then((data) => setItemDetail(data));
	}, [id, loading]);
	
	
	const handleToDelivered = () => {
		// setItemDetail({
		// 		...itemDetail,
		// 		quantity: quantity-1	
		// })	
		axios.put(`/service/${id}`, {quantity : itemDetail.quantity-1}).then(res => setLoading(true));
	}
	const handleToRestock = (event) => {
		event.preventDefault();
		// const { quantity, ...rest } = itemDetail;
		// const previousQuantity = quantity;
		const inputFieldQuantity = parseInt(event.target.inputQuantity.value);
		
		axios.put(`/service/${id}`, {quantity : itemDetail.quantity+inputFieldQuantity}).then(res => setLoading(true));
		
		// setItemDetail({
		// 		...itemDetail,
		// 		quantity: quantity + inputFieldQuantity
		// })
		
		// sent data to the server
		// const url = `hhttp://localhost:4000/service/${id}`;
		// fetch(url, {
		// 		method: 'PUT',
		// 		headers: {
		// 				'content-type': 'application/json'
		// 		},
		// 		body: JSON.stringify({itemDetail})
		// })
		// 		.then(res => res.json())
		// 		.then(data => {
		// 				console.log('success', data);
		// 				event.target.reset();
		// 		}).catch(err => {
		// 				console.log("Error Reading data " + err);
		// 		});
		
	}

	
	// if (loading) {
  //   return <Loading></Loading>;
  // }
	return (
		<>
			<div className="py-4 bg-slate-200 text-center">
				<h3 className="text-2xl font-bold">INVENTORY PAGE</h3>
				<div
					style={{ height: "1px" }}
					className="bg-dark w-50 d-block mx-auto"
				></div>
				<p className="text-xl my-4">product informations</p>
				<Link to="/inventories">
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

								<div className="card-actions mx-auto justify-between">
									
										<form className='text-center flex border-2 rounded-lg my-3' onSubmit={handleToRestock}>
                        <input className='font-bold px-16 py-3 uppercase rounded-lg hover:bg-black  hover:text-white' type="submit" value='Restock' />
                        <input className='text-center font-bold border-l-2  py-3' type="number" name='inputQuantity' required />
                    </form>
								
									<button onClick={handleToDelivered} className={`font-bold border-2 px-14 py-3 mt-3 rounded-lg ${quantity > 0 ? " hover:bg-black hover:text-white" : "bg-red-600 text-white"}`}
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
