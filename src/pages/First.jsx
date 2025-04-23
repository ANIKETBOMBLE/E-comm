import React from "react";
import Header from "../componetus/Header";
import Footer from "../componetus/Footer";
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