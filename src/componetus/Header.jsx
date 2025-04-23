import { Link } from "react-router-dom";
import { FaHeart ,FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoLogIn } from "react-icons/io5";


function Header(){
	return(
		
		<>
		<header className="bg-sky-500 h-25 items-center flex justify-between p-6 0">
			<h1 className="font-bold text-2xl text-white font-mono">
				<Link to="/">Ecommerce</Link>
				</h1>
		<nav className="flex">
			<ul className="flex gap-20 font-bold items-center text-xl text-white">
				<li><Link to="/About">About Us</Link></li>
				<li><Link to="/Contact">Contact Us </Link></li>
				<li><Link to="/wishlist"><FaRegHeart className="w-6 h-6"/></Link></li>
				<li><Link to="/Cart"><FaCartShopping className="w-8 h-8" /></Link></li>
				<li className=""><Link to="/Login" ><IoLogIn className="w-10 h-10" /></Link></li>
			</ul>
		</nav>
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		</header>
		</>
	)
}

export default Header;