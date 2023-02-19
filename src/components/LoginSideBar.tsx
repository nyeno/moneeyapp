import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import eye from '../assets/eye.png'

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    //e.preventDefault();
    try {
      await handleLogin(email, password);
      navigate("/home");
    } catch (err) {
    }
  };

  //toggling password visibility

  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    //e.preventDefault()
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div className="bg-white rounded-xl px-12 py-10 h-max w-4/5 shadow-lg">
      <h2 className="text-xl font-semibold ">Login to your dashboard</h2>
      <p className="text-[#858585] text-sm mb-12">
        Provide details to login to your account{" "}
      </p>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-2">
          <p>Email</p>
          <div className="w-full px-4 py-2 border border-[#1A1A1A] rounded-lg shadow-sm focus:ring-1 focus:ring-[#1A1A1A]">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Please use 'john.doe@moneeyapp.com' as email"
              className="w-full"
            />
          </div>
        </div>
        <div className="space-y-2">
          <p>Password</p>
          <div className="flex justify-between w-full px-4 py-2 border border-[#1A1A1A] rounded-lg shadow-sm focus:ring-1 focus:ring-[#1A1A1A]">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={passwordType}
              placeholder="Please use 'password123' as password"
            />
            <button onClick={togglePassword} type="button">
              <img src={eye} alt="Toggle password visibility" />
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-full py-2 text-center bg-[#1CC578] text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}
