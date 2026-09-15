import React from 'react'
import DataProcessingAgreement from './DataAgreement';
import { Metadata } from 'next';

export const metadata: Metadata = {
title: "Data Processing Agreement | Zoiko Local",
  description:
    "Read Zoiko Local data processing agreement for details on personal data processing, security measures, data retention, privacy obligations, and compliance.",
};

export default function page() {
  return (
    <>
      <DataProcessingAgreement/>
    </>
  )
}
