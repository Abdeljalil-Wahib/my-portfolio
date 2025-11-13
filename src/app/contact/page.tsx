import { Metadata } from "next";
import ContactForm from "@/components/ContactForm/ContactForm";

export const metadata: Metadata = {
  title: "Contact - Let's Work Together",
  description:
    "Get in touch with Abdeljalil Wahib for  collaborations, freelance opportunities...",
  openGraph: {
    title: "Contact - Let's Work Together",
    description:
      "Get in touch with Awahib for design collaborations, freelance opportunities...",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
