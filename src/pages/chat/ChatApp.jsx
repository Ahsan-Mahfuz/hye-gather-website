import React, { useState } from 'react'
import { CiImageOn } from 'react-icons/ci'
import { FiSearch } from 'react-icons/fi'
import { IoMdSend } from 'react-icons/io'
import { IoArrowBackSharp } from 'react-icons/io5'

const initialMessages = [
  {
    name: 'Lee Williamson',
    message: "Yes, that's gonna work, hopefully.",
    time: '18:31 PM',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    messages: [{ text: "Yes, that's gonna work, hopefully.", sender: 'other' }],
  },
  {
    name: 'Eleanor Pena',
    location: 'Los Angeles, United States',
    messages: [
      { text: 'Hello Jacob', sender: 'other' },
      { text: 'How are you doing', sender: 'other' },
      { text: 'Are you free now?', sender: 'other' },
    ],
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
]

const ChatApp = () => {
  const [search, setSearch] = useState('')
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState('')
  const [selectedChat, setSelectedChat] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const handleSendMessage = () => {
    if (newMessage.trim() === '' || selectedChat === null) return

    setMessages((prevMessages) =>
      prevMessages.map((chat, index) =>
        index === selectedChat
          ? {
              ...chat,
              messages: [...chat.messages, { text: newMessage, sender: 'me' }],
            }
          : chat
      )
    )
    setNewMessage('')
  }

  return (
    <div className="flex h-screen border border-gray-400">
      {sidebarOpen && (
        <div className="w-1/5 border-r p-4 border-gray-400 max-xl:w-full max-xl:fixed max-xl:h-full max-xl:bg-white z-10">
          <div className="relative mb-4">
            <FiSearch className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-lg focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="max-h-[800px] overflow-y-auto scrollbar-none">
            {messages
              .filter((chat) =>
                chat.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((chat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 hover:bg-gray-200 rounded-lg cursor-pointer"
                  onClick={() => {
                    setSelectedChat(index)
                    setSidebarOpen(false)
                  }}
                >
                  <img
                    src={chat.avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{chat.name}</h4>
                    <p className="text-sm text-gray-500 truncate">
                      {chat.messages?.[chat.messages.length - 1]?.text}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400">
                    {chat.time || ''}
                  </span>
                </div>
              ))}
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col">
        {selectedChat !== null ? (
          <>
            <div className="p-4 border-b border-gray-400 flex items-center gap-3">
              <div
                className="cursor-pointer"
                onClick={() => setSidebarOpen(true)}
              >
                <IoArrowBackSharp className="text-2xl" />
              </div>
              <img
                src={messages[selectedChat].avatar}
                alt="avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold">
                  {messages[selectedChat].name}
                </h2>
                {messages[selectedChat].location && (
                  <p className="text-sm text-gray-500">
                    {messages[selectedChat].location}
                  </p>
                )}
              </div>
            </div>
            <div className="flex-1 p-6 flex flex-col gap-3 overflow-y-auto scrollbar-none">
              {messages[selectedChat].messages.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                    msg.sender === 'other'
                      ? 'bg-gray-200 self-start'
                      : 'bg-blue-800 text-white self-end'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="p-4 flex items-center">
              <CiImageOn className="text-5xl text-blue-800 cursor-pointer" />
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full p-2 h-[48px] border border-gray-400 rounded-lg focus:outline-none"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                className="ml-2 p-2 bg-blue-800 hover:bg-blue-700 cursor-pointer text-white rounded-lg"
                onClick={handleSendMessage}
              >
                <IoMdSend />
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center flex-1 text-gray-500">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatApp
