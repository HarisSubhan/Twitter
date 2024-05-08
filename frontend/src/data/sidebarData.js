import { IoHomeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlineCheckBox } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
export const SidebarData = [
  {
    id: 1,
    title: "Home",
    icon: <IoHomeOutline />,
  },
  {
    id: 2,
    title: "Explore",
    icon: <CiSearch />,
  },
  {
    id: 3,
    title: "Notification",
    icon: <CiBellOn />,
  },
  {
    id: 4,
    title: "Message",
    icon: <FaRegMessage />,
  },
  {
    id: 5,
    title: "Grok",
    icon: <MdOutlineCheckBox />,
  },
  {
    id: 6,
    title: "List",
    icon: <MdOutlineFormatListBulleted />,
  },
  {
    id: 7,
    title: "Premium",
    icon: <BsTwitterX />,
  },
  {
    id: 8,
    title: "Profile",
    icon: <CgProfile />,
  },
  {
    id: 9,
    title: "More",
    icon: <CiCircleMore />,
  },
];

export default SidebarData;
