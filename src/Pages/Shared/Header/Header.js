import React from "react";

const Header = () => {
	const manuItems = (
		<>
			<li>
				<a className='hover:bg-slate-800'>Manage Items</a>
			</li>
			<li>
				<a className='hover:bg-slate-800'>Add Item</a>
			</li>
			<li>
				<a className='hover:bg-slate-800'>My Items</a>
			</li>
			<li>
				<a className='hover:bg-slate-800'>Blog</a>
			</li>
			<li>
				<a className='hover:bg-slate-800'>About</a>
			</li>
			<li>
				<a className='hover:bg-slate-800'>Login</a>
			</li>
		</>
	);
	return (
		<div className=" bg-black">
			<div className="container mx-auto navbar bg-black text-white">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex="0" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex="0"
						className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box bg-black w-52"
					>
						{manuItems}
					</ul>
				</div>
				<a className="btn btn-ghost normal-case text-2xl">Dragon Warehouse</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal p-0">
					{manuItems}
				</ul>
			</div>
		</div>
		</div>
	);
};

export default Header;
