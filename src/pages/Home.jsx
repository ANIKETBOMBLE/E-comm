import React, { use }  from "react";
import instance from "./axios";


function Main() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
  
	useEffect(() => {
	  getData();
	}, []);
  
	async function getData() {
	  setLoading(true);
	  const result = await instance.get("/products");
	  // console.log(result.data.products);
	  setProducts(result.data.products);
	  setLoading(false);
	}
	
	
	
	
	
	return(
		<>
		<h2>home</h2>
		
		</>
	)
}

export default Home;