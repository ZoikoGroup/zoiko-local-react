import React from 'react';
import LoginClient from './LoginClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Login to Your Zoiko Local Account | Manage Global Numbers",
  description:
    "Log in to your Zoiko Local dashboard to manage global numbers, configure AI Receptionist routing, monitor live call logs, and track team telecom billing.",
};

export default function page() {
  return (
    <>
      <LoginClient />
    </>
  );
}
