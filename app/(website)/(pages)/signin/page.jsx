"use client";

import Image from "next/image"; // For images
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const router = useRouter(); // Initialize useRouter

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform login validation here
        if (!email || !password) {
            setError("Username or Email and Password are required");
        } else {
            // Handle successful login logic
            console.log("Logging in...");
            // Redirect to home page after successful login
            router.push("/"); // Redirect to home route
        }
    };

    return (
        <div className="flex h-screen">
            {/* Left side - Image/Illustration */}
            <div className="hidden md:flex flex-1 justify-center items-center">
                <Image
                    src="/assets/signin_banner.png"
                    alt="Illustration"
                    width={400}
                    height={400}
                />
            </div>

            {/* Right side - Login Form */}
            <div className="flex-1 flex flex-col justify-center p-6 bg-white">
                <Image
                    src="/assets/logo.png"
                    alt="JusBuy Logo"
                    width={150}
                    height={50}
                />
                <h2 className="text-2xl font-bold text-gray-800">
                    Great to have you back!
                </h2>
                <form onSubmit={handleSubmit} className="mt-6">
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-600"
                            htmlFor="email"
                        >
                            User Name or Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                            placeholder="Email"
                            required
                        />
                        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
                    </div>
                    <div className="mt-4">
                        <label
                            className="block text-sm font-medium text-gray-600"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="mt-2 flex justify-between">
                        <Link
                            href="/"
                            className="text-orange-500 hover:text-orange-700 text-sm"
                        >
                            Forgot?
                        </Link>
                    </div>
                    <button
                        type="submit"
                        className="mt-6 w-full p-2 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 focus:outline-none"
                    >
                        SIGN IN
                    </button>
                    <p className="mt-4 text-sm text-gray-600">
                        Don’t have an account?{" "}
                        <Link href="/signup" className="text-orange-500 hover:text-orange-700">
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
