"use client";

import { SetStateAction, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TrendingUp,
  Users,
  Activity,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Trash,
} from "lucide-react";

const recentUsers = [
  { id: "TR001", name: "John Doe", email: "john.doe@example.com", joinDate: "2024-01-15" },
  { id: "TR002", name: "Jane Smith", email: "jane.smith@example.com", joinDate: "2024-01-18" },
  { id: "TR003", name: "Robert Johnson", email: "robert.j@example.com", joinDate: "2024-01-20" },
  { id: "TR004", name: "Emily Davis", email: "emily.davis@example.com", joinDate: "2024-01-22" },
  { id: "TR005", name: "Michael Brown", email: "michael.b@example.com", joinDate: "2024-01-25" },
  { id: "TR006", name: "Sarah Wilson", email: "sarah.w@example.com", joinDate: "2024-01-28" },
  { id: "TR007", name: "David Martinez", email: "david.m@example.com", joinDate: "2024-02-01" },
  { id: "TR008", name: "Lisa Anderson", email: "lisa.a@example.com", joinDate: "2024-02-03" },
  { id: "TR009", name: "James Taylor", email: "james.t@example.com", joinDate: "2024-02-05" },
  { id: "TR010", name: "Jennifer Lee", email: "jennifer.l@example.com", joinDate: "2024-02-08" },
  // add more users as needed
];

export default function ClientDashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(recentUsers.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = recentUsers.slice(startIndex, endIndex);

  const handlePrevious = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePageClick = (page: SetStateAction<number>) => setCurrentPage(page);

  const getPageNumbers = () => Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="w-full py-12 px-4">
      <div className="space-y-8">

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: TrendingUp, label: "Total Earnings", value: "$2005.23" },
            { icon: Users, label: "Total Companies", value: "235" },
            { icon: Activity, label: "Total Guards", value: "195" },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Card key={i}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-medium text-foreground/60">
                    {stat.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-[32px] font-bold text-foreground">
                    {stat.value}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
            <CardDescription className="text-foreground/60">
              Latest registered users
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="overflow-x-auto rounded-t-xl border border-gray-200">
              <table className="w-full text-sm border-collapse p-2">
                <thead>
                  <tr className="bg-[#002147] text-white">
                    <th className="text-left py-6 px-6 font-semibold border-b border-gray-300 text-[18px]">TR.ID</th>
                    <th className="text-left py-6 px-6 font-semibold border-b border-gray-300 text-[18px]">User Name</th>
                    <th className="text-left py-6 px-6 font-semibold border-b border-gray-300 text-[18px]">Email</th>
                    <th className="text-left py-6 px-6 font-semibold border-b border-gray-300 text-[18px]">Join Date</th>
                    <th className="text-left py-6 px-6 font-semibold border-b border-gray-300 text-[18px]">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentUsers.map((user) => (
                    <tr key={user.id} className="border-b border-gray-200 text-[18px]">
                      <td className="py-3 px-4 text-foreground text-[18px]">{user.id}</td>
                      <td className="py-3 px-4 text-foreground text-[18px]">{user.name}</td>
                      <td className="py-3 px-4 text-foreground/60 text-[18px]">{user.email}</td>
                      <td className="py-3 px-4 text-foreground/60 text-[18px]">{user.joinDate}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors text-primary"></button>
                          <button className="p-2">
                            <CircleAlert className="w-[24px] h-[24px]" />
                          </button>
                          <button className="p-2">
                            <Trash className="w-[24px] h-[24px]" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          {/* Pagination */}
<div className="relative flex items-center justify-center mt-6 pt-6">
  {/* Pagination Controls (centered) */}
  <div className="flex items-center gap-2">
    {/* Previous Button with Text */}
    <button
      onClick={handlePrevious}
      disabled={currentPage === 1}
      className="px-3 py-2 rounded-lg border border-border hover:bg-card disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
    >
      <ChevronLeft className="w-4 h-4" />
      <span>Previous</span>
    </button>

    {/* Page Numbers */}
    <div className="flex items-center gap-1">
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`w-10 h-10 rounded-full font-semibold transition-colors ${
            currentPage === page
              ? "bg-black text-white"
              : "bg-card text-foreground hover:bg-accent border border-border"
          }`}
        >
          {page}
        </button>
      ))}
    </div>

    {/* Next Button with Text */}
    <button
      onClick={handleNext}
      disabled={currentPage === totalPages}
      className="px-3 py-2 rounded-lg border border-border hover:bg-card disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
    >
      <span>Next</span>
      <ChevronRight className="w-4 h-4" />
    </button>
  </div>

  {/* Export CSV Button (right end) */}
  <button className="absolute right-0 px-4 py-2 bg-[#002147] text-white rounded-lg hover:bg-[#0a1d33] transition-colors">
    Export CSV
  </button>
</div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
