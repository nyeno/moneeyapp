import React from 'react'
import Home from '../components/Home'
import logo from '../assets/moneeyappIcon.png'
import NotificationBar from '../components/NotificationBar';

export default function Profile() {
  return (
    <div className="h-screen">
      <header className="px-12 border-b shadow-sm">
        <img src={logo} alt="MoneeyApp Logo" />
      </header>
      <main className="block lg:flex space-x-8 mx-12 my-6">
        <div className="basis-5/6 border border-[#DCE2EA] rounded-md lg:pl-32 pl-16 pt-16">
          <Home />
        </div>
        <div className="hidden lg:flex items-center bg-[#F7F7F7] rounded-xl items-center py-8 px-8">
          <NotificationBar />
        </div>
      </main>
    </div>
  );
}
