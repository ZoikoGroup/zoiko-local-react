import React from 'react'
import PrivacyPolicy from './PrivacyPolicy';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy & Data Protection | Zoiko Local",
  description:
    "Read Zoiko Local privacy policy to learn what personal data we collect, why we collect it, how long we retain it, who we share it with, and your rights.",
};

export default function page() {
  return (
    <>
      <PrivacyPolicy/>
    </>
  )
}
