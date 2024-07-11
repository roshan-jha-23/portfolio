"use client";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Introduction">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Home</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/projects/">Next-js</HoveredLink>
            <HoveredLink href="/projects/">React js</HoveredLink>
            <HoveredLink href="/projects/">HTML,CSS,JS</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Credentials">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/credentials/">Credentials</HoveredLink>
            
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Education">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/education/graduation">Graduation</HoveredLink>
            <HoveredLink href="/education/k12">K-12 education</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
