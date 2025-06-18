"use client";

import * as React from "react";
import {
  ArrowUpCircleIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  SettingsIcon,
} from "lucide-react";

import {
  ClipboardDocumentListIcon as IconaCandidati,
  ChartBarIcon as IconaAnnunci,
  CalendarDaysIcon as IconaCalendario,
  UsersIcon as IconaUtenti,
} from "@heroicons/react/24/outline";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {};

export function AppSidebar({ ...props }: AppSidebarProps) {
  const pathname = usePathname();

  const navMain = [
    {
      title: "Home",
      url: "/",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Candidati",
      url: "/candidati",
      icon: IconaCandidati,
    },
    {
      title: "Annunci",
      url: "/annunci",
      icon: IconaAnnunci,
    },
    {
      title: "Calendario",
      url: "/calendario",
      icon: IconaCalendario,
    },
    {
      title: "Gestione Utenti",
      icon: IconaUtenti,
      url: "/utenti/azienda",
    },
  ];

  const navSecondary = [
    {
      title: "Impostazioni",
      url: "/impostazioni",
      icon: SettingsIcon,
    },
    {
      title: "Get Help",
      url: "/get-help",
      icon: HelpCircleIcon,
    },
  ];

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="bg-primaryBlue">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="pointer-events-none data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <div className="flex items-center !pl-0 !ml-0">
                <span className="text-base text-white font-semibold">
                  <svg
                    width="200"
                    height="80"
                    viewBox="0 0 200 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="300" height="80" fill="rgb(10,31,68)" />
                    <g
                      transform="translate(20,20)"
                      stroke="white"
                      strokeWidth="3"
                      fill="none"
                      strokeLinejoin="round"
                    >
                      <circle cx="20" cy="20" r="15" />
                      <path d="M10 20c0-5 10-10 20-10" />
                      <path d="M30 20c0 5-10 10-20 10" />
                      <line x1="20" y1="5" x2="20" y2="35" />
                      <line x1="5" y1="20" x2="35" y2="20" />
                    </g>
                    <text
                      x="70"
                      y="48"
                      fill="white"
                      fontFamily="Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
                      fontSize="16"
                      fontWeight="600"
                    >
                      Rodyna
                    </text>
                  </svg>
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-primaryBlue">
        <NavMain items={navMain} className="text-white" />
        <NavSecondary items={navSecondary} className="mt-auto text-white" />
      </SidebarContent>
    </Sidebar>
  );
}
