import React from "react";

const Banner = () => {
	return (
		<div className="bg-[lightgray] py-10">
			<div class="container mx-auto carousel w-full">
				<div id="slide1" class="carousel-item relative w-full">
					<div class="hero bg-slate-400 mx-20">
						<div class="hero-content flex-col lg:flex-row-reverse">
							<img
								src="https://placeimg.com/260/400/arch"
								class="max-w-xl rounded-lg shadow-2xl"
							/>
							<div>
								<h1 class="text-5xl font-bold">Box Office News!</h1>
								<p class="py-6">
									Provident cupiditate voluptatem et in. Quaerat fugiat ut
									assumenda excepturi exercitationem quasi. In deleniti eaque
									aut repudiandae et a id nisi.
								</p>
								<button class="btn btn-warning shadow-2xl rounded-full">Get Started</button>
							</div>
						</div>
					</div>
					<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide4" class="btn btn-outline btn-circle">
							❮
						</a>
						<a href="#slide2" class="btn btn-outline btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide2" class="carousel-item relative w-full">
					<img src="https://placeimg.com/800/200/arch" class="w-full" />
					<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide1" class="btn btn-outline btn-circle">
							❮
						</a>
						<a href="#slide3" class="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide3" class="carousel-item relative w-full">
					<img src="https://placeimg.com/800/200/arch" class="w-full" />
					<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide2" class="btn btn-circle">
							❮
						</a>
						<a href="#slide4" class="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide4" class="carousel-item relative w-full">
					<img src="https://placeimg.com/800/200/arch" class="w-full" />
					<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide3" class="btn btn-neutral btn-circle">
							❮
						</a>
						<a href="#slide1" class="btn btn-circle">
							❯
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
