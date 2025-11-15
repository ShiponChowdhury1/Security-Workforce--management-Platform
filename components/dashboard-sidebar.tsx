"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  LayoutDashboard,
  Settings,
  Calendar,
  MessageSquare,
  CreditCard,
  CheckCircle,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface MenuItem {
  label: string;
  href: string;
  icon: any;
}

export default function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname() ?? "/";

  const menuItems: MenuItem[] = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Subscriptions", href: "/dashboard/subscriptions", icon: CreditCard },
    { label: "Verification Center", href: "/dashboard/verification", icon: CheckCircle },
    { label: "Operative Manage", href: "/dashboard/operative", icon: MessageSquare },
    { label: "Company Manage", href: "/dashboard/company", icon: Calendar },
    { label: "Jobs", href: "/dashboard/jobs", icon: MessageSquare },
    { label: "Contract list", href: "/dashboard/contract", icon: MessageSquare },
    { label: "Payroll Reports", href: "/dashboard/payroll", icon: MessageSquare },
    { label: "Referral Manage", href: "/dashboard/referral", icon: MessageSquare },
    { label: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const isActiveFor = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      window.location.href = "/";
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 left-4 z-50 p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors lg:hidden"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 -top-4  h-[980px] w-72 bg-card overflow-y-auto scrollbar-hide transition-transform duration-300 z-40 flex flex-col shadow-2xl rounded-r-2xl",
          !isOpen && "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="p-6 space-y-4 flex-1">
          <div className="flex items-center justify-center p-2 my-4">
          
            <Image src="/service.png" alt="service logo" width={100} height={100} />
          </div>

          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActiveFor(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  active
                    ? "bg-[#002147] text-white font-medium"
                    : "text-foreground/70 hover:bg-accent/50"
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

     <div className="p-6 flex justify-center">
  <button
    onClick={handleLogout}
    className="w-1/2 flex items-center bg-[#CD0000] gap-3 px-4 py-3 rounded-lg transition-colors font-medium"
  >
    <LogOut className="w-5 h-5 text-white" />
    <span className="text-white">Logout</span>
  </button>
</div>

      </aside>

      <div className="lg:ml-72 transition-margin duration-300"></div>
    </>
  );
}
