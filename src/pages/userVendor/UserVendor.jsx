import React, { useState } from 'react'

const UserVendor = () => {
  const categories = [
    'All',
    'Bars',
    'DJs',
    'Food',
    'Desserts',
    'Coffee',
    'Entertainment',
    'Decorations',
    'Photography & Videography',
    'Waiters',
    'Sparks & Fog',
    'Venues',
    'Car Services',
    'Chairs & Tables',
    'Florists',
    'Hookah',
  ]

  const vendors = [
    {
      id: 1,
      category: 'Entertainment',
      title: 'Entertainment 01',
      image: 'https://randomuser.me/api/portraits/men/82.jpg',
    },
    {
      id: 2,
      category: 'Food',
      title: 'Food Vendor 01',
      image: 'https://randomuser.me/api/portraits/men/83.jpg',
    },
    {
      id: 3,
      category: 'Photography & Videography',
      title: 'Photographer 01',
      image: 'https://randomuser.me/api/portraits/men/84.jpg',
    },
    {
      id: 4,
      category: 'Bars',
      title: 'Bar Service 01',
      image: 'https://randomuser.me/api/portraits/men/85.jpg',
    },
    {
      id: 5,
      category: 'Entertainment',
      title: 'Entertainment 02',
      image: 'https://randomuser.me/api/portraits/men/86.jpg',
    },
    {
      id: 6,
      category: 'DJs',
      title: 'DJ Party 01',
      image: 'https://randomuser.me/api/portraits/men/87.jpg',
    },
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const filteredVendors = vendors.filter(
    (vendor) =>
      vendor.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || vendor.category === selectedCategory)
  )

  return (
    <div className="responsive-width mx-auto p-6">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search your Perfect Vendor for your event"
        className="w-full p-3 outline-none rounded-md border bg-white border-gray-500 mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex gap-6">
        {/* Sidebar Category Filter */}
        <div className="w-[220px]  bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">Vendor Categories</h3>
          <div className="grid grid-cols-1 gap-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedCategory === category}
                  onChange={() => handleCategoryChange(category)}
                />
                <span className="text-sm">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Vendor Grid */}
        <div className="w-3/4 flex flex-wrap items-center justify-center gap-4">
          {filteredVendors.length > 0 ? (
            filteredVendors.map((vendor) => (
              <div key={vendor.id} className="p-4 rounded-lg">
                <img
                  src={vendor.image}
                  alt={vendor.title}
                  className="rounded-md mb-2 w-full max-w-[700px] h-[300px]"
                />
                <p className="text-lg font-semibold">{vendor.title}</p>
                <p className="text-gray-500 text-sm">{vendor.category}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No vendors found.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserVendor
