import type React from "react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import Image from "next/image"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="m-10">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64">   {/* FIXED GAP */}

        {/* 🔥 Sticky Top Navbar */}
        <div className="sticky top-0 ">
          <div className="flex justify-between items-center border p-4 rounded-2xl mx-4">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">Welcome, Sidney</h3>
              <p className="text-sm text-gray-600">Have a nice day</p>
            </div>

            <div className="flex justify-center items-center gap-4">
              <Image
                src="/ellipse.png"
                width={50}
                height={50}
                alt="Sidney"
                className="rounded-full"
              />
              <p className="text-[16px] font-semibold">Sidney</p>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="pt-4 px-4 md:px-2">
          {children}
        </main>
      </div>
    </div>
  )
}
