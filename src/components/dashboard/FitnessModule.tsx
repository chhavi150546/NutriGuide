import { useState } from "react";
import { Plus, Trash2, Dumbbell, Heart, StretchHorizontal, Timer, Flame, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface Workout {
  id: number;
  name: string;
  type: "strength" | "cardio" | "flexibility";
  duration: number;
  caloriesBurned: number;
  reps?: number;
  sets?: number;
  date: string;
}

const mockWorkouts: Workout[] = [
  { id: 1, name: "Bench Press", type: "strength", duration: 25, caloriesBurned: 180, reps: 10, sets: 4, date: "2026-03-01" },
  { id: 2, name: "Running", type: "cardio", duration: 35, caloriesBurned: 380, date: "2026-03-01" },
  { id: 3, name: "Yoga Flow", type: "flexibility", duration: 45, caloriesBurned: 150, date: "2026-03-01" },
  { id: 4, name: "Deadlift", type: "strength", duration: 20, caloriesBurned: 200, reps: 8, sets: 3, date: "2026-03-01" },
  { id: 5, name: "Cycling", type: "cardio", duration: 40, caloriesBurned: 420, date: "2026-02-28" },
];

const typeConfig = {
  strength: { icon: Dumbbell, color: "text-primary", bg: "bg-primary/10" },
  cardio: { icon: Heart, color: "text-accent", bg: "bg-accent/10" },
  flexibility: { icon: StretchHorizontal, color: "text-primary", bg: "bg-primary/10" },
};

const FitnessModule = () => {
  const [workouts, setWorkouts] = useState<Workout[]>(mockWorkouts);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", type: "strength" as Workout["type"], duration: "", caloriesBurned: "", reps: "", sets: "" });

  const todayWorkouts = workouts.filter((w) => w.date === "2026-03-01");
  const totalDuration = todayWorkouts.reduce((a, w) => a + w.duration, 0);
  const totalCalories = todayWorkouts.reduce((a, w) => a + w.caloriesBurned, 0);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const newWorkout: Workout = {
      id: Date.now(),
      name: form.name,
      type: form.type,
      duration: Number(form.duration),
      caloriesBurned: Number(form.caloriesBurned),
      reps: form.reps ? Number(form.reps) : undefined,
      sets: form.sets ? Number(form.sets) : undefined,
      date: "2026-03-01",
    };
    setWorkouts([newWorkout, ...workouts]);
    setForm({ name: "", type: "strength", duration: "", caloriesBurned: "", reps: "", sets: "" });
    setShowForm(false);
    toast.success("Workout logged!");
  };

  return (
    <div className="space-y-6">
      {/* Daily Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Dumbbell, label: "Workouts", value: todayWorkouts.length.toString(), sub: "today" },
          { icon: Timer, label: "Duration", value: `${totalDuration}`, sub: "minutes" },
          { icon: Flame, label: "Burned", value: totalCalories.toString(), sub: "kcal" },
          { icon: RotateCcw, label: "Total Reps", value: todayWorkouts.reduce((a, w) => a + ((w.reps || 0) * (w.sets || 1)), 0).toString(), sub: "reps" },
        ].map((s) => (
          <div key={s.label} className="nutri-card p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xl font-heading font-bold">{s.value} <span className="text-xs font-normal text-muted-foreground">{s.sub}</span></div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Workout */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-heading font-bold">Today's Workouts</h3>
        <Button onClick={() => setShowForm(!showForm)} size="sm" className="gap-2">
          <Plus className="h-4 w-4" /> Log Workout
        </Button>
      </div>

      {showForm && (
        <div className="nutri-card p-5">
          <form onSubmit={handleAdd} className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Input placeholder="Exercise name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="col-span-2 md:col-span-1" />
            <Select value={form.type} onValueChange={(v) => setForm({ ...form, type: v as Workout["type"] })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="strength">Strength</SelectItem>
                <SelectItem value="cardio">Cardio</SelectItem>
                <SelectItem value="flexibility">Flexibility</SelectItem>
              </SelectContent>
            </Select>
            <Input type="number" placeholder="Duration (min)" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} required />
            <Input type="number" placeholder="Calories burned" value={form.caloriesBurned} onChange={(e) => setForm({ ...form, caloriesBurned: e.target.value })} required />
            <Input type="number" placeholder="Reps (optional)" value={form.reps} onChange={(e) => setForm({ ...form, reps: e.target.value })} />
            <Input type="number" placeholder="Sets (optional)" value={form.sets} onChange={(e) => setForm({ ...form, sets: e.target.value })} />
            <div className="col-span-2 md:col-span-3 flex gap-3">
              <Button type="submit">Add Workout</Button>
              <Button type="button" variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
            </div>
          </form>
        </div>
      )}

      {/* Workout List */}
      <div className="space-y-3">
        {todayWorkouts.map((w) => {
          const cfg = typeConfig[w.type];
          const Icon = cfg.icon;
          return (
            <div key={w.id} className="nutri-card p-4 flex items-center gap-4">
              <div className={`w-10 h-10 rounded-lg ${cfg.bg} flex items-center justify-center shrink-0`}>
                <Icon className={`h-5 w-5 ${cfg.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-heading font-semibold">{w.name}</div>
                <div className="text-xs text-muted-foreground capitalize">{w.type}</div>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>{w.duration} min</span>
                <span className="font-medium text-foreground">{w.caloriesBurned} kcal</span>
                {w.reps && <span>{w.sets}×{w.reps} reps</span>}
              </div>
              <Button variant="ghost" size="icon" onClick={() => { setWorkouts(workouts.filter((x) => x.id !== w.id)); toast.info("Workout removed"); }} className="shrink-0 text-destructive hover:text-destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FitnessModule;
