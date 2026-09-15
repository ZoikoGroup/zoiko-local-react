import React from 'react'
import Contactsupport from './Contactsupport';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Support for Numbers & Accounts | Zoiko Local",
  description:
    "Need help with your Zoiko Local service? Contact Support for assistance with numbers, billing, accounts, porting, and technical issues.",
};

export default function page() {
  return (
    <>
      <Contactsupport/>
    </>
  )
}
