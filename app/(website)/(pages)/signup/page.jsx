// pages/signup.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Signup = () => {
    const router = useRouter();

    const [fullName, setFullName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState("");

    const validatePassword = (password) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        // Perform signup logic here (e.g., call an API)

        // Redirect to the sign-in page after successful signup
        router.push("/signin");
    };

    const isFormValid = () => {
        return fullName && contactNumber && email && validatePassword(password) && address && password === confirmPassword;
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen p-6 bg-white my-16">
            <Image
                src="/assets/logo.png"
                alt="JusBuy Logo"
                width={150}
                height={50}
                className="mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
            <form onSubmit={handleSubmit} className="mt-6 w-full max-w-lg">
                <div>
                    <label className="block text-sm font-medium text-gray-600" htmlFor="fullName">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-600" htmlFor="contactNumber">
                        Contact Number
                    </label>
                    <input
                        type="text"
                        id="contactNumber"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        placeholder="+88##############"
                        required
                    />
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-600" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        placeholder="example@gmail.com"
                        required
                    />
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-600" htmlFor="password">
                        New Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setError(""); // Reset error on input
                        }}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        placeholder="Enter your password"
                        required
                    />
                    {!validatePassword(password) && password && (
                        <p className="text-red-500 text-xs">
                            Password must be at least 8 characters, include one uppercase letter, one lowercase letter, and one special character.
                        </p>
                    )}
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-600" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            setError(""); // Reset error on input
                        }}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        placeholder="Re-enter your password"
                        required
                    />
                    {password !== confirmPassword && confirmPassword && (
                        <p className="text-red-500 text-xs">Passwords do not match.</p>
                    )}
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-600" htmlFor="address">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                        placeholder="Address"
                        required
                    />
                </div>

                {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

                <button
                    type="submit"
                    className={`mt-6 w-full p-2 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 focus:outline-none ${!isFormValid() && "opacity-50 cursor-not-allowed"}`}
                    disabled={!isFormValid()}
                >
                    SIGN UP
                </button>

                <p className="mt-4 text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link href="/signin" className="text-orange-500 hover:text-orange-700">
                        Sign In
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;
