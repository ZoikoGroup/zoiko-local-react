import React from 'react';
import Calling from './Calling';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Global Business Calling Solution | Zoiko Local",
  description:
    "Zoiko Local offers global business calling solution with local phone numbers, inbound & outbound calls, smart routing, voicemail, forwarding & AI Receptionist.",
};

export default function page() {
  return (
    <>
      <Calling />
    </>
  );
}
