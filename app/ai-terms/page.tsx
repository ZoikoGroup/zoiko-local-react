import React from 'react';
import AiTerms from './Aiterms';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Terms of Service & Usage Guidelines | Zoiko Local",
  description:
    "Read Zoiko Local AI terms for clear guidance on AI-enabled features, generated outputs, user responsibilities, AI Receptionist, synthetic voice & automation.",
};


export default function page() {
  return (
    <>
      <AiTerms />
    </>
  )
}
