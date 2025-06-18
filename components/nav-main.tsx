"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type NavItem = {
  title: string;
  url?: string;
  icon?: LucideIcon;
  children?: NavItem[];
};

export function NavMain({
  items,
  className,
}: {
  items: NavItem[];
  className?: string;
}) {
  const pathname = usePathname();
  const [openItem, setOpenItem] = useState<string | null>(null);

  useEffect(() => {
    const activeParent = items.find((item) =>
      item.children?.some((child) => child.url === pathname)
    );
    if (activeParent) {
      setOpenItem(activeParent.title);
    } else {
      setOpenItem(null);
    }
  }, [pathname, items]);

  const handleParentClick = (title: string) => {
    setOpenItem((prev) => (prev === title ? null : title));
  };

  return (
    <SidebarGroup>
      <SidebarGroupContent className={`flex flex-col gap-2 ${className}`}>
        <SidebarMenu>
          {items.map((item) => {
            const isOpen = openItem === item.title;
            const isChildActive = item.children?.some(
              (child) => child.url === pathname
            );

            return (
              <div key={item.title}>
                {
                  <Link href={item.url ?? ""}>
                    <SidebarMenuItem
                      className={`${
                        pathname === item.url
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : ""
                      } rounded-lg`}
                    >
                      <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </Link>
                }
              </div>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
