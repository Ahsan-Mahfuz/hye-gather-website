import React from 'react'
import { useNavigate } from 'react-router-dom'

const AccountSettings = () => {
  const Navigate = useNavigate()
  return (
    <div className="mt-10">
      <div className="max-w-[600px] w-full flex flex-col gap-5  mx-auto bg-white rounded-lg p-10">
        <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg mb-2">
          <div className="flex items-center space-x-3">
            <span className="text-gray-600">📢</span>
            <span className="text-sm font-medium text-gray-800">
              Send Notification On Mail
            </span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-300  dark:peer-focus:ring-blue-800 rounded-full peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            <span className="ml-2 text-sm font-medium text-gray-900">On</span>
          </label>
        </div>

        <div
          onClick={() => Navigate('/')}
          className="flex items-center justify-between p-3 border border-gray-200 rounded-lg cursor-pointer"
        >
          <div className="flex items-center space-x-3">
            <span className="text-red-500">🚫</span>
            <span className="text-sm font-medium text-red-500">
              Delete Account
            </span>
          </div>
          <span className="text-red-400">{'>'}</span>
        </div>
      </div>
    </div>
  )
}

export default AccountSettings
