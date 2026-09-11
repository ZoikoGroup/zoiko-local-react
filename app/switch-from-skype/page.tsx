import React from 'react'
import Switchfromskype from './Switchfromskype'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Switch From Skype to Modern Business Calling | Zoiko Local",
  description:
    "Switch from Skype to modern business calling with Zoiko Local. Get local numbers, video, and an AI Receptionist in one connected workspace for your business.",
};


export default function page() {
  return (
    <>
      <Switchfromskype/>
    </>
  )
}
