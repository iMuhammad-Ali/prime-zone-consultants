import { Facebook, Instagram, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "~/assets/images/logo-white.png";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Product",
    links: [
      // { name: "Study Destinations", href: "/study-destinations" },
      { name: "Universities", href: "/universities" },
      { name: "Services", href: "/services" },
      { name: "Success Stories", href: "/success-stories" },
      // { name: "Courses", href: "/courses" },
      // { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about-us" },
      { name: "Team", href: "/team" },
      { name: "Contact", href: "/contact-us" },
    ],
  },
  {
    title: "Study Destinations",
    links: [
      { name: "Germany", href: "/universities?country=germany" },
      { name: "France", href: "/universities?country=france" },
      { name: "Italy", href: "/universities?country=italy" },
      {
        name: "Eligibility Check",
        href: "/eligibility-check",
      },
      // { name: "Privacy", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  {
    icon: (
      <Instagram className="w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw] md:w-[2.5vw] md:h-[2.5vw] lg:w-[2vw] lg:h-[2vw]" />
    ),
    href: "https://www.instagram.com/primezoneconsultantsofficial?igsh=MXM0eWlqYXQwdGswbQ==",
    label: "Instagram",
  },
  {
    icon: (
      <Facebook className="w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw] md:w-[2.5vw] md:h-[2.5vw] lg:w-[2vw] lg:h-[2vw]" />
    ),
    href: "https://www.facebook.com/pzc786?_rdc=2&_rdr",
    label: "Facebook",
  },
  {
    icon: (
      <Youtube className="w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw] md:w-[2.5vw] md:h-[2.5vw] lg:w-[2vw] lg:h-[2vw]" />
    ),
    href: "https://www.youtube.com/@PrimeZoneConsultants",
    label: "Youtube",
  },
];

const defaultLegalLinks = [
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "Terms and Conditions", href: "/terms-and-conditions" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

const Footer = ({
  logo = {
    url: "/",
    src: Logo,
    alt: "logo",
    title: "Prime Zone Consultants (PZC)",
  },
  sections = defaultSections,
  description = "A collection of components for your startup business or side project.",
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} Prime Zone Consultants (PZC). All rights reserved.`,
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <footer className="border-t">
      <div className="px-[4vw] sm:px-[3vw] lg:px-[2vw] pt-[6vw] sm:pt-[4vw] lg:pt-[2vw] flex w-full flex-col justify-between gap-[6vw] sm:gap-[4vw] lg:gap-[2.5vw] lg:flex-row lg:items-start lg:text-left">
        <div className="flex w-full flex-col justify-between gap-[4vw] sm:gap-[3vw] lg:gap-[1.5vw] lg:items-start">
          {/* Logo */}
          <div className="flex items-center gap-[2vw] sm:gap-[1.5vw] lg:gap-[0.5vw] lg:justify-start">
            <a href={logo.url}>
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                className="h-[8vw] sm:h-[6vw] lg:h-[2vw]"
              />
            </a>
            <h2 className="text-[4.5vw] sm:text-[3vw] lg:text-[1.5vw] font-semibold">
              {logo.title}
            </h2>
          </div>
          <p className="max-w-[70vw] sm:max-w-[50vw] lg:max-w-[20vw] text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] text-foreground">
            {description}
          </p>
          <ul className="flex items-center gap-[6vw] sm:gap-[4vw] lg:gap-[1.5vw] text-foreground">
            {socialLinks.map((social, idx) => (
              <li
                key={idx}
                className="font-medium hover:text-foreground/75 transition-colors"
              >
                <a href={social.href} target="_blank" aria-label={social.label}>
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid w-full gap-[6vw] sm:gap-[4vw] lg:gap-[3vw] grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="mb-[3vw] sm:mb-[2vw] lg:mb-[1vw] font-bold text-[4vw] sm:text-[3vw] lg:text-[1.25vw]">
                {section.title}
              </h3>
              <ul className="space-y-[2.5vw] sm:space-y-[1.5vw] lg:space-y-[0.75vw] text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] text-foreground">
                {section.links.map((link, linkIdx) => (
                  <li
                    key={linkIdx}
                    className="font-medium hover:text-foreground/75 transition-colors"
                  >
                    <Link to={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        id="privacy-policy"
        className="px-[4vw] sm:px-[3vw] lg:px-[2vw] pt-[6vw] sm:pt-[4vw] lg:pt-[2vw] mt-[6vw] sm:mt-[4vw] lg:mt-[2vw] flex flex-col justify-between gap-[4vw] sm:gap-[3vw] lg:gap-[1vw] border-t py-[6vw] sm:py-[4vw] lg:py-[2vw] text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] font-medium text-foreground md:flex-row md:items-center md:text-left"
      >
        <p className="order-2 lg:order-1">{copyright}</p>
        <ul className="order-1 flex flex-col gap-[3vw] sm:gap-[2vw] lg:gap-[1vw] md:order-2 md:flex-row">
          {legalLinks.map((link, idx) => (
            <li
              key={idx}
              className="hover:text-foreground/75 hover:underline transition-colors"
            >
              <Link to={link.href}> {link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
