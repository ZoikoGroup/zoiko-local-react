import React from 'react'
import Careers from './Careers'
import { Metadata } from 'next';

export const metadata: Metadata = { 
  title: "Careers & Job Openings | Zoiko Local",
  description:
    "Explore careers at Zoiko Local and discover open roles across engineering, product, design, telecom operations, security, and customer experience teams.",
};

export default function page() {
  return (
    <>
      <Careers/>
    </>
  )
}
