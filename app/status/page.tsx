import React from 'react'
import Status from './Status';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zoiko Local Service Status & Updates | Check Live Status",
  description:
    "Check Zoiko Local service status for live updates on calling, messaging, apps, accounts, and business services. View outages, delays & service availability.",
};

export default function page() {
  return (
    <>
      <Status/>
    </>
  )
}
