import React from 'react'
import ContactSales from './Contactsales';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Sales for Business Calling | Zoiko Local",
  description:
    "Contact Sales for business communications with Zoiko Local. Get help with local numbers, calling, video, AI Receptionist, and Skype migration.",
};

export default function page() {
  return (
    <>
      <ContactSales />
    </>
  )
}
