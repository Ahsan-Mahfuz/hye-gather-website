import React from 'react'
import { Form, Input, Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import signUp from '../../assets/signUp.png'

const SignIn = () => {
  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    navigate('/user/home') // '/user/home' , '/vendor/home'
  }

  return (
    <div className=" h-screen flex  flex-col lg:flex-row   ">
      <div className="w-1/2 hidden lg:block">
        <img src={signUp} alt="Login" className="w-full h-full object-cover" />
      </div>
      <div className=" mx-auto lg:w-1/2 h-screen  flex flex-col justify-center items-center p-12 ">
        <div className="flex items-center flex-col max-w-[500px] w-full">
          <h1
            className="font-bold mb-2 text-center"
            style={{ fontSize: 'clamp(20px, 8vw, 40px)' }}
          >
            Login to Account
          </h1>
          <p
            className="text-xl mb-8  text-center"
            style={{ fontSize: 'clamp(12px, 5vw, 20px)' }}
          >
            Please enter your email and password to continue
          </p>
        </div>

        <Form
          requiredMark={false}
          layout="vertical"
          onFinish={onFinish}
          className="w-full max-w-md overflow-y-scroll  scrollbar-none"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <Form.Item
            name="email"
            label={<span className=" ">Email</span>}
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please enter your email!',
              },
            ]}
          >
            <Input
              placeholder="Enter Email"
              className="h-[42px] px-4  border-gray-300 rounded-md"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label={<span className="">Password</span>}
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password
              placeholder="Enter password"
              className="custom-password-input h-[42px] px-4 border-gray-300 rounded-md"
              iconRender={(visible) =>
                visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>

          <div className="text-end -mt-4">
            <Link
              to={`/forget-password`}
              className=" text-md text-black"
              style={{
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Forget password
            </Link>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                padding: '1.25rem',
              }}
              className="w-full   rounded-full h-11 mt-5"
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
        <div className="  text-xs">
          Don't have an account?{' '}
          <Link
            to={`/role-selection`}
            className=" hover:underline text-blue-800"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
