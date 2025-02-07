import React, { useEffect, useState } from 'react'
import Footer from '../home/Footer'
import NavbarUser from '../home/userLoginHome/NavbarUser'
import Navbar from '../home/withoutLoginHome/Navbar'

const Layout = ({ children }) => {
  const [user, setUser] = useState('user') // 'normal', 'user', 'vendor'

  return (
    <div className="min-h-screen flex flex-col">
      {/* {user === 'normal' && <Navbar />} */}
      {/* {user === 'user' && <NavbarUser />} */}
      {/* {user === 'vendor' && <Navbar />} */}

      <main className="flex-1">{children}</main>
      <Footer className="mt-auto" />
    </div>
  )
}

export default Layout
