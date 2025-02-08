import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/home/withoutLoginHome/Home'

import Layout from '../pages/components/Layout'
import AdminRoute from '../pages/ProtectedRoute/AdminRoute'
import EventData from '../pages/eventData/EventData'
import TermsAndCondition from '../pages/termsAndCondition/TermsAndCondition'
import PrivacyAndPolicy from '../pages/privacyAndPolicy/PrivacyAndPolicy'
import ContactUs from '../pages/contact/ContactUs'
import SignUp from '../pages/Auth/SignUp'
import SignIn from '../pages/Auth/SignIn'
import ForgetPassword from '../pages/Auth/ForgetPassword'
import OtpSent from '../pages/Auth/OtpSent'
import SetANewPassword from '../pages/Auth/SetANewPassword'
import RoleSelection from '../pages/Auth/ChooseRole'
import Subscription from '../pages/Auth/Subscription'
import UserHome from '../pages/home/userLoginHome/UserHome'
import ChatApp from '../pages/chat/ChatApp'
import PageNotFround from '../pages/pageNotFround/PageNotFround'
import Notifications from '../pages/notifications/Notifications'
import Transactions from '../pages/transactions/Transactions'
import ProfileSettings from '../pages/profile/ProfileSettings'
import Profile from '../pages/profile/Profile'
import AccountSettings from '../accountSettings/AccountSettings'
import Testimonial from '../pages/home/withoutLoginHome/Testimonial'
import UserVendor from '../pages/userVendor/UserVendor'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/explore-vendors',
    element: (
      <Layout>
        <AdminRoute>
          <EventData />
        </AdminRoute>
      </Layout>
    ),
  },
  {
    path: '/terms-and-condition',
    element: (
      <Layout>
        <AdminRoute>
          <TermsAndCondition />
        </AdminRoute>
      </Layout>
    ),
  },
  {
    path: '/privacy-policy',
    element: (
      <Layout>
        <AdminRoute>
          <PrivacyAndPolicy />
        </AdminRoute>
      </Layout>
    ),
  },
  {
    path: '/contact-us',
    element: (
      <Layout>
        <AdminRoute>
          <ContactUs />
        </AdminRoute>
      </Layout>
    ),
  },
  {
    path: '/sign-up',
    element: (
      <Layout>
        <SignUp />
      </Layout>
    ),
  },
  {
    path: '/sign-in',
    element: (
      <Layout>
        <SignIn />
      </Layout>
    ),
  },
  {
    path: '/forget-password',
    element: (
      <Layout>
        <ForgetPassword />
      </Layout>
    ),
  },
  {
    path: '/otp-sent',
    element: (
      <Layout>
        <OtpSent />
      </Layout>
    ),
  },
  {
    path: '/set-new-password',
    element: (
      <Layout>
        <SetANewPassword />
      </Layout>
    ),
  },
  {
    path: '/role-selection',
    element: (
      <Layout>
        <RoleSelection />
      </Layout>
    ),
  },
  {
    path: '/subscription',
    element: (
      <Layout>
        <Subscription />
      </Layout>
    ),
  },

  // user login page start
  {
    path: '/user/home',
    element: (
      <Layout>
        <UserHome />
      </Layout>
    ),
  },
  {
    path: '/user/chat',
    element: (
      <Layout>
        <ChatApp />
      </Layout>
    ),
  },
  {
    path: '*',
    element: (
      <Layout>
        <PageNotFround />
      </Layout>
    ),
  },
  {
    path: '/user/notifications',
    element: (
      <Layout>
        <Notifications />
      </Layout>
    ),
  },
  {
    path: '/user/transactions',
    element: (
      <Layout>
        <Transactions />
      </Layout>
    ),
  },
  {
    path: '/user/profile',
    element: (
      <Layout>
        <ProfileSettings />
      </Layout>
    ),
  },

  {
    path: '/user/edit-profile',
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
  {
    path: '/user/profile/account-settings',
    element: (
      <Layout>
        <AccountSettings />
      </Layout>
    ),
  },
  // {
  //   path: '/user/card',
  //   element: (
  //     <Layout>
  //       <Card />
  //     </Layout>
  //   ),
  // },

  {
    path: '/user/testimonial',
    element: (
      <Layout>
        <Testimonial />
      </Layout>
    ),
  },
  {
    path: '/user/vendors',
    element: (
      <Layout>
        <UserVendor />
      </Layout>
    ),
  },

  // {
  //   path: '/login',
  //   element: <LoginPage />,
  // },

  // {
  //   path: '/forget-password',
  //   element: <ForgetPassword />,
  // },
  // {
  //   path: '/reset-password',
  //   element: <ResetPassword />,
  // },
  // {
  //   path: '/set-new-password',
  //   element: <ChangePassword />,
  // },
  // {
  //   path: '/job-request',
  //   element: (
  //     <Layout>
  //       <AdminRoute>
  //         <JobRequest />
  //       </AdminRoute>
  //     </Layout>
  //   ),
  // },
  // {
  //   path: '/profile',
  //   element: (
  //     <Layout>
  //       <AdminRoute>
  //         <Profile />
  //       </AdminRoute>
  //     </Layout>
  //   ),
  // },

  // {
  //   path: '/notification',
  //   element: (
  //     <Layout>
  //       <AdminRoute>
  //         <Notification />
  //       </AdminRoute>
  //     </Layout>
  //   ),
  // },
  // {
  //   path: '/about-us',
  //   element: (
  //     <Layout>
  //       <About />
  //     </Layout>
  //   ),
  // },
  // {
  //   path: '/contact-us',
  //   element: (
  //     <Layout>
  //       <Contact />
  //     </Layout>
  //   ),
  // },
  // {
  //   path: '/privacy-policy',
  //   element: (
  //     <Layout>
  //       <PrivacyAndPolicy />
  //     </Layout>
  //   ),
  // },
  // {
  //   path: '/terms-and-condition',
  //   element: (
  //     <Layout>
  //       <TermsAndCondition />
  //     </Layout>
  //   ),
  // },
  // {
  //   path: '/feedback',
  //   element: (
  //     <Layout>
  //       <AdminRoute>
  //         <Feedback />
  //       </AdminRoute>
  //     </Layout>
  //   ),
  // },
  // {
  //   path: '/customer-request',
  //   element: (
  //     <Layout>
  //       <AdminRoute>
  //         <CustomerRequest />
  //       </AdminRoute>
  //     </Layout>
  //   ),
  // },
  // {
  //   path: '/business-profiles',
  //   element: (
  //     <Layout>
  //       <AdminRoute>
  //         <BusinessProfiles />
  //       </AdminRoute>
  //     </Layout>
  //   ),
  // },
  // {
  //   path: '/business-profiles/add-new-business',
  //   element: (
  //     <Layout>
  //       <AdminRoute>
  //         <RootBusinessProfile />
  //       </AdminRoute>
  //     </Layout>
  //   ),
  // },
  // {
  //   path: '/business-profiles/edit-business-profile',
  //   element: (
  //     <Layout>
  //       <AdminRoute>
  //         <RootUpdateBusinessProfile />
  //       </AdminRoute>
  //     </Layout>
  //   ),
  // },
  // {
  //   path: '/buy-credits',
  //   element: (
  //     <Layout>
  //       <AdminRoute>
  //         <BuyCredits />
  //       </AdminRoute>
  //     </Layout>
  //   ),
  // },
  // {
  //   path: '/buy-credits/payment',
  //   element: (
  //     <Layout>
  //       <AdminRoute>
  //         <Payment />
  //       </AdminRoute>
  //     </Layout>
  //   ),
  // },
  // {
  //   path: '/transaction-history',
  //   element: (
  //     <Layout>
  //       <AdminRoute>
  //         <TransactionHistory />
  //       </AdminRoute>
  //     </Layout>
  //   ),
  // },
  // {
  //   path: '/login',
  //   element: <LoginPage />,
  // },
  // {
  //   path: '/signup',
  //   element: <SignUp />,
  // },
  // {
  //   path: '/forget-password',
  //   element: <ForgetPassword />,
  // },
  // {
  //   path: '/reset-password',
  //   element: <ResetPassword />,
  // },
  // {
  //   path: '/set-new-password',
  //   element: <ChangePassword />,
  // },
])

export default router
