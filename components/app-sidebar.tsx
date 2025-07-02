"use client";

import * as React from "react";
import {
  HelpCircleIcon,
  LayoutDashboardIcon,
} from "lucide-react";

import { MessageCircleIcon } from "lucide-react";

import {
  ClipboardDocumentListIcon as IconaCandidati,
  ChartBarIcon as IconaAnnunci,
  CalendarDaysIcon as IconaCalendario,
  UsersIcon as IconaUtenti,
  LockClosedIcon as IconaPrivacy,
  
} from "@heroicons/react/24/outline";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import {
  Sidebar,
  SidebarContent,
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
      title: "Privacy & Cookie Policy",
      url: "/privacy",
      icon: IconaPrivacy,
    },
    {
      title: "Get Help",
      url: "/get-help",
      icon: HelpCircleIcon,
    },
  
  ];

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="bg-[#1a237e] sticky top-0 z-10">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="pointer-events-none data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <div className="flex items-center justify-center w-full h-20 font-bold text-3xl text-white select-none">
                RODYNA
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="w-full h-1 bg-white/40" />
      </SidebarHeader>

      <SidebarContent className="bg-[#1a237e]">
        <NavMain items={navMain} className="text-white" />
        <NavSecondary items={navSecondary} className="mt-auto text-white" />
      </SidebarContent>
    </Sidebar>
  );
}
