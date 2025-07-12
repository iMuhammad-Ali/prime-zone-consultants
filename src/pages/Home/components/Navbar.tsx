import { Menu } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import AutoLoop from "~/pages/Home/components/AutoLoop";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { useOpenConsultantModal } from "~/hooks/use-consultant";
import Logo from "~/assets/images/logo-white.png";
import countries from "~/data/countries.json";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: any[];
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
}

const Navbar = ({
  logo = {
    url: "/",
    src: Logo,
    alt: "logo",
    title: "Prime Zone Consultants",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "Study Destinations",
      url: "/study-destinations",
      items: countries.map((country) => ({
        title: (
          <div className="flex items-center gap-3">
            <img
              src={country.flag}
              alt={country.code}
              className="w-[35px] h-[20px] sm:w-[2.5vw] sm:h-[1.4vw] object-cover border"
            />
            Study in {country.name}
          </div>
        ),
        url: `/universities?country=${country.name
          .toLowerCase()
          .replace(/\s+/g, "-")}`,
      })),
    },
    {
      title: "About Us",
      url: "/about-us",
    },
    {
      title: "Services",
      url: "/services",
    },
    {
      title: "Team",
      url: "/team",
    },
    {
      title: "Success Stories",
      url: "/success-stories",
    },
    {
      title: "Contact Us",
      url: "/contact-us",
    },
  ],
}: NavbarProps) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <section className="py-[2vw] sm:py-[1.5vw] lg:py-[1vw] absolute top-0 left-0 right-0">
      {/* Desktop Menu */}
      <AutoLoop />
      <nav className="hidden justify-between custom:flex custom:items-center px-[4vw] sm:px-[3vw] lg:px-[2vw]">
        {/* Logo */}
        <Link
          to={logo.url}
          className="flex items-center gap-[1vw] sm:gap-[0.75vw] lg:gap-[1vw]"
        >
          <img
            src={logo.src}
            className="max-h-[6vw] sm:max-h-[4vw] lg:max-h-[2vw]"
            alt={logo.alt}
          />
          <span className="text-[4vw] sm:text-[3vw] lg:text-[1.25vw] font-semibold tracking-tighter">
            {logo.title}
          </span>
        </Link>
        <div className="flex items-center gap-[4vw] sm:gap-[3vw] lg:gap-[1.5vw]">
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="flex gap-[1vw] sm:gap-[0.75vw] lg:gap-[0.5vw]">
          <Button onClick={useOpenConsultantModal()}>Consult with us</Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="block custom:hidden px-[4vw] sm:px-[3vw]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to={logo.url}
            className="flex items-center gap-[1vw] sm:gap-[0.75vw]"
          >
            <img
              src={logo.src}
              className="max-h-[8vw] sm:max-h-[6vw]"
              alt={logo.alt}
            />
          </Link>
          <Sheet open={showSidebar} onOpenChange={setShowSidebar}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="w-[4vw] h-[4vw] sm:w-[3vw] sm:h-[3vw]" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link
                    to={logo.url}
                    className="flex items-center gap-[1vw] sm:gap-[0.75vw]"
                    onClick={() => setShowSidebar(false)}
                  >
                    <img
                      src={logo.src}
                      className="max-h-[8vw] sm:max-h-[6vw]"
                      alt={logo.alt}
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-[4vw] sm:gap-[3vw] py-[3vw] sm:py-[2vw]">
                <Accordion
                  type="single"
                  collapsible
                  className="flex w-full flex-col gap-[1vw] sm:gap-[0.75vw]"
                >
                  {menu.map((item) =>
                    renderMobileMenuItem(item, setShowSidebar)
                  )}
                </Accordion>

                <div className="flex flex-col gap-[2vw] sm:gap-[1.5vw]">
                  <Button onClick={useOpenConsultantModal()}>
                    Consult with us
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  const location = useLocation();
  const isActive = location.pathname === item.url;
  const [isOpen, setIsOpen] = useState(false);

  if (item.items) {
    return (
      <Popover
        key={item.title}
        modal={false}
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <PopoverTrigger asChild>
          <button
            className={`inline-flex items-center px-4 py-2 rounded-md bg-background hover:bg-primary text-sm font-medium cursor-pointer hover:text-background ${
              isOpen && "bg-primary text-background opacity-75"
            }`}
            type="button"
          >
            {item.title}
          </button>
        </PopoverTrigger>
        <PopoverContent className="bg-popover text-popover-foreground p-[2vw] sm:p-[1.5vw] lg:p-[0.75vw] min-w-[80vw] sm:min-w-[35vw]">
          <div className="grid grid-cols-2 gap-[3vw] sm:gap-[2vw] lg:gap-[1vw] max-h-[50vw] sm:max-h-[40vw] lg:max-h-[16vw] overflow-y-auto">
            {item.items.map((subItem) => (
              <Link
                key={subItem.title}
                to={subItem.url}
                className="block rounded-md p-[2vw] sm:p-[1.5vw] lg:p-[0.75vw] hover:bg-secondary cursor-pointer text-[3vw] sm:text-[2vw] lg:text-[1vw]"
                onClick={() => setIsOpen(false)}
              >
                {subItem.title}
              </Link>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    );
  }

  return (
    // Menu Items except for dropdowns
    <Link
      key={item.title}
      to={item.url}
      className={`inline-flex h-10 w-max items-center justify-center rounded-md 2xl:rounded-[0.3vw] bg-background px-4 py-2 2xl:px-[1vw] 2xl:py-[1vw] text-sm font-medium transition-colors hover:bg-primary hover:text-accent-foreground ${
        isActive ? "bg-secondary/40" : ""
      }`}
    >
      {item.title}
    </Link>
  );
};

const renderMobileMenuItem = (
  item: MenuItem,
  setShowSidebar: (showSidebar: boolean) => void
) => {
  const location = useLocation();
  const isActive = location.pathname === item.url;

  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md px-4 py-2 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link
      key={item.title}
      to={item.url}
      className={`text-md font-semibold px-4 py-2 rounded-tl rounded-bl ${
        isActive && "border-r-2 border-white bg-secondary/40"
      }`}
      onClick={() => setShowSidebar(false)}
    >
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent"
      to={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export { Navbar };
