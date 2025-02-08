import React from 'react'
import { useState } from 'react'

const UserVendor = () => {
  const categories = [
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
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      category: 'Entertainment',
      title: 'Entertainment 01',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      category: 'Entertainment',
      title: 'Entertainment 01',
      image: 'https://via.placeholder.com/300',
    },
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([
    'Entertainment',
  ])

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  const filteredVendors = vendors.filter(
    (vendor) =>
      vendor.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      selectedCategories.includes(vendor.category)
  )

  return (
    <div className="max-w-7xl mx-auto p-6">
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
        <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">Vendor Categories</h3>
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                className="h-4 w-4"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <label className="text-gray-700">{category}</label>
            </div>
          ))}
        </div>

        {/* Vendor Grid */}
        <div className="w-3/4 grid md:grid-cols-2 gap-4">
          {filteredVendors.map((vendor) => (
            <div key={vendor.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={vendor.image}
                alt={vendor.title}
                className="rounded-md mb-2"
              />
              <p className="text-lg font-semibold">{vendor.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserVendor
