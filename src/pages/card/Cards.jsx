import React from 'react'
import { Card, Button, Typography } from 'antd'

const Cards = () => {
  return (
    <Card
      className="max-w-md flex flex-row rounded-lg shadow-lg overflow-hidden"
      bodyStyle={{ padding: '20px' }}
    >
      {/* Image Section */}
      <div className="w-1/3">
        <img
          src={`https://picsum.photos/seed/100/200/300`}
          alt="Movie"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-2/3 p-4">
        <Typography.Title level={4} className="text-gray-900">
          New movie is released!
        </Typography.Title>
        <Typography.Text className="text-gray-600">
          Click the button to watch on Jetflix app.
        </Typography.Text>

        {/* Watch Button */}
        <div className="mt-4">
          <Button type="primary" className="bg-blue-600 hover:bg-blue-700">
            Watch
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default Cards
