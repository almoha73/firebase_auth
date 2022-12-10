import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Profil = () => {
	const { currentUser } = useContext(AuthContext);
	console.log(currentUser);
	return (
		<div className="flex flex-col w-full h-screen">
			<Navigation />
			<main className="flex-1 flex  items-center justify-center">
				<h1>Welcome</h1>
				<p>This is the Home Page, if you can see this you're logged in.</p>
			</main>
			<Footer />
		</div>
	);
};

export default Profil;
