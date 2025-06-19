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

import { MessageCircleIcon } from "lucide-react";

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
      title: "Chi siamo",
      url: "/chi-siamo",
      icon: IconaUtenti,
    },
    {
      title: "Contattaci",
      url: "/contattaci",
      icon: MessageCircleIcon,
    },
  ];

  const navSecondary = [
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
              <div className="flex items-center justify-center w-full h-20 text-white font-bold text-3xl">
                RODYNA
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
