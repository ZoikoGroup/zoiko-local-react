import React from 'react'
import CanadaLocalNumbers from './Canadalocalnumbers'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Canadian Local Phone Number for Business | Zoiko Local",
  description:
    "Get a Canadian local phone number for business calling with Zoiko Local. Search by city, province, or area code and choose an eligible number for your needs.",
};

export default function page() {
  return (
    <>
      <CanadaLocalNumbers/>
    </>
  )
}
