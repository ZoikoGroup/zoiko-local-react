import React from 'react'
import UsLocalNumbers from './Uslocalnumbers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "US Local Phone Number for Business | Zoiko Local Today",
  description:
    "Looking for a US local phone number? Zoiko Local helps businesses get local numbers for calling and messaging, with flexible communication from anywhere.",
};

export default function page() {
  return (
    <>
      <UsLocalNumbers/>
    </>
  )
}
