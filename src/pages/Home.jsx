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
		
		  <h1>Home</h1>
		  
		  
		</>
	  );
	}
	
 }




export default Main;
