import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/home/Home'

import Layout from '../pages/components/Layout'
import AdminRoute from '../pages/ProtectedRoute/AdminRoute'
import EventData from '../pages/eventData/EventData'
import TermsAndCondition from '../pages/termsAndCondition/TermsAndCondition'
import PrivacyAndPolicy from '../pages/privacyAndPolicy/PrivacyAndPolicy'
import ContactUs from '../pages/contact/ContactUs'
import SignUp from '../pages/Auth/SignUp'

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
    path: '/event-data',
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
    element: <SignUp />,
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
