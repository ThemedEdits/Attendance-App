"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Search, Filter, Download, Plus } from "lucide-react"

const attendanceData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    department: "Engineering",
    checkIn: "09:15 AM",
    checkOut: "05:30 PM",
    status: "present",
    date: "2024-01-15",
    workingHours: "8h 15m",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    department: "Marketing",
    checkIn: "09:00 AM",
    checkOut: "05:45 PM",
    status: "present",
    date: "2024-01-15",
    workingHours: "8h 45m",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    department: "Sales",
    checkIn: "09:45 AM",
    checkOut: "05:15 PM",
    status: "late",
    date: "2024-01-15",
    workingHours: "7h 30m",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    department: "HR",
    checkIn: "-",
    checkOut: "-",
    status: "absent",
    date: "2024-01-15",
    workingHours: "0h 0m",
  },
  {
    id: 5,
    name: "David Brown",
    email: "david@example.com",
    department: "Engineering",
    checkIn: "08:45 AM",
    checkOut: "05:00 PM",
    status: "present",
    date: "2024-01-15",
    workingHours: "8h 15m",
  },
]

export default function AttendancePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [departmentFilter, setDepartmentFilter] = useState("all")

  const filteredData = attendanceData.filter((record) => {
    const matchesSearch =
      record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || record.status === statusFilter
    const matchesDepartment = departmentFilter === "all" || record.department === departmentFilter

    return matchesSearch && matchesStatus && matchesDepartment
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "present":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Present</Badge>
      case "late":
        return <Badge variant="secondary">Late</Badge>
      case "absent":
        return <Badge variant="destructive">Absent</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-4 md:space-y-6 w-full max-w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight truncate">Attendance Records</h1>
          <p className="text-muted-foreground truncate">Track and manage employee attendance</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 shrink-0">
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm" className="w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" />
            Mark Attendance
          </Button>
        </div>
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 shrink-0" />
            <span className="truncate">Today's Attendance</span>
          </CardTitle>
          <CardDescription>January 15, 2024</CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full">
            <div className="relative flex-1 min-w-0">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 w-full"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 shrink-0">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[140px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="present">Present</SelectItem>
                  <SelectItem value="late">Late</SelectItem>
                  <SelectItem value="absent">Absent</SelectItem>
                </SelectContent>
              </Select>
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger className="w-full sm:w-[140px]">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Depts</SelectItem>
                  <SelectItem value="Engineering">Engineering</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="Sales">Sales</SelectItem>
                  <SelectItem value="HR">HR</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-md border w-full overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[180px]">Employee</TableHead>
                    <TableHead className="hidden md:table-cell min-w-[100px]">Department</TableHead>
                    <TableHead className="hidden sm:table-cell min-w-[80px]">Check In</TableHead>
                    <TableHead className="hidden sm:table-cell min-w-[80px]">Check Out</TableHead>
                    <TableHead className="hidden lg:table-cell min-w-[100px]">Working Hours</TableHead>
                    <TableHead className="min-w-[80px]">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell className="min-w-0">
                        <div className="flex items-center space-x-3 min-w-0">
                          <Avatar className="h-8 w-8 shrink-0">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>
                              {record.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0 flex-1">
                            <div className="font-medium truncate">{record.name}</div>
                            <div className="text-sm text-muted-foreground truncate">{record.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{record.department}</TableCell>
                      <TableCell className="hidden sm:table-cell">{record.checkIn}</TableCell>
                      <TableCell className="hidden sm:table-cell">{record.checkOut}</TableCell>
                      <TableCell className="hidden lg:table-cell">{record.workingHours}</TableCell>
                      <TableCell>{getStatusBadge(record.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No records found matching your criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
