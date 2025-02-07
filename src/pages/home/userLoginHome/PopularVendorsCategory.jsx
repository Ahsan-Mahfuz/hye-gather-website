import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import entertainment from '../../../assets/entertainment.jpg'
import photography from '../../../assets/photography.jpg'
import venues from '../../../assets/venues.jpg'
import djs from '../../../assets/djs.jpg'
import bar from '../../../assets/Bar.jpg'
import food from '../../../assets/food.jpg'

const images = [
  { src: entertainment, title: 'Entertainment' },
  { src: photography, title: 'Photography' },
  { src: venues, title: 'Venues' },
  { src: djs, title: 'Djs' },
  { src: bar, title: 'bar' },
  { src: food, title: 'food' },
]

const PopularVendorsCategory = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = window.innerWidth >= 768 ? 3 : 1
  const totalSlides = Math.ceil(images.length / itemsPerPage)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  return (
    <div className="responsive-width px-20 max-sm:px-5">
      <p className="text-3xl font-bold  mb-20">Popular Vandor category</p>
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            width: `${(images.length / itemsPerPage) * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-1/3 flex flex-col items-center px-2">
              <img
                src={image.src}
                alt={image.title}
                className="w-64 h-64 rounded-lg shadow-md object-cover"
              />
              <p className="mt-2 text-xl  font-semibold text-center">
                {image.title}
              </p>
            </div>
          ))}
        </div>

        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>

        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default PopularVendorsCategory
