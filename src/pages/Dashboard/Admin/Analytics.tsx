"use client";

import ChartCard from "@/components/modules/Dashboard/Admin/ChartCard";
import DashboardLoader from "@/components/shared/DasboardLoader/DashboardLoader";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetAdminAnalyticsQuery } from "@/redux/features/user/user.api";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  HandCoins,
  PieChart as PieIcon,
  User,
  UserCog,
  Users,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = ["#6366F1", "#22C55E", "#F97316", "#A855F7", "#14B8A6"];

const Analytics = () => {
  const { data: analyticsData, isLoading } = useGetAdminAnalyticsQuery(null);

  const analytics = analyticsData?.data;

  if (isLoading) {
    return <DashboardLoader />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-11/12 max-w-5xl py-8"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-extrabold text-center md:text-left text-primary mb-8">
          Analytics
        </h2>
        <div
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 text-center md:text-left mb-6"
          id="dashboard-stats"
        >
          <Card className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-400 dark:to-blue-700 border border-blue-200 dark:border-blue-500 shadow-sm p-8 md:p-5 gap-0 md:gap-6">
            <div className="md:flex items-center gap-2">
              <User className="w-10 h-10 md:w-5 md:h-5 mx-auto md:mx-0 mb-3 md:mb-0 text-blue-700" />
              <p className="text-gray-600 dark:text-foreground">Total Users</p>
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-blue-700 dark:text-white md:mt-2">
              {analytics?.summary?.totalUsers || 0}
            </h2>
          </Card>
          <Card className="rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-400 dark:to-green-700 border border-green-200 dark:border-green-500 shadow-sm p-8 md:p-5 gap-0 md:gap-6">
            <div className="md:flex items-center gap-2">
              <UserCog className="w-10 h-10 md:w-5 md:h-5 mx-auto md:mx-0 mb-3 md:mb-0 text-green-700" />
              <p className="text-gray-600 dark:text-foreground">Total Agents</p>
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-green-700 dark:text-white md:mt-2">
              {analytics?.summary?.totalAgents || 0}
            </h2>
          </Card>
          <Card className="rounded-xl bg-gradient-to-br from-red-50 to-red-100 dark:from-red-400 dark:to-red-700 border border-red-200 dark:border-red-500 shadow-sm p-8 md:p-5 gap-0 md:gap-6">
            <div className="md:flex items-center gap-2">
              <Activity className="w-10 h-10 md:w-5 md:h-5 mx-auto md:mx-0 mb-3 md:mb-0 text-red-700" />
              <p className="text-gray-600 dark:text-foreground">
                Total Transactions
              </p>
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-red-700 dark:text-white md:mt-2">
              {analytics?.summary?.totalTransactions || 0}
            </h2>
          </Card>
          <Card className="rounded-xl bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-400 dark:to-violet-700 border border-violet-200 dark:border-violet-500 shadow-sm p-8 md:p-5 gap-0 md:gap-6">
            <div className="md:flex items-center gap-2">
              <Activity className="w-10 h-10 md:w-5 md:h-5 mx-auto md:mx-0 mb-3 md:mb-0 text-violet-700" />
              <p className="text-gray-600 dark:text-foreground">
                Total Volumes
              </p>
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-violet-700 dark:text-white md:mt-2">
              {analytics?.summary?.totalVolumes || 0}
            </h2>
          </Card>
        </div>
        <div className="py-6 md:py-8 flex flex-col gap-6">
          <Tabs defaultValue="volume" className="w-full">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="volume" className="gap-2">
                <BarChart3 className="h-4 w-4" /> Volume by Day
              </TabsTrigger>
              <TabsTrigger value="count" className="gap-2">
                <BarChart3 className="h-4 w-4" /> Count by Day
              </TabsTrigger>
              <TabsTrigger value="breakdown" className="gap-2">
                <PieIcon className="h-4 w-4" /> Type Breakdown
              </TabsTrigger>
            </TabsList>
            <TabsContent value="volume" className="mt-4">
              <ChartCard
                title="Transaction Volume"
                description="By month, metric: amount"
              >
                <ResponsiveContainer width="100%" height={320}>
                  <BarChart
                    data={analytics?.monthlyVolume}
                    margin={{ top: 10, right: 20, bottom: 0, left: -10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} />
                    <YAxis tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        background: "#111827",
                        border: "1px solid #374151",
                        color: "white",
                      }}
                      labelStyle={{ color: "#00ff00" }}
                    />
                    <Bar dataKey="totalAmount" radius={[8, 8, 0, 0]}>
                      {analytics?.monthlyVolume?.map((_, i) => (
                        <Cell
                          key={`cell-${i}`}
                          fill={COLORS[i % COLORS.length]}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
            </TabsContent>
            <TabsContent value="count" className="mt-4">
              <ChartCard
                title="Transaction Count"
                description="By month, metric: count"
              >
                <ResponsiveContainer width="100%" height={320}>
                  <BarChart
                    data={analytics?.monthlyCount}
                    margin={{ top: 10, right: 20, bottom: 0, left: -10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} />
                    <YAxis tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        background: "#111827",
                        border: "1px solid #374151",
                        color: "white",
                      }}
                      labelStyle={{ color: "#CBD5E1" }}
                    />
                    <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                      {analytics?.monthlyCount?.map((_, i) => (
                        <Cell
                          key={`cell-${i}`}
                          fill={COLORS[i % COLORS.length]}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>
            </TabsContent>
            <TabsContent value="breakdown" className="mt-4">
              <ChartCard
                title="Transactions by Type"
                description="Breakdown by amount"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                  <div className="lg:col-span-3">
                    <ResponsiveContainer
                      width="100%"
                      height={320}
                      id="charts-section"
                    >
                      <PieChart>
                        <Pie
                          data={analytics?.byType}
                          dataKey="totalAmount"
                          nameKey="type"
                          innerRadius={70}
                          outerRadius={110}
                          paddingAngle={2}
                        >
                          {analytics?.byType.map((_, i) => (
                            <Cell
                              key={`cell-${i}`}
                              fill={COLORS[i % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            background: "#111827",
                            border: "1px solid #374151",
                            color: "white",
                          }}
                          labelStyle={{ color: "#CBD5E1" }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="lg:col-span-2 flex flex-col gap-3">
                    {analytics?.byType.map((seg, i) => (
                      <div
                        key={seg.type}
                        className="flex items-center justify-between rounded-xl border border-neutral-200/50 dark:border-neutral-800/80 px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="h-3 w-3 rounded-full"
                            style={{ background: COLORS[i % COLORS.length] }}
                          />
                          <div className="capitalize font-medium">
                            {seg.type}
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-neutral-100 dark:bg-neutral-800"
                        >
                          ৳ {seg?.totalAmount?.toLocaleString()}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </ChartCard>
            </TabsContent>
          </Tabs>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 border border-white/30 dark:border-neutral-800/60">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <HandCoins className="h-4 w-4" /> Top Performing Month
                </CardTitle>
                <CardDescription>Highest volume in a month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">
                    {dayjs(analytics?.monthWithHighestVolume?.month).format(
                      "MMM-YYYY"
                    )}
                  </div>
                  <div className="text-indigo-600 dark:text-indigo-300 font-semibold">
                    ৳{" "}
                    {analytics?.monthWithHighestVolume?.totalAmount?.toLocaleString()}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 border border-white/30 dark:border-neutral-800/60">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <HandCoins className="h-4 w-4" /> Top Performing Day
                </CardTitle>
                <CardDescription>Highest volume in a day</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">
                    {dayjs(analytics?.dayWithHighestVolume?.date).format(
                      "DD MMM YYYY"
                    )}
                  </div>
                  <div className="text-indigo-600 dark:text-indigo-300 font-semibold">
                    ৳{" "}
                    {analytics?.dayWithHighestVolume?.totalAmount?.toLocaleString()}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 border border-white/30 dark:border-neutral-800/60">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Users className="h-4 w-4" /> Most Active Type
                </CardTitle>
                <CardDescription>By number of transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="capitalize text-2xl font-bold">
                    {analytics?.mostActiveType?.type}
                  </div>
                  <Badge className="bg-indigo-500/15 text-indigo-600 dark:text-indigo-300">
                    {analytics?.mostActiveType?.count?.toLocaleString()} txn
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Analytics;
