"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage = () => {
  const [token, setToken] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedToken = process.env.DJ_TOKEN;

    if (token === storedToken) {
      localStorage.setItem("DJ_TOKEN", token);
      router.push("/dashboard");
    } else {
      setError("Invalid token");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl mb-4">DJ Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Enter DJ Token"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
