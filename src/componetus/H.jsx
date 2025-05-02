import { Link } from "react-router-dom";
import { FaHeart ,FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoLogIn } from "react-icons/io5";
import Avatar from '@mui/material/Avatar';
// import Badge, { BadgeProps } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import FavoriteIcon from '@mui/icons-material/Favorite';


function Header(){
	
	  
	return(
		
		<>
		 <header className="bg-sky-600 shadow-md py-4 px-8 flex items-center justify-between">
      <h1 className="text-white text-3xl font-bold font-mono">
        <Link to="/" className="hover:text-yellow-300 transition-colors">Ecommerce</Link>
      </h1>
      <nav>
        <ul className="flex gap-10 items-center text-white text-lg font-semibold">
          <li>
            <Link to="/About" className="hover:text-yellow-300 transition-colors">About Us</Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:text-yellow-300 transition-colors">Contact Us</Link>
          </li>
          <li>
            <Link to="/wishlist" className="hover:text-yellow-300 transition-colors" title="WishList">
              {/* <FaRegHeart className="w-6 h-6" /> */}
			  <FavoriteIcon className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link to="/Cart" className="hover:text-yellow-300 transition-colors" title="Cart">
			<ShoppingCartIcon />
            </Link>
          </li>
          <li>
            <Link to="/Login" className="hover:text-yellow-300 transition-colors" title="Login">
              <IoLogIn className="w-8 h-8" />
            </Link>
			
          </li>
		  <li><Avatar src="/broken-image.jpg"  title="Profile"/></li>
        </ul>
      </nav>
    </header>
		</>
	)
}

export default Header;