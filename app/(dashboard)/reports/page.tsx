"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Download, TrendingUp, Users, Clock, AlertCircle } from "lucide-react"

export default function ReportsPage() {
  const reportData = {
    totalEmployees: 248,
    averageAttendance: 92.5,
    lateArrivals: 15,
    earlyDepartures: 8,
  }

  const departmentStats = [
    { name: "Engineering", present: 45, total: 50, percentage: 90 },
    { name: "Design", present: 18, total: 20, percentage: 90 },
    { name: "Marketing", present: 22, total: 25, percentage: 88 },
    { name: "HR", present: 8, total: 10, percentage: 80 },
    { name: "Sales", present: 28, total: 30, percentage: 93 },
  ]

  const monthlyTrends = [
    { month: "Jan", attendance: 94 },
    { month: "Feb", attendance: 91 },
    { month: "Mar", attendance: 93 },
    { month: "Apr", attendance: 89 },
    { month: "May", attendance: 92 },
    { month: "Jun", attendance: 95 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">Analyze attendance patterns and generate insights</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="this-month">
            <SelectTrigger className="w-[180px]">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="this-quarter">This Quarter</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reportData.totalEmployees}</div>
            <p className="text-xs text-muted-foreground">Active employees in system</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reportData.averageAttendance}%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2.1%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Late Arrivals</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reportData.lateArrivals}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600">+5</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Early Departures</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reportData.earlyDepartures}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">-2</span> from last week
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Department Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Department Performance</CardTitle>
            <CardDescription>Attendance rates by department this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentStats.map((dept) => (
                <div key={dept.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div>
                      <p className="text-sm font-medium">{dept.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {dept.present}/{dept.total} employees
                      </p>
                    </div>
                  </div>
                  <Badge variant={dept.percentage >= 90 ? "default" : "secondary"}>{dept.percentage}%</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Trends</CardTitle>
            <CardDescription>Attendance percentage over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyTrends.map((month) => (
                <div key={month.month} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 text-sm font-medium">{month.month}</div>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: `${month.attendance}%` }}></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium">{month.attendance}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
          <CardDescription>Generate detailed reports for specific analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Daily Attendance Report</h3>
              <p className="text-sm text-muted-foreground mb-3">Detailed daily attendance with check-in/out times</p>
              <Button variant="outline" size="sm">
                Generate
              </Button>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Employee Summary</h3>
              <p className="text-sm text-muted-foreground mb-3">Individual employee attendance summary</p>
              <Button variant="outline" size="sm">
                Generate
              </Button>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Department Analysis</h3>
              <p className="text-sm text-muted-foreground mb-3">Compare attendance across different departments</p>
              <Button variant="outline" size="sm">
                Generate
              </Button>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Late Arrivals Report</h3>
              <p className="text-sm text-muted-foreground mb-3">Track patterns of late arrivals and tardiness</p>
              <Button variant="outline" size="sm">
                Generate
              </Button>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Overtime Analysis</h3>
              <p className="text-sm text-muted-foreground mb-3">Analyze overtime hours and patterns</p>
              <Button variant="outline" size="sm">
                Generate
              </Button>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Custom Report</h3>
              <p className="text-sm text-muted-foreground mb-3">Create custom reports with specific parameters</p>
              <Button variant="outline" size="sm">
                Generate
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
