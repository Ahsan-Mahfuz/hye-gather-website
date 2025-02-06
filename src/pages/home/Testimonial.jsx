import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TestimonialData = [
  {
    id: 1,
    name: 'John Doe',
    description:
      'Hye Gather helped me to find the perfect vendor for my event. The team is very helpful and responsive. They made sure that every detail was taken care of. I was very impressed with their service and would definitely recommend them to my friends and family.',
    img: 'https://randomuser.me/api/portraits/men/82.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Smith',
    description:
      'I was very impressed with the service of Hye Gather. The team is very professional and helpful. They made sure that every detail was taken care of and the vendor they recommended was excellent. I would definitely recommend them to my friends and family.',
    img: 'https://randomuser.me/api/portraits/men/83.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'William Brown',
    description:
      'Hye Gather helped me to find the perfect vendor for my event. The team is very helpful and responsive. They made sure that every detail was taken care of. I was very impressed with their service and would definitely recommend them to my friends and family.',
    img: 'https://randomuser.me/api/portraits/men/84.jpg',
    rating: 5,
  },
]

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="  mt-20">
      <section className="flex items-center justify-center flex-col">
        <h1 className="font-bold text-4xl">What Our Clients Say</h1>
        <p className="text-gray-500 mt-3">
          Real experiences from event organizers who found the perfect vendors
          through our platform. Discover how we’ve made event planning seamless,
          stress-free, and successful.
        </p>
      </section>
      <div className="py-10 mb-10 ">
        <div className="container mx-auto">
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {TestimonialData.map((data) => (
                <div className="my-6" key={data.id}>
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-white relative">
                    <div className="mb-4 flex items-center justify-center">
                      <img
                        src={data.img}
                        alt={data.name}
                        className="rounded-full w-30 h-30"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        <h1 className="text-xl font-bold text-black/80  font-cursive text-center">
                          {data.name}
                        </h1>
                        <p className="text-xs text-center text-gray-600">
                          {data.description}
                        </p>
                        <div className="flex justify-center text-2xl">
                          {Array.from({ length: 5 }, (_, index) => (
                            <span key={index} className="text-yellow-500">
                              {index < data.rating ? '★' : '☆'}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-red-800/30 text-9xl font-serif absolute top-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
