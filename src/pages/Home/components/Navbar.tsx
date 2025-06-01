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
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { useOpenConsultantModal } from "~/hooks/use-consultant";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
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
    src: "https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Prime Zone Consultant",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "Study Destinations",
      url: "/study-destinations",
      items: [
        {
          title: "Study in UK",
          url: "#",
        },
        {
          title: "Study in France",
          url: "#",
        },
        {
          title: "Study in Italy",
          url: "#",
        },
      ],
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
    // {
    //   title: "Success Stories",
    //   url: "/success-stories",
    // },
    {
      title: "Contact Us",
      url: "/contact-us",
    },
    // {
    //   title: "Resources",
    //   url: "#",
    //   items: [
    //     {
    //       title: "Help Center",
    //       description: "Get all the answers you need right here",
    //       icon: <Zap className="size-5 shrink-0" />,
    //       url: "#",
    //     },
    //     {
    //       title: "Contact Us",
    //       description: "We are here to help you with any questions you have",
    //       icon: <Sunset className="size-5 shrink-0" />,
    //       url: "#",
    //     },
    //     {
    //       title: "Status",
    //       description: "Check the current status of our services and APIs",
    //       icon: <Trees className="size-5 shrink-0" />,
    //       url: "#",
    //     },
    //     {
    //       title: "Terms of Service",
    //       description: "Our terms and conditions for using our services",
    //       icon: <Book className="size-5 shrink-0" />,
    //       url: "#",
    //     },
    //   ],
    // },
  ],
}: NavbarProps) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <section className="py-4 absolute top-0 left-0 right-0">
      {/* Desktop Menu */}
      <nav className="hidden justify-between lg:flex lg:items-center">
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
      <div className="block lg:hidden">
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

  if (item.items) {
    return (
      <div className="relative">
        <NavigationMenuItem key={item.title}>
          <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-popover text-popover-foreground">
            {item.items.map((subItem) => (
              <NavigationMenuLink asChild key={subItem.title}>
                <SubMenuLink item={subItem} />
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </div>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <Link
        to={item.url}
        className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-accent-foreground ${
          isActive && "bg-secondary/40"
        }`}
      >
        {item.title}
      </Link>
    </NavigationMenuItem>
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
      className="lg:w-[240px] flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent"
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
