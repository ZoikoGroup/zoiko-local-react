import React from 'react'
import Accessibility from './Accessibility';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Accessibility Statement and Information | Zoiko Local",
  description:
    "Learn about Accessibility at Zoiko Local, including WCAG 2.2 AA goals, assistive technology support, known limitations, testing, and accessibility support.",
};

export default function page() {
  return (
    <>
      <Accessibility />
    </>
  )
}
