"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchBar() {
    const router = useRouter();

    const [query, setQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
                <input
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    placeholder="Search for events..."
                    className="w-full py-3 px-4 pl-12 bg-white rounded-xl border border-gray-200 shadow-sm "
                />

                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#b9db95] text-white px-4 py-1.5 rounded-lg"
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
