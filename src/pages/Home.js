import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const navigation = [
	{ name: "Accueil", href: "/" },
	{ name: "Login", href: "/login" },
];
const Home = () => {
	return (
		<div className="flex flex-col w-full h-screen">
			<Navigation navigation={navigation} />
			<main className="flex-1 flex  items-center justify-center text-6xl">
				<h1>Welcome Home</h1>
			</main>
			<Footer />
		</div>
	);
};

export default Home;
