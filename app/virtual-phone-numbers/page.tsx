import React from 'react'
import Virtualphone from './Virtualphone'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Get Virtual Phone Numbers for Business | Zoiko Local",
  description:
    "Get virtual phone numbers for business with Zoiko Local. Choose local numbers, manage calls, and stay connected with customers from anywhere.",
};

export default function page() {
  return (
    <>
      <Virtualphone />
    </>
  )
}
