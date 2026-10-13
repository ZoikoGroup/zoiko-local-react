import React from 'react';
import Buisiness from "./Buisiness";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Business Communications Platform | Zoiko Local",
  description:
    "Manage business calls, video meetings, local phone numbers, and AI-powered routing with Zoiko Local all-in-one business communication platform.",
};

export default function page() {
  return (
    <>
      <Buisiness />
    </>
  );
}