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
  Edit2,
  Trash2,
  Eye,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Trash,
} from "lucide-react";
import Image from "next/image";

const recentUsers = [
  {
    id: "TR001",
    name: "John Doe",
    email: "john.doe@example.com",
    joinDate: "2024-01-15",
  },
  {
    id: "TR002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    joinDate: "2024-01-18",
  },
  {
    id: "TR003",
    name: "Robert Johnson",
    email: "robert.j@example.com",
    joinDate: "2024-01-20",
  },
  {
    id: "TR004",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    joinDate: "2024-01-22",
  },
  {
    id: "TR005",
    name: "Michael Brown",
    email: "michael.b@example.com",
    joinDate: "2024-01-25",
  },
  {
    id: "TR006",
    name: "Sarah Wilson",
    email: "sarah.w@example.com",
    joinDate: "2024-01-28",
  },
  {
    id: "TR007",
    name: "David Martinez",
    email: "david.m@example.com",
    joinDate: "2024-02-01",
  },
  {
    id: "TR008",
    name: "Lisa Anderson",
    email: "lisa.a@example.com",
    joinDate: "2024-02-03",
  },
  {
    id: "TR009",
    name: "James Taylor",
    email: "james.t@example.com",
    joinDate: "2024-02-05",
  },
  {
    id: "TR010",
    name: "Jennifer Lee",
    email: "jennifer.l@example.com",
    joinDate: "2024-02-08",
  },
  {
    id: "TR011",
    name: "Charles White",
    email: "charles.w@example.com",
    joinDate: "2024-02-10",
  },
  {
    id: "TR012",
    name: "Mary Harris",
    email: "mary.h@example.com",
    joinDate: "2024-02-12",
  },
  {
    id: "TR013",
    name: "Thomas Martin",
    email: "thomas.m@example.com",
    joinDate: "2024-02-14",
  },
  {
    id: "TR014",
    name: "Patricia Clark",
    email: "patricia.c@example.com",
    joinDate: "2024-02-16",
  },
  {
    id: "TR015",
    name: "Christopher Lewis",
    email: "chris.l@example.com",
    joinDate: "2024-02-18",
  },
  {
    id: "TR016",
    name: "Nancy Walker",
    email: "nancy.w@example.com",
    joinDate: "2024-02-20",
  },
  {
    id: "TR017",
    name: "Daniel Hall",
    email: "daniel.h@example.com",
    joinDate: "2024-02-22",
  },
  {
    id: "TR018",
    name: "Karen Allen",
    email: "karen.a@example.com",
    joinDate: "2024-02-24",
  },
  {
    id: "TR019",
    name: "Matthew Young",
    email: "matthew.y@example.com",
    joinDate: "2024-02-26",
  },
  {
    id: "TR020",
    name: "Betty King",
    email: "betty.k@example.com",
    joinDate: "2024-02-28",
  },
  {
    id: "TR021",
    name: "Mark Wright",
    email: "mark.w@example.com",
    joinDate: "2024-03-01",
  },
  {
    id: "TR022",
    name: "Carol Lopez",
    email: "carol.l@example.com",
    joinDate: "2024-03-03",
  },
  {
    id: "TR023",
    name: "Donald Hill",
    email: "donald.h@example.com",
    joinDate: "2024-03-05",
  },
  {
    id: "TR024",
    name: "Sandra Scott",
    email: "sandra.s@example.com",
    joinDate: "2024-03-07",
  },
  {
    id: "TR025",
    name: "Steven Green",
    email: "steven.g@example.com",
    joinDate: "2024-03-09",
  },
  {
    id: "TR026",
    name: "Ashley Adams",
    email: "ashley.a@example.com",
    joinDate: "2024-03-11",
  },
  {
    id: "TR027",
    name: "Paul Nelson",
    email: "paul.n@example.com",
    joinDate: "2024-03-13",
  },
  {
    id: "TR028",
    name: "Deborah Carter",
    email: "deborah.c@example.com",
    joinDate: "2024-03-15",
  },
  {
    id: "TR029",
    name: "Andrew Mitchell",
    email: "andrew.m@example.com",
    joinDate: "2024-03-17",
  },
  {
    id: "TR030",
    name: "Jessica Roberts",
    email: "jessica.r@example.com",
    joinDate: "2024-03-19",
  },
];

export default function ClientDashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(recentUsers.length / itemsPerPage);

  // Get current page items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = recentUsers.slice(startIndex, endIndex);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

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
              <Card key={i} className="">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium text-foreground/60">
                      {stat.label}
                    </CardTitle>
                  </div>
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

        {/* Recent Users table section */}
        <Card className="">
          <CardHeader>
            <CardTitle className="">Recent Users</CardTitle>
            <CardDescription className="text-foreground/60">
              Latest registered users
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-t-xl ">
              <table className="w-full text-sm">
                <thead className=" w-40">
                  <tr className="bg-gradient-to-r bg-[#002147] text-white border-none ">
                    <th className="text-left py-6 px-6 font-semibold">TR.ID</th>
                    <th className="text-left py-6 px-6 font-semibold">
                      User Name
                    </th>
                    <th className="text-left py-6 px-6 font-semibold">Email</th>
                    <th className="text-left py-6 px-6 font-semibold">
                      Join Date
                    </th>
                    <th className="text-left py-6 px-6 font-semibold">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentUsers.map((user) => (
                    <tr
                      key={user.id}
                      className=""
                    >
                      <td className="py-3 px-4 text-foreground font-medium">
                        {user.id}
                      </td>
                      <td className="py-3 px-4 text-foreground">{user.name}</td>
                      <td className="py-3 px-4 text-foreground/60">
                        {user.email}
                      </td>
                      <td className="py-3 px-4 text-foreground/60">
                        {user.joinDate}
                      </td>
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

            <div className="flex items-center justify-center gap-2 mt-6 pt-6 ">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-border hover:bg-card disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1">
                {getPageNumbers().map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`w-10 h-10 rounded-full font-semibold transition-colors ${
                      currentPage === page
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "bg-card text-foreground hover:bg-accent border border-border"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-border hover:bg-card disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
