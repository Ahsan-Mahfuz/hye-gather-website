import React from 'react'
import { Form, Input, Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import signUp from '../../assets/signUp.png'

const SignUp = () => {
  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    navigate('/login')
  }

  return (
    <div className="fixed inset-0 h-screen flex  flex-col lg:flex-row">
      <div className="w-1/2 hidden lg:block">
        <img src={signUp} alt="Login" className="w-full h-full object-cover" />
      </div>
      <div className="bg-white mx-auto lg:w-1/2 h-screen  flex flex-col justify-center items-center p-12 ">
        <div className='flex items-center flex-col max-w-[500px] w-full'>
          <h1
            className="font-bold mb-2 text-center"
            style={{ fontSize: 'clamp(20px, 8vw, 40px)' }}
          >
            Create an account
          </h1>
          <p
            className="text-xl mb-8  text-center"
            style={{ fontSize: 'clamp(12px, 5vw, 20px)' }}
          >
            Join us today and start planning your events or managing your
            services seamlessly!
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
            name="username"
            label={<span className=" ">User Name</span>}
            rules={[
              {
                required: true,
                message: 'Please enter your username!',
              },
            ]}
            placeholder="Enter username"
          >
            <Input
              placeholder="Enter username"
              className="h-[42px] px-4 w-full  border-gray-300 rounded-md"
            />
          </Form.Item>

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
            name="phone"
            label={<span className="">Phone Number</span>}
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
              {
                pattern: /^[0-9]+$/,
                message: 'Please enter a valid phone number!',
              },
            ]}
          >
            <Input
              placeholder="Enter Phone Number"
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

          <Form.Item
            name="confirm"
            label={<span className="">Confirm Password</span>}
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: 'Please enter your confirm password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    new Error(
                      'The two passwords that you entered do not match!'
                    )
                  )
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Enter confirm password"
              className="custom-password-input h-[42px] px-4 border-gray-300 rounded-md"
              iconRender={(visible) =>
                visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: '#0D9276',
                color: 'white',
                padding: '1.25rem',
              }}
              className="w-full rounded-full h-11 mt-10"
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div className=" mt-11 text-xs">
          Have an account?{' '}
          <Link
            to={`/login`}
            className=" underline"
            style={{ textDecoration: 'underline' }}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
