import React from 'react';
import Openphonealternative from './Openphonealternative';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Best OpenPhone Alternative for Business | Zoiko Local",
  description:
    "Find the best OpenPhone alternative for business with Zoiko Local. Get local numbers, business calling, video, and an AI Receptionist in one workspace.",
};

export default function page() {
  return (
    <>
      <Openphonealternative />
    </>
  );
}
