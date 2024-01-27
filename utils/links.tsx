import Dashboard from "@/assets/dashboard";
import Invoice from "@/assets/invoice";
import Upload from "@/assets/upload";
import Schedule from "@/assets/schedule";
import Calendar from "@/assets/calendar";
import Notification from "@/assets/notification";
import Settings from "@/assets/settings";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export const links: NavLink[] = [
  {
    href: "/",
    label: "Dashboard",
    icon: <Dashboard />,
  },
  {
    href: "/upload",
    label: "Upload",
    icon: <Upload />,
  },
  {
    href: "/invoice",
    label: "Invoice",
    icon: <Invoice />,
  },
  {
    href: "/schedule",
    label: "Schedule",
    icon: <Schedule />,
  },
  {
    href: "/calendar",
    label: "Calendar",
    icon: <Calendar />,
  },
  {
    href: "/notification",
    label: "Notification",
    icon: <Notification />,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: <Settings />,
  },
];
