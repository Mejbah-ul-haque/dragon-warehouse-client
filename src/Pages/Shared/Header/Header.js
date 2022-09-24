import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
	
	const [user, loading, error] = useAuthState(auth);
	
	const logout = () => {
		signOut(auth);
	}
	
	const menuItems = (
		<>
			<li>
				{ 
					user && <li><Link to="inventories" className='hover:bg-slate-800'>Manage Inventories</Link></li>
				}
			</li>
			<li>
				{ 
					user && <li><Link to="addItem" className='hover:bg-slate-800'>Add Item</Link></li>
				}
			</li>
			<li>
				{ 
					user && <li><Link to="myItems" className='hover:bg-slate-800'>My Items</Link></li>
				}
			</li>
			<li>
				<Link to="blog" className='hover:bg-slate-800'>Blog</Link>
			</li>
			<li>
				<Link to="about" className='hover:bg-slate-800'>About</Link>
			</li>
			<li>
				{user ? <li><button className="btn btn-ghost"onClick={logout}>Sign Out</button></li> : <Link to="login" className='hover:bg-slate-800'>Login</Link>}
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
						{menuItems}
					</ul>
				</div>
				<Link to="/" className="btn btn-ghost normal-case text-2xl">Dragon Warehouse</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal p-0">
					{menuItems}
				</ul>
			</div>
		</div>
		</div>
	);
};

export default Header;
