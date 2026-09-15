import React from 'react'
import UnitedKingdom from './UnitedKingdom';
import { Metadata } from 'next';

export const metadata: Metadata = {
 title: "UK Local Phone Number for Business | Zoiko Local",
  description:
    "Get a local UK phone number for business calls and communications. Search live availability by city or area and activate your number with Zoiko Local.",
};

export default function page() {
  return (
    <>
      <UnitedKingdom/>
    </>
  )
}
