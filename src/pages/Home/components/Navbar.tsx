import { Menu } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

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
              className="w-[35px] h-[20px] object-cover border"
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
    <section className="py-4 absolute top-0 left-0 right-0">
      {/* Desktop Menu */}
      <nav className="hidden justify-between custom:flex custom:items-center">
        {/* Logo */}
        <Link to={logo.url} className="flex items-center gap-2">
          <img src={logo.src} className="max-h-8" alt={logo.alt} />
          <span className="text-lg font-semibold tracking-tighter">
            {logo.title}
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="flex gap-2">
          <Button onClick={useOpenConsultantModal()}>Consult with us</Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="block custom:hidden">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={logo.url} className="flex items-center gap-2">
            <img src={logo.src} className="max-h-8" alt={logo.alt} />
          </Link>
          <Sheet open={showSidebar} onOpenChange={setShowSidebar}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link
                    to={logo.url}
                    className="flex items-center gap-2"
                    onClick={() => setShowSidebar(false)}
                  >
                    <img src={logo.src} className="max-h-8" alt={logo.alt} />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 py-4">
                <Accordion
                  type="single"
                  collapsible
                  className="flex w-full flex-col gap-1"
                >
                  {menu.map((item) =>
                    renderMobileMenuItem(item, setShowSidebar)
                  )}
                </Accordion>

                <div className="flex flex-col gap-3">
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
        <PopoverContent className="bg-popover text-popover-foreground p-3 min-w-[500px]">
          <div className="grid grid-cols-2 gap-4 max-h-64 overflow-y-auto">
            {item.items.map((subItem) => (
              <Link
                key={subItem.title}
                to={subItem.url}
                className="block rounded-md p-3 hover:bg-secondary cursor-pointer"
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
    <Link
      key={item.title}
      to={item.url}
      className={`inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-accent-foreground ${
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
