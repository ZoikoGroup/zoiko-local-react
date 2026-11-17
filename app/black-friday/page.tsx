import type { Metadata } from "next";
import {
  ZoikoLocalHero,
  ExploreUSLocalNumbers,
  HowToGetUSLocalNumber,
  FindThePlanThatFits,
  KeepYourNumberAndCapabilities,
  AvailableNumbersShownLive,
  BlackFridayCta,
  CallerIdentityAndSafety,
  WhyZoikoLocal,
  USLocalNumberFAQ,
  GetStartedCta,
} from "./components";

export const metadata: Metadata = {
  title: "Black Friday Deals 2026 – Special Offers | Zoiko Local",
  description:
    "Discover Zoiko Local's Black Friday offers local phone numbers, business calling, video, and AI receptionist services. Explore available deals today.", //[cite: 1]
};

export default function BlackFridayPage() {
  return (
    <main>
      <ZoikoLocalHero />
      <ExploreUSLocalNumbers />
      <HowToGetUSLocalNumber />
      <FindThePlanThatFits />
      <KeepYourNumberAndCapabilities />
      <AvailableNumbersShownLive />
      <BlackFridayCta />
      <CallerIdentityAndSafety />
      <WhyZoikoLocal />
      <USLocalNumberFAQ />
      <GetStartedCta />
    </main>
  );
}
