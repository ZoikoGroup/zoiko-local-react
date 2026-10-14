import React from 'react';
import Startfree from './Startfree';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Start Free with Zoiko Local | Get Local Numbers",
  description:
    "Start free with Zoiko Local and get local phone numbers with calling, AI Receptionist, video calls, smart voicemail, and global communication features.",
};

export default function page() {
  return (
    <>
      <Startfree />
    </>
  );
}
