import Facebook from "@/assets/icons/facebook";
import Github from "@/assets/icons/Github";
import Instagram from "@/assets/icons/Instagram";
import LinkedIn from "@/assets/icons/LinkedIn";

export const footerData = {
  description:
    "PayBondhu is a secure and fast digital wallet that allows you to send, receive, and manage money anytime, anywhere. Enjoy seamless transactions, reliable security, and an easy-to-use experience.",
  socialSection: [
    {
      label: "Facebook",
      Icon: Facebook,
      href: "https://www.facebook.com/sumon.kaysar.sk",
    },
    {
      label: "Github",
      Icon: Github,
      href: "https://www.github.com/sumonkaysar",
    },
    {
      label: "Instagram",
      Icon: Instagram,
      href: "https://www.instagram.com/sumon.kaysar.sk",
    },
    {
      label: "LinkedIn",
      Icon: LinkedIn,
      href: "https://www.linkedin.com/in/sumonkaysar",
    },
  ],
  linkSection: [
    {
      section: "Services",
      links: [
        { label: "Features", to: "/features" },
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" },
        { label: "FAQs", to: "/faq" },
      ],
    },
    {
      section: "Legal",
      links: [
        { label: "Terms & Conditions", to: "/terms-conditions" },
        { label: "Privacy Policy", to: "/privacy-policy" },
        { label: "Refund Policy", to: "/refund-policy" },
      ],
    },
    {
      section: "Connect",
      links: [
        { label: "Github", to: "https://www.github.com/sumonkaysar" },
        { label: "Facebook", to: "https://www.facebook.com/sumon.kaysar.sk" },
        { label: "LinkedIn", to: "https://www.linkedin.com/in/sumonkaysar" },
        { label: "Instagram", to: "https://www.instagram.com/sumon.kaysar.sk" },
      ],
    },
  ],
};
