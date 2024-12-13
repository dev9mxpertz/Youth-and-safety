
import Overview from "../../public/icons/view-grid.png";
import Favorites from "../../public/icons/star.png";
import Chats from "../../public/icons/chat.png";
import Contacts from "../../public/icons/phone.png";
import Individuals from "../../public/icons/user.png";
import Groups from "../../public/icons/user-group.png";
import Residential from "../../public/icons/office-building.png";
import sad from "../../public/icons/emoji-sad.png";
import happy from "../../public/icons/emoji-happy.png";
import Hotspots from "../../public/icons/status-online.png";
import Report from "../../public/icons/report.png";
import Agenda from "../../public/icons/server.png";
import Meeting from "../../public/icons/meeting.png";
import Documents from "../../public/icons/folder.png";
import Task from "../../public/icons/task.png";
import { StaticImageData } from "next/image";

type SideBarDataItem = {
  item: string;
  icon: StaticImageData;
  link: string;
};

type SideBarItem = {
  type: string;
  data: SideBarDataItem[];
};

export const SideBarDetails: SideBarItem[] = [
  {
    type: "General",
    data: [
      {
        item: "Overview",
        icon: Overview,
        link: "",
      },
      {
        item: "Favorites",
        icon: Favorites,
        link: "",
      },
      {
        item: "Chats",
        icon: Chats,
        link: "",
      },
      {
        item: "Contacts",
        icon:Contacts,
        link: "",
      },
    ],
  },
  {
    type: "Management",
    data: [
      {
        item: "Individuals",
        icon:Individuals,
        link: "",
      },
      {
        item: "Groups",
        icon: Groups,
        link: "",
      },
      {
        item: "Residential nuisance",
        icon: Residential,
        link: "",
      },
      {
        item: "Criminal Undermining",
        icon: sad,
        link: "",
      },
      {
        item: "BIBOB",
        icon:happy,
        link: "",
      },
      {
        item: "Hotspots",
        icon: Hotspots,
        link: "",
      },
      {
        item: "Reports",
        icon: Report,
        link: "",
      },
    ],
  },
  {
    type: "Productivity",
    data: [
      {
        item: "Agenda",
        icon: Agenda,
        link: "",
      },
      {
        item: "Meeting",
        icon: Meeting,
        link: "",
      },
      {
        item: "Documents",
        icon: Documents,
        link: "",
      },
      {
        item: "Task",
        icon:Task,
        link: "",
      },
    ],
  },
  {
    type: "Other",
    data: [
      {
        item: "All",
        icon:Task,
        link: "",
      },
    ],
  },
];
