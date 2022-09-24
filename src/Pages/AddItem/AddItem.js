import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const AddItem = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		axios.post("/service", data).then(res=>console.log(res.data))
		
		// const url = `http://localhost:4000/service`;
		// fetch(url, {
		// 	method: "POST",
		// 	headers: {
		// 		"content-type": "application/json",
		// 	},
		// 	body: JSON.stringify(data),
		// })
		// 	.then((res) => res.json())
		// 	.then((result) => {
		// 		console.log(result);
		// 	});
	};

	return (
		<div className="flex h-screen justify-center items-center">
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="text-center text-2xl font-bold">Please add a Item</h2>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								placeholder="Name"
								className="input input-bordered w-full max-w-xs"
								{...register("name", { required: true, maxLength: 20 })}
							/>
						</div>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Description</span>
							</label>
							<textarea
								type="text"
								placeholder="Description"
								className="input input-bordered w-full max-w-xs"
								{...register("description")}
							/>
						</div>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Price</span>
							</label>
							<input
								type="number"
								placeholder="Price"
								className="input input-bordered w-full max-w-xs"
								{...register("price")}
							/>
						</div>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Qty</span>
							</label>
							<input
								type="number"
								placeholder="Quantity"
								className="input input-bordered w-full max-w-xs"
								{...register("quantity")}
							/>
						</div>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Photo URL</span>
							</label>
							<input
								type="text"
								placeholder="Photo URL"
								className="input input-bordered w-full max-w-xs"
								{...register("img")}
							/>
						</div>

						<input
							className="btn w-full max-w-xs mt-5"
							type="submit"
							value="Add Item"
						/>
					</form>		
  			</div>
			</div>
		</div>
	);
};

export default AddItem;
