import {
  HiOutlineViewGrid,
  HiOutlineSpeakerphone,
  HiOutlineCreditCard,
  HiOutlinePaperAirplane,
  HiOutlineUserCircle,
  HiOutlineLogout,
} from "../logo";

export const navLinks = [
  {
    name: "dashboard",
    icon: <HiOutlineViewGrid />,
    link: "/",
  },
  {
    name: "campaign",

    icon: <HiOutlineSpeakerphone />,
    link: "/create-campaign",
  },
  {
    name: "payment",

    icon: <HiOutlineCreditCard />,
    link: "/",
    disabled: true,
  },
  {
    name: "withdraw",

    icon: <HiOutlinePaperAirplane />,
    link: "/",
    disabled: true,
  },
  {
    name: "profile",

    icon: <HiOutlineUserCircle />,
    link: "/profile",
  },
  {
    name: "logout",

    icon: <HiOutlineLogout />,
    link: "/",
    disabled: true,
  },
];
