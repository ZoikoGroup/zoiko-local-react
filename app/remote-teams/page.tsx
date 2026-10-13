import React from 'react';
import { Remoteteams } from "./Remoteteams";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Remote Team Calling Solutions | Zoiko Local",
  description:
    "Improve business communication with Zoiko Local remote team calling solution. Connect remote employees through secure, professional business calls.",
};

export default function page() {
  return (
    <>
      <Remoteteams />
    </>
  );
}