import React from 'react'
import Numberporting from './Numberporting'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Number Porting for Businesses | Zoiko Local",
  description:
    "Number Porting for Businesses helps you keep your existing number while upgrading to modern calling, routing, video, and AI Receptionist with Zoiko Local.",
};

export default function page() {
  return (
    <>
      <Numberporting/>
    </>
  )
}
