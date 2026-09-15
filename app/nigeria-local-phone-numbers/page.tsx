import React from 'react'
import NigeriaLocalNumbersPage from './Nigeria';
import { Metadata } from 'next';

export const metadata: Metadata = {
 title: "Nigeria Local Phone Number | Zoiko Local",
  description:
    "Find a Nigerian local phone number for business calling. Search live inventory by city or area, choose an eligible number, and activate with Zoiko Local.",
};

export default function page() {
  return (
    <>
      <NigeriaLocalNumbersPage/>
    </>
  )
}
