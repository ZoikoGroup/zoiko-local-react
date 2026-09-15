import React from 'react'
import Europe from './Europe';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Find Europe Local Phone Number | Zoiko Local",
  description:
    "Grow your business presence with Europe local phone numbers. Explore supported markets, find available numbers & connect with customers using Zoiko Local.",
};

export default function page() {
  return (
    <>
      <Europe/>
    </>
  )
}
