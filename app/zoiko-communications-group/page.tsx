import React from 'react'
import AboutCommunicationsGroup from './Communications';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zoiko Communications Group | Modern Communications",
  description:
    "Discover Zoiko Communications Group, delivering modern communications solutions across local numbers, voice, messaging, video and AI for businesses.",
};

export default function page() {
  return (
    <>
      <AboutCommunicationsGroup/>
    </>
  )
}
