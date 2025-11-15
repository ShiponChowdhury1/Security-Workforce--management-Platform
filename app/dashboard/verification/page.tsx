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
  Trash,
  Eye,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";

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
];

export default function Verification() {
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
            <CardDescription className="text-foreground/60">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50 w-5 h-5" />
                <Input
                  type="search"
                  placeholder="Email"
                  className="pl-10 pr-3 w-full border border-gray-300 rounded-md bg-white focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent className="">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#002147] text-white border-none">
                    <th className="text-left py-4 px-6 font-semibold">User Name</th>
                    <th className="text-left py-4 px-6 font-semibold">User Role</th>
                    <th className="text-left py-4 px-6 font-semibold">Submitted Docs</th>
                    <th className="text-left py-4 px-6 font-semibold">Upload Date</th>
                    <th className="text-left py-4 px-6 font-semibold">Status</th>
                    <th className="text-left py-4 px-6 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentUsers.map((user) => {
                    const status =
                      parseInt(user.id.replace("TR", "")) % 3 === 0
                        ? "Rejected"
                        : parseInt(user.id.replace("TR", "")) % 2 === 0
                        ? "Approved"
                        : "Pending";

                    const statusClasses =
                      status === "Approved"
                        ? "bg-green-100 text-green-800"
                        : status === "Rejected"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-800";

                    return (
                      <tr key={user.id} className="border-b border-gray-200">
                        <td className="py-3 px-6 font-medium text-foreground ">{user.id}</td>
                        <td className="py-3 px-6 text-foreground">{user.name}</td>
                        <td className="py-3 px-6 text-foreground/60">{user.email}</td>
                        <td className="py-3 px-6 text-foreground/60">{user.joinDate}</td>
                        <td className="py-3 px-6">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${statusClasses}`}
                          >
                            {status}
                          </span>
                        </td>
                        <td className="py-3 px-6">
                          <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                              <CircleAlert className="w-4 h-4" />
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

 
</div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
