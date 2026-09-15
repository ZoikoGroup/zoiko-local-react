import React from 'react';
import Recordingconsent from './Recordingconsent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Recording and Consent Policy | Zoiko Local",
  description:
    "Read Zoiko Local recording & consent policy including transcription, AI notes, participant notice, consent, retention, access, and privacy rights.",
};

export default function page() {
  return (
    <>
      <Recordingconsent />
    </>
  )
}
