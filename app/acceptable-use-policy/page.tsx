import React from 'react'
import AcceptableUsePolicy from './Acceptablepolicy';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Acceptable Use & Trust Policy | Zoiko Local",
  description:
    "Read Zoiko Local acceptable use policy for calling, messaging, AI, recording, APIs, spoofing, fraud, and other rules designed to prevent abuse.",
};

export default function page() {
  return (
    <>
     <AcceptableUsePolicy /> 
    </>
  )
}
