import React from 'react'
import JamaicaLocalNumbersPage from './Jamaica';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Jamaica Local Phone Number for Business | Zoiko Local",
  description:
    "Need a Jamaica local phone number? Explore available numbers for business calling and communications, then choose, verify, and activate with Zoiko Local.",
};

export default function page() {
  return (
    <>
      <JamaicaLocalNumbersPage/>
    </>
  )
}