import React from 'react'
import { useState } from 'react'
import { Mail, Phone } from 'lucide-react'
import { FaAngleDown, FaChevronUp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const faqs = [
  {
    question: 'What is Hye Gather?',
    answer: 'Hye Gather is a platform for...',
  },
  {
    question: 'How do I find and book a vendor?',
    answer:
      'By category, use search filters, and contact vendors directly through their profiles to book their services.',
  },
  {
    question: 'Is there a fee to use Hye Gather?',
    answer: 'No, using Hye Gather is free...',
  },
  {
    question: 'How can I join?',
    answer: 'You can join by signing up on our website...',
  },
]

const FrequentlyAskedQuestion = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-7xl mx-auto p-6  rounded-lg flex items-center flex-col justify-center">
      <h2 className="text-4xl mb-10 font-bold text-center max-md:text-2xl">
        Most Frequently Asked Questions
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-2 bg-white p-4 rounded shadow">
              <button
                className="w-full text-left font-semibold flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>
                  {openIndex === index ? <FaChevronUp /> : <FaAngleDown />}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">
            Want to Know More? Contact Us!
          </h3>
          <p className="text-gray-600 mb-4">
            If you have more questions or need further assistance, feel free to
            reach out:
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail />
              <a
                href="mailto:hello@sassiii.com"
                className="text-blue-600 hover:underline"
              >
                hello@sassiii.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone />
              <a
                href="tel:+1612433513"
                className="text-blue-600 hover:underline"
              >
                +1 (612) 433-513
              </a>
            </div>
          </div>
          <div className="mt-5 text-gray-500">
            We’re here to help and ensure your experience with us is seamless.
          </div>
          <div className="mt-5 font-bold">
            we will make an email soon, and a phone number.
          </div>
        </div>
      </div>
      <div className="text-center mt-10 ">
        <Link
          to="mailto:hello@sassiii.com"
          className="bg-blue-800 text-white px-7 py-4 rounded-lg shadow hover:bg-blue-700"
        >
          Let's Mail Us →
        </Link>
      </div>
    </div>
  )
}

export default FrequentlyAskedQuestion
