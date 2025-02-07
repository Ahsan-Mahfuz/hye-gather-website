import React from 'react'
import event from '../../../assets/event.svg'
import cross from '../../../assets/cross.svg'
import image1 from '../../../assets/Decorations.jpg'
import { Link } from 'react-router-dom'

const CustomizeEvent = () => {
  return (
    <section className="flex flex-col gap-10 lg:flex-row items-center p-6 poppins mt-10 responsive-width ">
      <div className="flex flex-col items-center lg:w-1/2 space-y-4 lg:items-start">
        <div className="relative w-full ">
          <img
            src={image1}
            alt="Event Vendor"
            className="rounded-lg shadow-xl w-full h-auto"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
            <button className=" text-xl">
              <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:w-1/2 lg:pl-12 space-y-6 poppins">
        <div className="flex gap-2 items-center ">
          <img src={event} alt="event" className="w-12" />
          <h1 className="text-xl  ">Your Event, Our Vendors</h1>
        </div>
        <p className="text-3xl font-bold ">Customizable Event Solutions</p>
        <p className="text-xl">
          Pre-designed templates focused on vendor management and seamless event
          planning. This starter template helps you quickly connect with the
          best vendors to suit your event’s needs.
        </p>

        <ul className="space-y-4 text-lg ">
          <li>
            <div className="flex  gap-2">
              <img src={cross} alt="cross" className="w-6" />
              <span className="font-bold">Cross-Platform Usability</span>
            </div>
            <p className="mt-2 ml-9">
              Enjoy seamless event planning with both our web platform and
              mobile app, allowing you to manage vendors and events wherever you
              are.
            </p>
          </li>
          <li>
            <div className="flex  gap-2">
              <img src={cross} alt="cross" className="w-6" />
              <span className="font-bold">
                Well-Structured for Easy Navigation
              </span>
            </div>
            <p className="mt-2 ml-9">
              Design Your Perfect Event, No Limits. Choose from the best vendors
              for a seamless experience.
            </p>
          </li>
          <li>
            <div className="flex  gap-2">
              <img src={cross} alt="cross" className="w-6" />
              <span className="font-bold">Flexible and Dynamic Layouts</span>
            </div>
            <p className="mt-2 ml-9">
              Utilize our flexible, auto-layout designs for responsive and
              user-friendly event planning across any device.
            </p>
          </li>
        </ul>

        <div className="flex gap-2">
          <Link
            to={'/'}
            className="text-white max-md:text-xs rounded-lg poppins px-4 py-5 bg-blue-800 hover:bg-blue-700 max-lg:text-sm transition-all duration-300"
          >
            Get started
          </Link>
          <Link
            to={'/'}
            className="px-4 max-md:text-xs  font-bold py-5 poppins bg-cyan-300 rounded-lg hover:bg-blue-200 transition-all duration-300"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CustomizeEvent
