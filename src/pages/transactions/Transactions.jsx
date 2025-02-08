import React, { useState } from 'react'
import { X } from 'lucide-react'
import { Pagination } from 'antd'

const Transactions = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      name: 'Albert Flores',
      paymentMethod: 'card',
      payment: 80,
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      id: 2,
      name: 'Emily Campbell',
      paymentMethod: 'paypal',
      payment: 100,
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      id: 3,
      name: 'Lucas Brooks',
      paymentMethod: 'card',
      payment: 120,
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      id: 4,
      name: 'Samantha Hall',
      paymentMethod: 'card',
      payment: 150,
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      id: 5,
      name: 'Alexander Lee',
      paymentMethod: 'paypal',
      payment: 80,
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
    {
      id: 6,
      name: 'Olivia Walker',
      paymentMethod: 'card',
      payment: 100,
      avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
    },
    {
      id: 7,
      name: 'Ava Martin',
      paymentMethod: 'paypal',
      payment: 120,
      avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
    },
    {
      id: 8,
      name: 'Isabella Davis',
      paymentMethod: 'card',
      payment: 150,
      avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
    },
    {
      id: 9,
      name: 'Gabriel Brown',
      paymentMethod: 'paypal',
      payment: 80,
      avatar: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      id: 10,
      name: 'Evelyn Jackson',
      paymentMethod: 'card',
      payment: 100,
      avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    },
    {
      id: 11,
      name: 'Hannah Wilson',
      paymentMethod: 'paypal',
      payment: 120,
      avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
    },
    {
      id: 12,
      name: 'Charlotte Miller',
      paymentMethod: 'card',
      payment: 150,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      id: 13,
      name: 'Julian Taylor',
      paymentMethod: 'paypal',
      payment: 80,
      avatar: 'https://randomuser.me/api/portraits/women/13.jpg',
    },
  ])
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10
  const removeNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id))
  }

  const onChange = (page) => {
    setCurrentPage(page)
  }

  const paginatedNotifs = notifications.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  return (
    <div className="mb-10">
      <div className="flex flex-col gap-5 responsive-width ">
        <h2 className="font-bold text-3xl px-6 mt-5">
          Recent transaction history
        </h2>
        <div className="flex flex-col ">
          {paginatedNotifs.map((notif) => (
            <div
              key={notif.id}
              className="flex items-start gap-3 p-7 border-b border-gray-100 last:border-b-0 hover:bg-gray-100 transition"
            >
              <img
                src={notif.avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{notif.name}</h3>
                <p className="text-gray-600 text-sm">
                  via {notif.paymentMethod}
                </p>
              </div>
              <div className='text-black' >
                $ {notif.payment} <span className='text-gray-600'>USD</span>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={notifications.length}
          onChange={onChange}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        />
      </div>
    </div>
  )
}

export default Transactions
