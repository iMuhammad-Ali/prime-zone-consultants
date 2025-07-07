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
      { name: "Study Destinations", href: "/study-destinations" },
      { name: "Universities", href: "/universities" },
      // { name: "Courses", href: "/courses" },
      // { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about-us" },
      { name: "Team", href: "/team" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact-us" },
    ],
  },
  // {
  //   title: "Resources",
  //   links: [
  //     { name: "Help", href: "#" },
  //     { name: "Sales", href: "#" },
  //     { name: "Advertise", href: "#" },
  //     { name: "Privacy", href: "#" },
  //   ],
  // },
];

const defaultSocialLinks = [
  {
    icon: <Instagram className="size-5" />,
    href: "https://www.instagram.com/primezoneconsultantsofficial?igsh=MXM0eWlqYXQwdGswbQ==",
    label: "Instagram",
  },
  {
    icon: <Facebook className="size-5" />,
    href: "https://www.facebook.com/pzc786?_rdc=2&_rdr",
    label: "Facebook",
  },
  {
    icon: <Youtube className="size-5" />,
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
    title: "Prime Zone Consultants",
  },
  sections = defaultSections,
  description = "A collection of components for your startup business or side project.",
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} Prime Zone Consultants. All rights reserved.`,
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <footer className="border-t">
      <div className="px-4 sm:px-8 pt-8 flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
        <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
          {/* Logo */}
          <div className="flex items-center gap-2 lg:justify-start">
            <a href={logo.url}>
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                className="h-8"
              />
            </a>
            <h2 className="text-xl font-semibold">{logo.title}</h2>
          </div>
          <p className="max-w-[70%] text-sm text-foreground">{description}</p>
          <ul className="flex items-center space-x-6 text-foreground">
            {socialLinks.map((social, idx) => (
              <li key={idx} className="font-medium hover:text-foreground/75">
                <a href={social.href} target="_blank" aria-label={social.label}>
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid w-full gap-6 md:grid-cols-2 lg:gap-20">
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="mb-4 font-bold">{section.title}</h3>
              <ul className="space-y-3 text-sm text-foreground">
                {section.links.map((link, linkIdx) => (
                  <li
                    key={linkIdx}
                    className="font-medium hover:text-foreground/75"
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
        className="px-4 sm:px-8 pt-8 mt-8 flex flex-col justify-between gap-4 border-t py-8 text-sm font-medium text-foreground md:flex-row md:items-center md:text-left"
      >
        <p className="order-2 lg:order-1">{copyright}</p>
        <ul className="order-1 flex flex-col gap-4 md:order-2 md:flex-row">
          {legalLinks.map((link, idx) => (
            <li key={idx} className="hover:text-foreground/75 hover:underline">
              <Link to={link.href}> {link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
