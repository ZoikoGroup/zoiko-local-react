import React from 'react';
import Getlocalnumber from './Getlocalnumber';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Get a Local Phone Number | Zoiko Local",
  description:
    "Get a local phone number for your business with Zoiko Local. Choose numbers by country, city, or area code with calling, routing, voicemail, and AI tools.",
};

export default function page() {
  return (
    <>
      <Getlocalnumber />
    </>
  );
}
