import React from 'react'
import Video from './Video'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Professional Business Video Meetings | Zoiko Local",
    description:
        "Host professional video meetings with Zoiko Local featuring meeting links, screen sharing, AI-powered notes, customer calls &amp; seamless team collaboration.",
};
export default function page() {
  return (
    <>
      <Video />
    </>
  )
}
