import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4  poppins responsive-width">
      <Link to={'/'} className="flex items-center gap-2">
        <img src={logo} alt="" />
        <div className="text-3xl font-extrabold text-blue-800  poppins">
          HYE GATHER
        </div>
      </Link>

      <ul className={`flex space-x-6 items-center`}>
        <li>
          <Link
            to={'/'}
            className="text-lg font-semibold text-gray-800 hover:text-blue-800 hover:underline hover:underline-offset-4  hover:decoration-2"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={'/explore-vendors'}
            className="text-lg font-semibold text-gray-800 hover:text-blue-800 hover:underline hover:underline-offset-4  hover:decoration-2"
          >
            Explore Vendors
          </Link>
        </li>
        <li>
          <Link
            to={'/contact-us'}
            className="text-lg font-semibold text-gray-800 hover:text-blue-800 hover:underline hover:underline-offset-4  hover:decoration-2"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to={'/login'}
            className="px-5  font-bold py-5 poppins bg-cyan-300 rounded-lg hover:bg-blue-200 transition-all duration-300"
          >
            Get Started
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
