import React from 'react'
import { Form, Input, Button } from 'antd'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import login from '../../assets/logIn.png'

const SignUp = () => {
  const location = useLocation()
  const { role } = location.state
  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    if (role === 'customer') {
      navigate('/sign-in')
    } else if (role === 'vendor') {
      navigate('/subscription')
    }
  }

  return (
    <div className="h-screen flex  flex-col lg:flex-row">
      <div className="w-1/2 hidden lg:block">
        <img src={login} alt="Login" className="w-full h-full object-cover" />
      </div>
      <div className=" mx-auto lg:w-1/2 h-screen  flex flex-col justify-center items-center p-12 ">
        <div className="flex items-center flex-col max-w-[500px] w-full">
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
                padding: '1.25rem',
              }}
              className="w-full   rounded-full h-11 mt-5"
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div className="  text-xs">
          Already have an account?{' '}
          <Link to={`/sign-in`} className=" hover:underline text-blue-800">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
