import {
  FiGrid,
  FiLink,
  FiUser,
  FiFolderPlus,
  FiUsers,
  FiLogOut,
  FiSunrise,
  FiSunset,
} from "../logo";

export const navLinks = [
  {
    name: "dashboard",
    icon: <FiGrid />,
    link: "/",
  },
  {
    name: "connect",
    icon: <FiLink />,
    link: "/connect",
  },
  {
    name: "profile",
    icon: <FiUser />,
    link: "/profile",
  },
  {
    name: "create-project",
    icon: <FiFolderPlus />,
    link: "/projects",
    disabled: true,
  },
  {
    name: "coaches",
    icon: <FiUsers />,
    link: "/coaches",
  },
  {
    name: "logout",
    icon: <FiLogOut />,
    link: "/",
    disabled: true,
  },
  {
    name: "bright",
    icon: <FiSunrise />,
    link: "/",
    disabled: true,
  },
  {
    name: "dark",
    icon: <FiSunset />,
    link: "/",
    disabled: true,
  },
];
