"use client";
import Image from "next/image";

import {
    SignedIn,
    SignedOut,
    UserButton,
    SignInButton,
    SignUpButton,
    SignOutButton,
    useUser,
} from "@clerk/nextjs";
import SearchBar from "./SearchBar";
const Header = () => {
    return (
        <div className="border-b">
            <div className=" flex  lg:flex-row items-center justify-between gap-4 p-4">
                <div className="flex items-center justify-between w-full lg:w-auto">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={100}
                        height={100}
                        className="w-20"
                    />
                </div>
                <div className="w-full lg:max-w-2xl  hidden sm:block">
                    <SearchBar />
                </div>
                {/* Auth Buttons */}
                <div className="flex items-center gap-3 ">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />

                        <SignOutButton>
                            <button
                                className="px-4 py-2 whitespace-nowrap rounded-lg text-black font-medium"
                                style={{ backgroundColor: "#b9db95" }}
                            >
                                Sign Out
                            </button>
                        </SignOutButton>
                    </SignedIn>

                    {/* if user not signed in*/}

                    <SignedOut>
                        <SignInButton mode="modal">
                            <button
                                className="px-4 py-2 rounded-lg whitespace-nowrap text-black font-medium"
                                style={{ backgroundColor: "#b9db95" }}
                            >
                                Sign In
                            </button>
                        </SignInButton>

                        <SignUpButton mode="modal">
                            <button
                                className="px-4 py-2 rounded-lg whitespace-nowrap text-black font-medium"
                                style={{ backgroundColor: "#b9db95" }}
                            >
                                Sign Up
                            </button>
                        </SignUpButton>
                    </SignedOut>
                </div>
            </div>
        </div>
    ); 
};

export default Header;
