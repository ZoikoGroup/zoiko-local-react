import React from 'react';
import Aireceptionist from './Aireceptionist';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Receptionist for Business | Zoiko Local",
  description:
    "Zoiko Local offers an AI receptionist for business with smart call answering, intelligent routing, voicemail, lead capture, and 24/7 availability.",
};

export default function page() {
  return (
    <>
      <Aireceptionist />
    </>
  );
}
