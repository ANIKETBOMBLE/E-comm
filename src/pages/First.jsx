import React from "react";
import Header from "../componetus/H.jsx";
import Footer from "../componetus/F.jsx";
import { Outlet } from "react-router-dom";
function First(){
	return(
		<>
		<Header />
		<Outlet />
		<Footer />
		</>
	)
}

export default First;