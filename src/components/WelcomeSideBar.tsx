import React from 'react'
import { features } from '../data/LoginPageData'
import logo from '../assets/moneeyappIcon.png'
import tick from '../assets/tick-circle.png'

export default function WelcomeSideBar() {
    return (
        <main className='mx-16 hidden lg:block'>
        <img src={ logo} alt="MoneeyApp Logo" className='mb-4'/>
        <h1 className='font-bold text-[32px]'>Hi there, see what’s new</h1>
        <p>
          Here’s how Foodcourt helps you manage your daily operations and ensure
          your riders are efficient
        </p>
        <div className='space-y-6 mt-12'>
          {" "}
          {features.map((feature) => {
            return (
              <div
                className={`flex items-center space-x-3 p-2 ${
                  feature.active ? "bg-[#F8F8F6] rounded-2xl" : ""
                }`}
                key={feature.title}
              >
                <div className={""}>
                  {" "}
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className={`${feature.color} py-px rounded-lg`}
                  />
                </div>
                <div>
                  {" "}
                  <h3 className="font-medium text-base pb-px">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-[#A3A3A3]">{feature.details}</p>
                </div>
                <div>
                  {feature.active ? (
                    <img src={tick} alt="Ticeked or selected Feature" />
                  ) : (
                    <p> &nbsp; &nbsp;</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    );
}
