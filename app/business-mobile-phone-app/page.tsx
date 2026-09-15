import React from 'react'
import MobileApps from './Mobileapps';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Business Phone App for Calls & Messages | Zoiko Local",
  description:
    "Stay connected with a business phone app from Zoiko Local. Make calls, send messages and manage business communications from anywhere, anytime with ease.",
};

export default function page() {
  return (
    <>
      <MobileApps/>
    </>
  )
}
