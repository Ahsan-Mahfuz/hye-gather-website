import React from 'react'
import UserHeroPage from './UserHeroPage'
import PopularVendorsCategory from './PopularVendorsCategory'
import Testimonial from '../withoutLoginHome/Testimonial'
import HowItWorks from './HowItWorks'
import DiscoverVendors from './discoverVendors/DiscoverVendors'

const UserHome = () => {
  return (
    <div>
      <UserHeroPage />
      <PopularVendorsCategory />
      <DiscoverVendors />
      <HowItWorks />
      {/* <TopRatedVendors /> */}
      <Testimonial />
    </div>
  )
}

export default UserHome
