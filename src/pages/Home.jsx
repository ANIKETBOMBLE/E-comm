import instance from "./axios.js";
import { useState, useEffect } from "react";
// import Product from "../Product.jsx";
import Product from "./Products.jsx";
import { use } from "react";





const BouncingDots = () => (
	<span className="loader"></span>
  );

function Main() {
	const [loading , setloading] = useState(true);

	useEffect(()=>{
	setTimeout(() => {
	setloading(false);	
	}, 1000);
	})
	

 if(loading){
	return <BouncingDots/>
 }{
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
				<Product />
			</div>
			<div className="flex justify-center mt-4">
				<button className="bg-blue-500 text-white px-4 py-2 rounded">
					Load More
				</button>
			</div>
		  
		</>
	  );
	}
	
 }




export default Main;
