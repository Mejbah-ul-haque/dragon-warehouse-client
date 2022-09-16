import React from "react";
import item16 from "../../../assets/Items/item16.jpg"

const Special3 = () => {
	return (
		<div class="hero text-center md:text-left">
			<div class="hero-content flex-col md:flex-row-reverse ">
				<img
					src={item16}
					class="w-full md:w-1/2 rounded-lg shadow-2xl"
				/>
				<div>
					<h1 class="text-3xl font-bold md:text-4xl">Box Office News!</h1>
					<p class="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<button class="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default Special3;
