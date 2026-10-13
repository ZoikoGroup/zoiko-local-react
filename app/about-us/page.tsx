import React from 'react';
import { Aboutus } from "./Aboutus";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Zoiko Local | Local Numbers for Global Business",
  description:
    "Learn about Zoiko Local and our mission to help businesses connect globally with local phone numbers, smart calling solutions, and seamless communication.",
};

export default function page() {
  return (
    <>
      <Aboutus />
    </>
  );
}