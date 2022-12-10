import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Profil from "./pages/Profil";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/profil" element={<Profil />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
			</Routes>
		</div>
	);
}

export default App;
