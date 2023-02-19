import React from 'react'
import notifications from '../assets/notifications.png'
import timer from '../assets/timer.png'
//import notifbox from '../assets/notifbox.png'

export default function NotificationBar() {
  return (
    <div className="flex flex-col">
      <div className="flex space-x-4 items-center bg-[#FEEBEE] rounded-full w-max px-2 py-px mb-6">
        <img src={timer} alt="" />
        <p className="text-[#E60A2B]">Coming Soon</p>
      </div>
      <img src={notifications} alt="Notification bar" />
      <p className="text-center font-semibold text-2xl mb-2 mt-8">📫 Notifications</p>
      <p className="text-center text-[#595959]">
        Receive notifcations about your rider performance, efficiency reviews
        and a lot more
      </p>
    </div>
  );
}
