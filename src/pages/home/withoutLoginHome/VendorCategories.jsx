import React from 'react'
import musician from '../../../assets/Frame-1.png'
import entertainers from '../../../assets/Frame-2.png'
import eventPlanner from '../../../assets/Frame-3.png'
import decorators from '../../../assets/Frame-4.png'
import caterers from '../../../assets/Frame-5.png'
import photographers from '../../../assets/Frame-6.png'
import djs from '../../../assets/Frame.png'
import { Link } from 'react-router-dom'

const categories = [
  { name: 'Musicians', image: musician },
  { name: 'Entertainers', image: entertainers },
  { name: 'Event Planners', image: eventPlanner },
  { name: 'Decorators', image: decorators },
  { name: 'Caterers', image: caterers },
  { name: 'Photographers', image: photographers },
  { name: 'DJs', image: djs },
]

const VendorCategories = () => {
  return (
    <section className="mt-[100px]">
      <div className="mx-auto flex items-center flex-col responsive-width">
        <h1 className="text-4xl font-bold">Explore Our Vendor Categories</h1>
        <p className="text-[15px] mt-3 text-gray-600 flex items-center justify-center">
          Pre-defined templates focusing on content presentation and high
          conversion rates. This is your starting point to discover the best
          vendors in each category at the most competitive prices.
        </p>
      </div>

      <Link to={'/vendors'} className="flex flex-wrap justify-center p-10 max-md:gap-0 gap-6 mt-20 ">
        {categories.map((category) => (
          <div
            key={category.name}
            style={{
              backgroundImage: `url(${category.image})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '500px',
            }}
            className="min-w-[250px]  min-h-[300px] max-md:min-h-[200px]   px-5  flex items-center justify-center"
          >
            <div className="text-black  max-md:text-[17px] font-bold text-3xl  bg-opacity-50 p-2 rounded -rotate-55 mr-30">
              {category.name}
            </div>
          </div>
        ))}
      </Link>
    </section>
  )
}

export default VendorCategories
