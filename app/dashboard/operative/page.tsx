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
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Search,
  SlidersHorizontal,
  Star,
  Trash,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const recentUsers = [
  { id: "TR001", name: "John Doe", email: "john.doe@example.com", joinDate: "2024-01-15", subscriptionDate: "2024-01-10", rating: 4.7 },
  { id: "TR002", name: "Jane Smith", email: "jane.smith@example.com", joinDate: "2024-01-18", subscriptionDate: "2024-01-12", rating: 4.2 },
  { id: "TR003", name: "Robert Johnson", email: "robert.j@example.com", joinDate: "2024-01-20", subscriptionDate: "2024-01-14", rating: 4.9 },
  { id: "TR004", name: "Emily Davis", email: "emily.davis@example.com", joinDate: "2024-01-22", subscriptionDate: "2024-01-16", rating: 4.5 },
  { id: "TR005", name: "Michael Brown", email: "michael.b@example.com", joinDate: "2024-01-25", subscriptionDate: "2024-01-18", rating: 4.3 },
  { id: "TR006", name: "Sarah Wilson", email: "sarah.w@example.com", joinDate: "2024-01-28", subscriptionDate: "2024-01-20", rating: 4.8 },
  { id: "TR007", name: "David Martinez", email: "david.m@example.com", joinDate: "2024-02-01", subscriptionDate: "2024-01-25", rating: 4.6 },
  { id: "TR008", name: "Lisa Anderson", email: "lisa.a@example.com", joinDate: "2024-02-03", subscriptionDate: "2024-01-28", rating: 4.4 },
  { id: "TR009", name: "James Taylor", email: "james.t@example.com", joinDate: "2024-02-05", subscriptionDate: "2024-01-30", rating: 4.1 },
  { id: "TR010", name: "Jennifer Lee", email: "jennifer.l@example.com", joinDate: "2024-02-08", subscriptionDate: "2024-02-01", rating: 4.7 },
];

export default function Operative() {
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
        <Card>
          <CardHeader className="flex justify-between items-center">
  <CardTitle>Verification Center</CardTitle>
  
  <div className="flex items-center gap-4">
    {/* Search Input */}
    <div className="relative w-64">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50 w-5 h-5" />
      <Input
        type="search"
        placeholder="Email"
        className="pl-10 pr-3 w-full border border-gray-300 rounded-md bg-white focus:ring-1 focus:ring-primary focus:outline-none"
      />
    </div>

    {/* Filter Text + Icon */}
    <button className="flex items-center gap-1 px-3 py-1 bg-[#FF6F0033] rounded text-[#FF6F00]  transition-colors">
      <span className="text-foreground/60 text-[#FF6F00] ">Filter</span>
      <SlidersHorizontal className="w-4 h-4 font-bold text-foreground/60" />
    </button>
  </div>
</CardHeader>

          <CardContent>
            <div className="overflow-x-auto  border-gray-300 rounded-lg">
              <table className="w-full text-sm border-collapse ">
                <thead>
                  <tr className="bg-[#002147] text-white">
                    <th className="text-left py-4 px-6 font-semibold">#TR.ID</th>
                    <th className="text-left py-4 px-6 font-semibold">Operative Name </th>
                    <th className="text-left py-4 px-6 font-semibold">Email</th>
                    <th className="text-left py-4 px-6 font-semibold">Subscription</th>
                    <th className="text-left py-4 px-6 font-semibold">Rating</th>
                    <th className="text-left py-4 px-6 font-semibold">Status</th>
                    <th className="text-left py-4 px-6 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
  {currentUsers.map((user) => {
    const status =
      parseInt(user.id.replace("TR", "")) % 3 === 0
        ? "Active"
        : "Suspended";

    const statusClasses =
      status === "Active"
        ? "bg-green-100 text-green-800"
        : "bg-red-100 text-red-600";

    return (
      <tr key={user.id} className="border-b border-gray-200">
        <td className="px-2 py-1 font-medium text-foreground text-[18px]">{user.id}</td>
        <td className="px-2 py-1 text-foreground text-[18px]">{user.name}</td>
        <td className="px-2 py-1 text-foreground/60 text-[18px]">{user.email}</td>
        <td className="px-2 py-1 text-foreground/60 text-[18px]">{user.subscriptionDate}</td>
        <td className="px-2 py-1 flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400" />
          <span>{user.rating}</span>
        </td>
        <td className="px-2 py-1">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusClasses}`}>
            {status}
          </span>
        </td>
        <td className="px-2 py-1">
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
              <CircleAlert className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
              <Trash className="w-[16px] h-[16px]" />
            </button>
          </div>
        </td>
      </tr>
    );
  })}
</tbody>

              </table>
            </div>

            {/* Pagination */}
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
