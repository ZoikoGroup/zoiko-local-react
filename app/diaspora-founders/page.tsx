import  Diaspora from "./Diaspora";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diaspora Founder Phone Numbers | Zoiko Local",
  description:
    "Get diaspora founders local numbers with Zoiko Local. Build trusted local presence, connect with customers, and manage business calls across borders.",
};
export default function page(){


    return(
        <>
        
        <Diaspora/>
        </>
    );
}