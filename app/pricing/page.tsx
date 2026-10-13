import React from 'react';
import Planspricing from './Planspricing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Local Phone Number Plans & Pricing | Zoiko Local",
  description:
    "Compare local phone number plans & pricing with Zoiko Local. Discover business calling features, flexible plans, and local numbers designed for your needs.",
};

export default function page() {
  return (
    <>
      <Planspricing />
    </>
  );
}
