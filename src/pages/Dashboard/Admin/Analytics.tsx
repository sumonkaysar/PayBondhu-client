"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  BarChart3,
  Download,
  HandCoins,
  PieChart as PieIcon,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import { useMemo, useState } from "react";
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

// -----------------------------------------------
// Types — align these to your backend contracts
// -----------------------------------------------

type TxType = "send" | "cashin" | "cashout" | "withdraw" | "addmoney";

type AnalyticsKPI = {
  totalVolume: number; // total transaction amount in range
  totalCount: number; // total number of transactions
  avgTicket: number; // average amount per transaction
  activeUsers: number; // active users in range
};

type TxByType = { type: TxType; count: number; amount: number }[];

type TxByDay = { date: string; count: number; amount: number }[]; // for bar chart

type AnalyticsResponse = {
  kpi: AnalyticsKPI;
  byType: TxByType;
  byDay: TxByDay;
};

// -------------------------------------------------
// Replace with your RTK Query hook
// const { data, isLoading } = useGetAdminAnalyticsQuery(params)
// -------------------------------------------------

// Mocked data to showcase the UI; swap with live data from your backend
const MOCK_DATA: AnalyticsResponse = {
  kpi: {
    totalVolume: 1789450,
    totalCount: 12450,
    avgTicket: 144,
    activeUsers: 832,
  },
  byType: [
    { type: "send", count: 4200, amount: 520000 },
    { type: "cashin", count: 2600, amount: 410000 },
    { type: "cashout", count: 3000, amount: 520450 },
    { type: "withdraw", count: 1650, amount: 235000 },
    { type: "addmoney", count: 1000, amount: 103000 },
  ],
  byDay: Array.from({ length: 12 }, (_, i) => ({
    date: `Aug-${i + 1}`,
    count: Math.floor(200 + Math.random() * 400),
    amount: Math.floor(40000 + Math.random() * 90000),
  })),
};

const COLORS = ["#6366F1", "#22C55E", "#F97316", "#A855F7", "#14B8A6"]; // indigo, green, orange, purple, teal

export default function Analytics() {
  const [range, setRange] = useState<{ from: string; to: string }>({
    from: "2025-08-01",
    to: "2025-08-25",
  });
  const [granularity, setGranularity] = useState("day"); // day | week | month
  const [metric, setMetric] = useState<"amount" | "count">("amount");

  // TODO: replace MOCK_DATA with API data; derive params from state above
  // const { data, isLoading } = useGetAdminAnalyticsQuery({ from: range.from, to: range.to, granularity })
  const data: AnalyticsResponse = MOCK_DATA;
  const isLoading = false;

  const kpi = data?.kpi;

  const barData = useMemo(() => {
    const key = metric === "amount" ? "amount" : "count";
    return (data?.byDay || []).map((d) => ({ ...d, value: (d as any)[key] }));
  }, [data, metric]);

  const pieData = useMemo(() => {
    const key = metric === "amount" ? "amount" : "count";
    return (data?.byType || []).map((d) => ({
      name: d.type,
      value: (d as any)[key],
    }));
  }, [data, metric]);

  const downloadCSV = () => {
    const headers = ["date,value"]; // bar series export example
    const rows = barData.map((r) => `${r.date},${r.value}`);
    const csv = [headers.join(""), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `analytics-${range.from}-to-${range.to}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-7xl w-11/12 py-8"
    >
      {/* Gradient hero */}
      <div className="rounded-3xl p-[1px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="rounded-[calc(1.5rem-1px)] bg-white dark:bg-neutral-900">
          <div className="px-6 py-6 md:px-8 md:py-8 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-indigo-600 to-pink-600 dark:from-indigo-300 dark:to-pink-300">
                  Admin Analytics
                </h1>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">
                  Modern, digital dashboard with realtime insights.
                </p>
              </div>
              <div className="flex flex-wrap items-end gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="from">From</Label>
                    <Input
                      id="from"
                      type="date"
                      value={range.from}
                      onChange={(e) =>
                        setRange((r) => ({ ...r, from: e.target.value }))
                      }
                      className="bg-white dark:bg-neutral-800"
                    />
                  </div>
                  <div>
                    <Label htmlFor="to">To</Label>
                    <Input
                      id="to"
                      type="date"
                      value={range.to}
                      onChange={(e) =>
                        setRange((r) => ({ ...r, to: e.target.value }))
                      }
                      className="bg-white dark:bg-neutral-800"
                    />
                  </div>
                </div>
                <Select value={granularity} onValueChange={setGranularity}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Granularity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="day">Daily</SelectItem>
                    <SelectItem value="week">Weekly</SelectItem>
                    <SelectItem value="month">Monthly</SelectItem>
                  </SelectContent>
                </Select>
                <Select
                  value={metric}
                  onValueChange={(v) => setMetric(v as any)}
                >
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Metric" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="amount">Amount (৳)</SelectItem>
                    <SelectItem value="count">Count (#)</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="secondary"
                  onClick={downloadCSV}
                  className="whitespace-nowrap"
                >
                  <Download className="h-4 w-4 mr-2" /> Export CSV
                </Button>
              </div>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <KPI
                title="Total Volume"
                value={`৳ ${kpi.totalVolume.toLocaleString()}`}
                icon={<Wallet className="h-5 w-5" />}
                subtle="All transactions in range"
              />
              <KPI
                title="Total Transactions"
                value={kpi.totalCount.toLocaleString()}
                icon={<BarChart3 className="h-5 w-5" />}
                subtle="Count across all types"
              />
              <KPI
                title="Avg. Ticket"
                value={`৳ ${kpi.avgTicket.toLocaleString()}`}
                icon={<TrendingUp className="h-5 w-5" />}
                subtle="Avg amount per transaction"
              />
              <KPI
                title="Active Users"
                value={kpi.activeUsers.toLocaleString()}
                icon={<Users className="h-5 w-5" />}
                subtle="Users transacting in range"
              />
            </div>

            <Separator className="my-2" />

            {/* Charts */}
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
                  description={`By ${granularity}, metric: amount`}
                >
                  <ResponsiveContainer width="100%" height={320}>
                    <BarChart
                      data={barData}
                      margin={{ top: 10, right: 20, bottom: 0, left: -10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="date" tickLine={false} axisLine={false} />
                      <YAxis tickLine={false} axisLine={false} />
                      <Tooltip
                        contentStyle={{
                          background: "#111827",
                          border: "1px solid #374151",
                          color: "white",
                        }}
                        labelStyle={{ color: "#CBD5E1" }}
                      />
                      <Bar dataKey="value" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartCard>
              </TabsContent>

              <TabsContent value="count" className="mt-4">
                <ChartCard
                  title="Transaction Count"
                  description={`By ${granularity}, metric: count`}
                >
                  <ResponsiveContainer width="100%" height={320}>
                    <BarChart
                      data={barData.map((d) => ({
                        ...d,
                        value: Math.max(1, Math.round(d.value / 500)),
                      }))}
                      margin={{ top: 10, right: 20, bottom: 0, left: -10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="date" tickLine={false} axisLine={false} />
                      <YAxis tickLine={false} axisLine={false} />
                      <Tooltip
                        contentStyle={{
                          background: "#111827",
                          border: "1px solid #374151",
                          color: "white",
                        }}
                        labelStyle={{ color: "#CBD5E1" }}
                      />
                      <Bar dataKey="value" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartCard>
              </TabsContent>

              <TabsContent value="breakdown" className="mt-4">
                <ChartCard
                  title="Transactions by Type"
                  description={`Breakdown by ${metric}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    <div className="lg:col-span-3">
                      <ResponsiveContainer width="100%" height={320}>
                        <PieChart>
                          <Pie
                            data={pieData}
                            dataKey="value"
                            nameKey="name"
                            innerRadius={70}
                            outerRadius={110}
                            paddingAngle={2}
                          >
                            {pieData.map((_, i) => (
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
                      {pieData.map((seg, i) => (
                        <div
                          key={seg.name}
                          className="flex items-center justify-between rounded-xl border border-neutral-200/50 dark:border-neutral-800/80 px-4 py-3"
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className="h-3 w-3 rounded-full"
                              style={{ background: COLORS[i % COLORS.length] }}
                            />
                            <div className="capitalize font-medium">
                              {seg.name}
                            </div>
                          </div>
                          <Badge
                            variant="secondary"
                            className="bg-neutral-100 dark:bg-neutral-800"
                          >
                            {metric === "amount"
                              ? `৳ ${seg.value.toLocaleString()}`
                              : `${seg.value.toLocaleString()} tx`}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </ChartCard>
              </TabsContent>
            </Tabs>

            {/* Bottom quick panels */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <Card className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 border border-white/30 dark:border-neutral-800/60">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <HandCoins className="h-4 w-4" /> Top Performing Day
                  </CardTitle>
                  <CardDescription>
                    Highest volume in selected range
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">Aug-12</div>
                    <div className="text-indigo-600 dark:text-indigo-300 font-semibold">
                      ৳ 98,320
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 border border-white/30 dark:border-neutral-800/60">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Users className="h-4 w-4" /> Most Active Type
                  </CardTitle>
                  <CardDescription>By # of transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="capitalize text-2xl font-bold">send</div>
                    <Badge className="bg-indigo-500/15 text-indigo-600 dark:text-indigo-300">
                      4,200 tx
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 border border-white/30 dark:border-neutral-800/60">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" /> Conversion Snapshot
                  </CardTitle>
                  <CardDescription>Success vs failed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 text-sm">
                    <Badge
                      variant="secondary"
                      className="bg-green-500/15 text-green-600 dark:text-green-300"
                    >
                      Success 92%
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-red-500/15 text-red-600 dark:text-red-300"
                    >
                      Failed 8%
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function KPI({
  title,
  value,
  icon,
  subtle,
}: {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  subtle?: string;
}) {
  return (
    <Card className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 border border-white/30 dark:border-neutral-800/60">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm text-neutral-600 dark:text-neutral-300 font-medium">
            {title}
          </CardTitle>
          {icon}
        </div>
        {subtle && <CardDescription>{subtle}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl md:text-3xl font-extrabold tracking-tight">
          {value}
        </div>
      </CardContent>
    </Card>
  );
}

function ChartCard({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 border border-white/30 dark:border-neutral-800/60">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <BarChart3 className="h-4 w-4" /> {title}
        </CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="pt-2">{children}</CardContent>
    </Card>
  );
}
