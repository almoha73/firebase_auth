import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { auth } from "../firebase";
import { navigation } from "./Home";

const Login = () => {
	const navigate = useNavigate();
	const {
		handleSubmit,
		register,
		trigger,

		formState: { errors },
	} = useForm();

	const submitHandler = async (data) => {
		try {
			await signInWithEmailAndPassword(auth, data.email, data.password);
			navigate("/profil");
			alert("User logged Successfully");
		} catch (error) {
			alert("User login failed");
			alert(error);
		}
	};

	const { currentUser } = useContext(AuthContext);
	useEffect(() => {
		if (currentUser) {
			navigate("/login");
		}
	}, [currentUser, navigate]);

	return (
		<>
			<Navigation navigation={navigation} />

			<div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<img
						className="mx-auto h-12 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="Your Company"
					/>
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
						Sign in to your account
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Or{" "}
						<a
							href="/signup"
							className="font-medium text-indigo-600 hover:text-indigo-500"
						>
							Sign Up
						</a>
					</p>
				</div>

				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
						<form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									Email address
								</label>
								<div className="mt-1">
									<input
										id="email"
										name="email"
										type="email"
										required={true}
										{...register("email", {
											required: "Email is Required!!!",
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
												message: "Invalid email address",
											},
										})}
										error={errors.email}
										onKeyUp={() => {
											trigger("email");
										}}
										className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									/>
									{errors.email && (
										<small className="text-danger">
											{errors.email.message}
										</small>
									)}
								</div>
							</div>

							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium text-gray-700"
								>
									Password
								</label>
								<div className="mt-1">
									<input
										name="password"
										id="password"
										type="password"
										autoComplete="off"
										required={true}
										{...register("password", {
											required: "You must specify a password",
											pattern: {
												value:
													"^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[d]){1,})(?=. (.*.      [W]){    1,})(?!.*s).{8,}$",
												message:
													"Password should contain at least one number and one    special character",
											},
											minLength: {
												value: 8,
												message: "Password must be more than 8 characters",
											},
											maxLength: {
												value: 20,
												message: "Password must be less than 20 characters",
											},
										})}
										onKeyUp={() => {
											trigger("password");
										}}
										error={errors.password}
										className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									/>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<input
										id="remember-me"
										name="remember-me"
										type="checkbox"
										className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
									/>
									<label
										htmlFor="remember-me"
										className="ml-2 block text-sm text-gray-900"
									>
										Remember me
									</label>
								</div>

								<div className="text-sm">
									<a
										href="/"
										className="font-medium text-indigo-600 hover:text-indigo-500"
									>
										Forgot your password?
									</a>
								</div>
							</div>

							<div>
								<button
									type="submit"
									className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								>
									Sign in
								</button>
							</div>
						</form>

						<div className="mt-6">
							<div className="relative">
								<div className="absolute inset-0 flex items-center">
									<div className="w-full border-t border-gray-300" />
								</div>
								<div className="relative flex justify-center text-sm">
									<span className="bg-white px-2 text-gray-500">
										Or continue with
									</span>
								</div>
							</div>

							<div className="mt-6 grid grid-cols-3 gap-3">
								<div>
									<a
										href="/"
										className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
									>
										<span className="sr-only">Sign in with Facebook</span>
										<svg
											className="h-5 w-5"
											aria-hidden="true"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
								</div>

								<div>
									<a
										href="/"
										className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
									>
										<span className="sr-only">Sign in with Twitter</span>
										<svg
											className="h-5 w-5"
											aria-hidden="true"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
										</svg>
									</a>
								</div>

								<div>
									<a
										href="/"
										className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
									>
										<span className="sr-only">Sign in with Google</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											aria-label="Google"
											role="img"
											viewBox="0 0 512 512"
											width="20"
											height="20"
										>
											<rect width="512" height="512" rx="15%" fill="#fff" />
											<path
												fill="#4285f4"
												d="M386 400c45-42 65-112 53-179H260v74h102c-4 24-18 44-38 57z"
											/>
											<path
												fill="#34a853"
												d="M90 341a192 192 0 0 0 296 59l-62-48c-53 35-141 22-171-60z"
											/>
											<path
												fill="#fbbc02"
												d="M153 292c-8-25-8-48 0-73l-63-49c-23 46-30 111 0 171z"
											/>
											<path
												fill="#ea4335"
												d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Login;
