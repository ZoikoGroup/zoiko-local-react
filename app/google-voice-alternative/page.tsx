import React from 'react'
import Googlevoice from './Googlevoice'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Best Google Voice Alternative for Business | Zoiko Local",
  description:
    "Looking for the best Google Voice alternative for business? Zoiko Local offers local numbers, calling, video, and an AI Receptionist in one modern platform.",
};

export default function page() {
  return (
    <>
      <Googlevoice />
    </>
  )
}
