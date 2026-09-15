import React from 'react'
import TermsOfService from './Termsofservice';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service & Conditions | Zoiko Local",
  description:
    "Read Zoiko Local terms of service covering subscriptions, billing, local numbers, emergency calling, AI features, recordings, disputes, and user rights.",
};

export default function () {
  return (
    <>
      <TermsOfService />
    </>
  )
}
