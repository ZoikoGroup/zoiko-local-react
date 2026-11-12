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
