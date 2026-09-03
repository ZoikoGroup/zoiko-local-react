import type { Metadata } from "next";
import InternationalExpansionClient from "./InternationalExpansionClient";

export const metadata: Metadata = {
  title: "International Business Expansion | Zoiko Local",
  description:
    "Drive international business expansion with Zoiko Local. Get local phone numbers, enter new markets, connect with customers, and grow your business globally..",
};

export default function Page() {
  return <InternationalExpansionClient />;
}
