import React, { useState } from "react";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

export default function Navigation({ navigation }) {
	const { currentUser, logout } = useContext(AuthContext);
	console.log(currentUser);
	console.log(navigation);

	const navigation2 = [
		{ name: "Accueil", href: "/" },
		{ name: "Portfolio", href: "/portfolio" },
		{ name: "Contact", href: "/contact" },
	];

	const [error, setError] = useState("");

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
		<Disclosure as="nav" className="bg-amber-100 w-full flex justify-center">
			{({ open }) => (
				<>
					<div className="w-11/12">
						<div className="relative flex sm:w-full h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-amber-200 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex  sm:w-full items-center justify-center sm:items-center sm:justify-center">
								<div className="hidden  sm:block sm:flex sm:justify-between w-full">
									<div className="flex space-x-4">
										{navigation
											? navigation.map((item) => (
													<NavLink
														key={item.name}
														to={item.href}
														className={({ isActive }) =>
															isActive
																? "bg-amber-200 text-gray-500 sm:text-2xl"
																: "text-gray-500 hover:bg-amber-200 hover:gray-700 sm:text-2xl"
														}
														aria-current={item.current ? "page" : undefined}
														end
													>
														{item.name}
													</NavLink>
											  ))
											: navigation2.map((item) => (
													<NavLink
														key={item.name}
														to={item.href}
														className={({ isActive }) =>
															isActive
																? "bg-amber-200 text-gray-500 sm:text-2xl"
																: "text-gray-500 hover:bg-amber-200 hover:gray-700 sm:text-2xl"
														}
														aria-current={item.current ? "page" : undefined}
														end
													>
														{item.name}
													</NavLink>
											  ))}
									</div>
									<button onClick={handleLogout} className="">
										Sign Out
									</button>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-4 px-2 pt-2 pb-3 flex flex-col">
							{navigation
								? navigation.map((item) => (
										<Disclosure.Button key={item.name}>
											<NavLink
												to={item.href}
												className={({ isActive }) =>
													isActive
														? "bg-amber-200 text-gray-500 sm:text-2xl block p-2 w-3/5 hover:w-3/5 mx-auto"
														: "text-gray-500 hover:bg-amber-200 hover:gray-700 sm:text-2xl p-2 hover:w-3/5 mx-auto block"
												}
												aria-current={item.current ? "page" : undefined}
												end
											>
												{item.name}
											</NavLink>
										</Disclosure.Button>
								  ))
								: navigation2.map((item) => (
										<Disclosure.Button key={item.name}>
											<NavLink
												to={item.href}
												className={({ isActive }) =>
													isActive
														? "bg-amber-200 text-gray-500 sm:text-2xl block p-2 w-3/5 hover:w-3/5 mx-auto"
														: "text-gray-500 hover:bg-amber-200 hover:gray-700 sm:text-2xl p-2 hover:w-3/5 mx-auto block"
												}
												aria-current={item.current ? "page" : undefined}
												end
											>
												{item.name}
											</NavLink>
										</Disclosure.Button>
								  ))}
						</div>
						<button onClick={handleLogout} className="block mx-auto">
							Sign Out
						</button>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
