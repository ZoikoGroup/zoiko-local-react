import FounderLedBusiness from "./Founderledbusiness";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Phone Numbers for Founders | Zoiko Local",
  description:
    "Get business phone numbers for founders with Zoiko Local. Stay connected with customers, manage calls professionally, and build stronger business presence.",
};
export default function page(){


    return(

        <>
        
        <FounderLedBusiness/>
        </>
    );
}