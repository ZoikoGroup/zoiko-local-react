import React from 'react'
import CaribbeanLocalNumbers from './Caribbeanlocalnumber';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Get Caribbean Local Phone Number | Zoiko Local",
  description:
    "Get Caribbean local phone number for business calling and communications. Explore supported markets, check availability, and activate with Zoiko Local.",
};

export default function page() {
  return (
    <>
      <CaribbeanLocalNumbers/>
    </>
  )
}
