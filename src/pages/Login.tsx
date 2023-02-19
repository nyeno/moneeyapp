import React from 'react'
import Signin from '../components/LoginSideBar'
import WelcomeSideBar from '../components/WelcomeSideBar'
import logo from "../assets/moneeyappIcon.png";

export default function Login() {
  return (
    <div className="block lg:flex h-screen">
      <WelcomeSideBar />
      <div className="bg-[#FEF0F2] h-full lg:basis-1/2 flex lg:flex-row flex-col justify-center items-center">
        <img src={logo} alt="MoneeyApp Logo" className="mb-4 lg:hidden" />
        <Signin />
      </div>
    </div>
  );
}
