import React from 'react'
import bestVendor from '../../assets/bestVendor.svg'
import { CiCircleChevRight } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import heroPageRightPicture from '../../assets/heroPageRightPicture.png'

const HeroPage = () => {
  return (
    <div className="flex h-screen  max-lg:flex-col-reverse max-lg:gap-5 items-center justify-between responsive-width">
      {/* Left section */}
      <section>
        <div className="w-full max-w-[500px]   flex flex-col gap-5">
          <div className="flex items-center gap-3 ">
            <img src={bestVendor} alt="bestVendor" className="w-12 " />
            <div className="text-xl  ">
              Bringing the Best Vendors to Your Event
            </div>
          </div>

          <div className=" font-bold text-3xl mt-5 ">
            Plan Your Dream Event Effortlessly!
          </div>

          <div className="mt-5">
            <div className="flex gap-2 items-center ">
              <CiCircleChevRight className="text-blue-800 text-5xl" />
              <div>
                Design Your Perfect Event, No Limits. Choose from the best
                vendors for a seamless experience.
              </div>
            </div>
            <div className="flex gap-2 items-center  mt-5">
              <CiCircleChevRight className="text-blue-800 text-5xl" />
              <div>
                Unleash Your Creativity. Build your event with top-tier vendors
                at your fingertips.
              </div>
            </div>
          </div>

          <div className="mt-5">
            Find the perfect vendors for any occasion, from weddings to
            corporate events.
          </div>

          <div className="mt-7">
            <Link
              to={'/'}
              className="text-white rounded-lg poppins px-4 py-4 bg-blue-800 hover:bg-blue-700"
            >
              Get started
            </Link>
          </div>
        </div>
      </section>

      {/* right section */}
      <section className="max-lg:w-none">
        <img
          src={heroPageRightPicture}
          alt="heroPageRightPicture"
          className="max-w-[800px] w-full"
        />
      </section>
    </div>
  )
}

export default HeroPage
