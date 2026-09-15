import React from 'react'
import PressNewsroom from './Press';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Press Releases & Company News | Zoiko Local",
  description:
    "Explore the Zoiko Local newsroom for official announcements, product news, press releases, company updates, media resources, and the latest news.",
};

export default function page() {
  return (
    <>
      <PressNewsroom/>
    </>
  )
}
