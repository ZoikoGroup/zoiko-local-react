import React from 'react'
import Resources from './Resources'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Business Phone Number Resources &amp; Guides | Zoiko Local",
  description:
    "Discover business phone number resources with Zoiko Local. Get practical guides, insights, and tips to improve calling, local numbers, and customer support.",
};


export default function page() {
  return (
    <>
      <Resources/>
    </>
  )
}
