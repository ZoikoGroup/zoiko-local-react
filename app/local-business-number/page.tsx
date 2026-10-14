import React from 'react';
import Localbusinessnumbers from "./Localbusinessnumbers";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Buy Local Business Numbers Online | Zoiko Local",
  description:
    "Get a local business number with Zoiko Local and build customer trust. Connect calls, routing, video, and AI Receptionist tools for businesses anywhere.",
};

export default function page() {
  return (
    <>
      <Localbusinessnumbers />
    </>
  );
}