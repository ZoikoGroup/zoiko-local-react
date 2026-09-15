import React from 'react'
import Emergencycalling from './Emergencycalling';
import {Metadata} from 'next'

export const metadata: Metadata = {
  title: "Emergency Calling with Internet Services | Zoiko Local",
  description:
    "Learn how emergency calling works with internet-based services, including availability, location accuracy, power, internet, and backup requirements.",
};

export default function page() {
  return (
    <>
        <Emergencycalling/> 
    </>
  )
}
