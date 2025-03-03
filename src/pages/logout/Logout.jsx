import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <div>
      <button onClick={handleLogout} className="cursor-pointer">
        Logout
      </button>
    </div>
  )
}

export default Logout
