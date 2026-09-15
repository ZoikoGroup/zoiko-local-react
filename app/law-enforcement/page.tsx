import React from 'react'
import LawEnforcementRequests from './Lawenforcement';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Law Enforcement Requests | Zoiko Local",
  description:
    "Law Enforcement Requests at Zoiko Local undergo checks for authority, jurisdiction, scope, and legal validity before any responsive data is disclosed.",
};

export default function page() {
  return (
    <>
      <LawEnforcementRequests/>
    </>
  )
}
