import React from 'react'
import SouthAfricaLocalNumbers from './SouthAfricaLocalNumbers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "South Africa Local Phone Number for Calling | Zoiko Local",
  description:
    "Search for a South Africa local phone number by city or area. Select an eligible number for business communications and activate with Zoiko Local.",
};

export default function page() {
  return (
    <>
      <SouthAfricaLocalNumbers/>
    </>
  )
}
