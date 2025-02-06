import React, { useState } from 'react'
import contactUs from '../../assets/contactUs.png'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    question: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted', formData)
  }

  return (
    <div className="flex justify-center gap-20  items-center my-10 p-10  ">
      <section className='max-lg:hidden'>
        <img src={contactUs} alt="contact" className="w-[600px] min-w-[400px]" />
      </section>
      <section>
        <div className="min-w-[300px]   mx-auto bg-white p-10 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-2 max-lg:text-2xl">
            Ask a question
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Leave your question below, and our team will get back to you asap!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Like. Petr Bilek"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full outline-none mb-5 p-2 border border-gray-400 h-[48px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Like . bilekpetr92@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mb-5 border border-gray-400 h-[48px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Question</label>
              <textarea
                name="question"
                placeholder="Like. What's included in ...."
                value={formData.question}
                onChange={handleChange}
                className="w-full p-2 border rounded-md border-gray-400 h-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-800 text-white p-2 rounded-md hover:bg-blue-700 cursor-pointer"
            >
              Send message now
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
