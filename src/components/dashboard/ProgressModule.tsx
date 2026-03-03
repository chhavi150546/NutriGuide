import { TrendingUp, Trophy, Flame, Target, Award } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, BarChart, Bar } from "recharts";

const weightData = [
  { week: "W1", weight: 82 },
  { week: "W2", weight: 81.5 },
  { week: "W3", weight: 81 },
  { week: "W4", weight: 80.2 },
  { week: "W5", weight: 79.8 },
  { week: "W6", weight: 79.3 },
  { week: "W7", weight: 78.9 },
  { week: "W8", weight: 78.5 },
];

const calorieData = [
  { day: "Mon", consumed: 2100, burned: 450 },
  { day: "Tue", consumed: 1950, burned: 380 },
  { day: "Wed", consumed: 2200, burned: 520 },
  { day: "Thu", consumed: 1800, burned: 300 },
  { day: "Fri", consumed: 2050, burned: 410 },
  { day: "Sat", consumed: 2300, burned: 600 },
  { day: "Sun", consumed: 1900, burned: 250 },
];

const milestones = [
  { icon: Trophy, label: "First 5kg Lost", achieved: true, date: "Feb 10" },
  { icon: Flame, label: "30-Day Streak", achieved: true, date: "Feb 28" },
  { icon: Target, label: "Hit Protein Goal 7 Days", achieved: true, date: "Feb 25" },
  { icon: Award, label: "Target Weight Reached", achieved: false, date: "In Progress" },
];

const chartConfig = {
  weight: { label: "Weight (kg)", color: "hsl(var(--primary))" },
  consumed: { label: "Consumed", color: "hsl(var(--primary))" },
  burned: { label: "Burned", color: "hsl(var(--accent))" },
};

const ProgressModule = () => {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Starting Weight", value: "82 kg", sub: "Jan 1" },
          { label: "Current Weight", value: "78.5 kg", sub: "Today" },
          { label: "Weight Lost", value: "3.5 kg", sub: "Total" },
          { label: "Current Streak", value: "14 days", sub: "🔥 Keep going!" },
        ].map((s) => (
          <div key={s.label} className="nutri-card p-4 text-center">
            <div className="text-2xl font-heading font-bold">{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
            <div className="text-xs text-primary mt-1">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Weight Trend Chart */}
      <div className="nutri-card p-5">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-heading font-bold">Weight Trend</h3>
        </div>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <AreaChart data={weightData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis domain={[76, 84]} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area type="monotone" dataKey="weight" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.15)" strokeWidth={2} />
          </AreaChart>
        </ChartContainer>
      </div>

      {/* Calorie Balance Chart */}
      <div className="nutri-card p-5">
        <div className="flex items-center gap-2 mb-4">
          <Flame className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-heading font-bold">Weekly Calorie Balance</h3>
        </div>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart data={calorieData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="consumed" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="burned" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </div>

      {/* Milestones */}
      <div className="nutri-card p-5">
        <h3 className="text-lg font-heading font-bold mb-4">🏆 Milestones</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {milestones.map((m) => (
            <div key={m.label} className={`flex items-center gap-3 p-3 rounded-lg border ${m.achieved ? "bg-primary/5 border-primary/20" : "bg-muted/50 border-border"}`}>
              <div className={`w-9 h-9 rounded-full flex items-center justify-center ${m.achieved ? "bg-primary/10" : "bg-muted"}`}>
                <m.icon className={`h-4 w-4 ${m.achieved ? "text-primary" : "text-muted-foreground"}`} />
              </div>
              <div className="flex-1">
                <div className={`text-sm font-medium ${m.achieved ? "text-foreground" : "text-muted-foreground"}`}>{m.label}</div>
                <div className="text-xs text-muted-foreground">{m.date}</div>
              </div>
              {m.achieved && <span className="text-primary text-sm">✓</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressModule;
