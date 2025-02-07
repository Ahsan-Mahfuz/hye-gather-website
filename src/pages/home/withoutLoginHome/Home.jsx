import React from 'react'
import HeroPage from './HeroPage'
import CustomizeEvent from './CustomizeEvent'
import VendorCategories from './VendorCategories'
import FrequentlyAskedQuestion from './FrequentlyAskedQuestion'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div className="p-5">
      <HeroPage />
      <CustomizeEvent />
      <VendorCategories />
      <FrequentlyAskedQuestion />
      <Testimonial />
    </div>
  )
}

export default Home
