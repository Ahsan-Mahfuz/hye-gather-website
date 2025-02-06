import React from 'react'
import musician from '../../assets/musician.jpg'
import entertainers from '../../assets/Entertainment.jpg'
import eventPlanner from '../../assets/Frame-3.png'
import decorators from '../../assets/Decorations.jpg'
import caterers from '../../assets/food.jpg'
import photographers from '../../assets/Photography.jpg'
import djs from '../../assets/DJs.jpg'
import bars from '../../assets/Bar.jpg'

const eventData = [
  {
    id: 1,
    category: 'DJs',
    title: 'Bring Your Event to Life',
    description:
      'Professional DJs ready to create the perfect vibe for your event, from weddings to corporate parties.',
    features: [
      'Top-rated and experienced DJs.',
      'Customized playlists for every occasion.',
      'Seamless booking process.',
    ],
    image: djs,
  },
  {
    id: 2,
    category: 'Musicians',
    title: 'Live Music for Every Moment',
    description:
      'Talented musicians to make your events unforgettable, from solo acts to full bands.',
    features: [
      'Diverse genres to suit your event.',
      'Professional performers for any size audience.',
      'Flexible scheduling and packages.',
    ],
    image: musician,
  },
  {
    id: 3,
    category: 'Caterers',
    title: 'Exceptional Catering Services',
    description:
      'Delicious menus crafted by professional caterers to impress your guests.',
    features: [
      'Tailored menus for every dietary need.',
      'On-time delivery and setup.',
      'High-quality ingredients guaranteed.',
    ],
    image: caterers,
  },
  {
    id: 4,
    category: 'Photographers',
    title: 'Capture Every Special Moment',
    description:
      'Experienced photographers to document your events in stunning detail.',
    features: [
      'High-resolution photography and editing.',
      'Packages for all event types.',
      'Quick and easy booking process.',
    ],
    image: photographers,
  },
  {
    id: 5,
    category: 'Bars',
    title: 'Premium Bar Services for Your Events',
    description:
      'Expert bartenders and top-tier beverage services to elevate your event experience.',
    features: [
      'Professional bartenders with years of experience.',
      'Customizable drink menus to suit any occasion.',
      'High-quality ingredients and premium liquors.',
    ],
    image: bars,
  },
  {
    id: 6,
    category: 'Entertainers',
    title: 'Unforgettable Entertainment',
    description:
      'Book the best entertainers, from magicians to dancers, to keep your guests engaged.',
    features: [
      'Wide range of entertainment options.',
      'Professional and reliable performers.',
      'Perfect for all event sizes and themes.',
    ],
    image: entertainers,
  },
  {
    id: 7,
    category: 'Decorators',
    title: 'Elegant Decorations for Every Occasion',
    description:
      'Professional decorators to create stunning settings and unforgettable moments for your event.',
    features: [
      'Customized decor tailored to your theme.',
      'High-quality materials and innovative designs.',
      'On-time setup and seamless execution.',
    ],
    image: decorators,
  },
]

const EventCard = ({ id, category, title, description, features, image }) => {
  return (
    <div
      className={`flex ${
        id % 2 === 0 ? 'flex-row-reverse justify-between ' : 'flex-row gap-10'
      }  items-center  p-6 } max-md:flex-col w-full`}
    >
      <img
        src={image}
        alt={title}
        className="w-[300px] h-[300px] object-cover rounded-lg"
      />
      <div>
        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
          {category}
        </span>
        <h2 className="text-2xl font-bold mt-2">{title}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-600">
              💡 {feature}
            </li>
          ))}
        </ul>
        <button className="mt-4 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 cursor-pointer">
          Learn more
        </button>
      </div>
    </div>
  )
}

const EventData = () => {
  return (
    <div className=" mx-auto space-y-8 p-6 responsive-width">
      {eventData.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  )
}

export default EventData
