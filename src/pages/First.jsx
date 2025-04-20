import React from "react";
import Header from "../componetus/header";
import Footer from "../componetus/footer";
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