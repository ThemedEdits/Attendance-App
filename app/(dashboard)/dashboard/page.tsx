"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Clock, TrendingUp, Calendar, CheckCircle, XCircle, AlertCircle, Plus } from "lucide-react"

const stats = [
  {
    title: "Total Employees",
    value: "248",
    change: "+12%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Present Today",
    value: "186",
    change: "75%",
    trend: "up",
    icon: CheckCircle,
  },
  {
    title: "Absent Today",
    value: "24",
    change: "-8%",
    trend: "down",
    icon: XCircle,
  },
  {
    title: "Late Arrivals",
    value: "38",
    change: "+5%",
    trend: "up",
    icon: AlertCircle,
  },
]

const recentActivity = [
  {
    name: "John Doe",
    action: "Checked in",
    time: "09:15 AM",
    status: "present",
  },
  {
    name: "Jane Smith",
    action: "Checked out",
    time: "05:30 PM",
    status: "present",
  },
  {
    name: "Mike Johnson",
    action: "Late arrival",
    time: "09:45 AM",
    status: "late",
  },
  {
    name: "Sarah Wilson",
    action: "Absent",
    time: "All day",
    status: "absent",
  },
]

export default function Dashboard() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button size="sm" className="w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" />
            Mark Attendance
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.trend === "up" ? "text-green-600" : "text-red-600"}>{stat.change}</span> from last
                month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest attendance updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>
                    {activity.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{activity.name}</p>
                  <p className="text-xs text-muted-foreground">{activity.action}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant={
                      activity.status === "present"
                        ? "default"
                        : activity.status === "late"
                          ? "secondary"
                          : "destructive"
                    }
                    className="text-xs"
                  >
                    {activity.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Quick Actions
            </CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start h-auto p-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">View Today's Report</div>
                  <div className="text-sm text-muted-foreground">Check attendance summary</div>
                </div>
              </div>
            </Button>

            <Button variant="outline" className="w-full justify-start h-auto p-4">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Manage Employees</div>
                  <div className="text-sm text-muted-foreground">Add or edit employee data</div>
                </div>
              </div>
            </Button>

            <Button variant="outline" className="w-full justify-start h-auto p-4">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Attendance Records</div>
                  <div className="text-sm text-muted-foreground">View detailed records</div>
                </div>
              </div>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
