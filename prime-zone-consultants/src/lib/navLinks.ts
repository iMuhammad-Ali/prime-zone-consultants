import {
  Box,
  Boxes,
  Briefcase,
  CreditCard,
  FileBox,
  HandCoins,
  Landmark,
  LayoutDashboard,
  MessageCircleQuestion,
  MessageSquareText,
  Users,
} from "lucide-react";

export const navLinks = [
  {
    name: "Dashboard",
    url: "dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Users",
    url: "users",
    icon: Users,
  },
  {
    name: "Services",
    url: "services",
    icon: Briefcase,
  },
  {
    name: "Categories",
    url: "/categories",
    icon: Box,
  },
  {
    name: "Sub-Categories",
    url: "/sub-categories",
    icon: Boxes,
  },
  {
    name: "Orders",
    url: "/orders",
    icon: FileBox,
  },
  {
    name: "Chats",
    url: "/chats",
    icon: MessageSquareText,
  },
  {
    name: "Payment Methods",
    url: "/payment-methods",
    icon: CreditCard,
  },
  {
    name: "Transactions",
    url: "/transactions",
    icon: HandCoins,
  },
  {
    name: "Earnings",
    url: "/earnings",
    icon: Landmark,
  },
  {
    name: "Support",
    url: "/support",
    icon: MessageCircleQuestion,
  },
];
