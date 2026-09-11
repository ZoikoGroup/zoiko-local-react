import React from 'react'
import Teamsphone from './Teamsphone'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Teams Phone Alternative for Business | Zoiko Local",
  description:
    "Looking for a Teams Phone alternative for business? Zoiko Local offers local numbers, calling, video, and an AI Receptionist in one modern platform.",
};

export default function page() {
  return (
    <>
      <Teamsphone/>
    </>
  )
}
