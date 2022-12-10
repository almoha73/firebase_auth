import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Profil = () => {
	const [error, setError] = useState("");
	const { currentUser, logout } = useAuth();
	console.log((error, currentUser));
	const navigate = useNavigate();

	async function handleLogout() {
		setError("");
		try {
			await logout();
			navigate("/");
		} catch {
			setError("Failed to log out");
		}
	}
	return (
		<div className="flex flex-col w-full h-screen">
			<Navigation />
			<main className="flex-1 flex  items-center justify-center">
				<h1>Welcome</h1>
				<p>This is the Home Page, if you can see this you're logged in.</p>
				<button onClick={handleLogout}>Sign out</button>
			</main>
			<Footer />
		</div>
	);
};

export default Profil;
