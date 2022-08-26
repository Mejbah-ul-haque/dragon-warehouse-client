import React from "react";
import banner1 from "../../../assets/Banner/banner1.jpg";
import banner2 from "../../../assets/Banner/banner2.jpg";
import banner3 from "../../../assets/Banner/banner3.jpg";
import banner4 from "../../../assets/Banner/banner4.jpg";
import banner5 from "../../../assets/Banner/banner5.jpg";

const Banner = () => {
	return (
		<div className="bg-[#003366] ">
			<div class="container mx-auto carousel w-full">
				<div id="slide1" class="carousel-item relative w-full transform transition duration-1000 hover:scale-105">
					<img src={banner1} class="w-full" />
					<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide4" class="btn btn-circle btn-outline btn-warning">
							❮
						</a>
						<a href="#slide2" class="btn btn-circle btn-outline btn-warning">
							❯
						</a>
					</div>
				</div>
				<div id="slide2" class="carousel-item relative w-full">
					<img src={banner2} class="w-full" />
					<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide1" class="btn btn-circle btn-outline btn-warning">
							❮
						</a>
						<a href="#slide3" class="btn btn-circle btn-outline btn-warning">
							❯
						</a>
					</div>
				</div>
				<div id="slide3" class="carousel-item relative w-full">
					<img src={banner3} class="w-full" />
					<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide2" class="btn btn-circle btn-outline btn-warning">
							❮
						</a>
						<a href="#slide4" class="btn btn-circle btn-outline btn-warning">
							❯
						</a>
					</div>
				</div>
				<div id="slide4" class="carousel-item relative w-full">
					<img src="https://placeimg.com/800/200/arch" class="w-full" />
					<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide3" class="btn btn-circle">
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
