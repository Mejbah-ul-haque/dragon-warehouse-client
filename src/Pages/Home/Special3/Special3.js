import React from "react";
import item16 from "../../../assets/Items/item16.jpg"

const Special3 = () => {
	return (
		<div class="hero">
			<div class="hero-content flex-col lg:flex-row-reverse">
				<img
					src={item16}
					class="w-1/2 rounded-lg shadow-2xl"
				/>
				<div>
					<h1 class="text-5xl font-bold">Box Office News!</h1>
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
