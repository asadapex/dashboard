import React from "react";
import {
  AgentsIcon,
  ArticlesIcon,
  ContactsIcon,
  IdeasIcon,
  OverviewIcon,
  TicketsIcon,
} from "../assets/icons";
import {
  Agents,
  Articles,
  Contacts,
  Ideas,
  Overview,
  Tickets,
  TicketCreate,
} from "../pages";

export const paths = {
  overview: "/",
  tickets: "/tickets",
  ideas: "/ideas",
  contacts: "/contacts",
  agents: "/agents",
  articles: "/articles",
  ticketsCreate: "/tickets/create",
};

export const navList = [
  {
    id: 1,
    title: "Overview",
    path: paths.overview,
    icon: <OverviewIcon />,
  },
  {
    id: 2,
    title: "Tickets",
    path: paths.tickets,
    icon: <TicketsIcon />,
  },
  {
    id: 3,
    title: "Ideas",
    path: paths.ideas,
    icon: <IdeasIcon />,
  },
  {
    id: 4,
    title: "Contacts",
    path: paths.contacts,
    icon: <ContactsIcon />,
  },
  {
    id: 5,
    title: "Agents",
    path: paths.agents,
    icon: <AgentsIcon />,
  },
  {
    id: 6,
    title: "Articles",
    path: paths.articles,
    icon: <ArticlesIcon />,
  },
];

export const pageRoueteList = [
  {
    id: 1,
    path: paths.overview,
    element: <Overview />,
  },
  {
    id: 2,
    path: paths.tickets,
    element: <Tickets />,
  },
  {
    id: 3,
    path: paths.ideas,
    element: <Ideas />,
  },
  {
    id: 4,
    path: paths.contacts,
    element: <Contacts />,
  },
  {
    id: 5,
    path: paths.agents,
    element: <Agents />,
  },
  {
    id: 6,
    path: paths.articles,
    element: <Articles />,
  },
  {
    id: 7,
    path: paths.ticketsCreate,
    element: <TicketCreate />,
  },
];
