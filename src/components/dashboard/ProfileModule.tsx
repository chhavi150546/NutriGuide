import { useState } from "react";
import { User, Target, Heart, Ruler, Weight, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const ProfileModule = () => {
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
    age: "28",
    gender: "male",
    height: "175",
    currentWeight: "78.5",
    targetWeight: "74",
    activityLevel: "moderate",
    goal: "weight_loss",
  });

  const handleSave = () => {
    toast.success("Profile updated successfully!");
  };

  const bmi = (Number(profile.currentWeight) / Math.pow(Number(profile.height) / 100, 2)).toFixed(1);
  const bmiCategory = Number(bmi) < 18.5 ? "Underweight" : Number(bmi) < 25 ? "Normal" : Number(bmi) < 30 ? "Overweight" : "Obese";

  return (
    <div className="space-y-6">
      {/* Health Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Weight, label: "Current Weight", value: `${profile.currentWeight} kg` },
          { icon: Target, label: "Target Weight", value: `${profile.targetWeight} kg` },
          { icon: Ruler, label: "BMI", value: `${bmi} (${bmiCategory})` },
          { icon: Heart, label: "Activity Level", value: profile.activityLevel.charAt(0).toUpperCase() + profile.activityLevel.slice(1) },
        ].map((s) => (
          <div key={s.label} className="nutri-card p-4">
            <div className="flex items-center gap-2 mb-1">
              <s.icon className="h-4 w-4 text-primary" />
              <span className="text-xs text-muted-foreground">{s.label}</span>
            </div>
            <div className="text-lg font-heading font-bold">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Profile Form */}
      <div className="nutri-card p-6">
        <div className="flex items-center gap-2 mb-5">
          <User className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-heading font-bold">Personal Information</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Full Name</label>
            <Input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Email</label>
            <Input value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Age</label>
            <Input type="number" value={profile.age} onChange={(e) => setProfile({ ...profile, age: e.target.value })} />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Gender</label>
            <Select value={profile.gender} onValueChange={(v) => setProfile({ ...profile, gender: v })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Height (cm)</label>
            <Input type="number" value={profile.height} onChange={(e) => setProfile({ ...profile, height: e.target.value })} />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Current Weight (kg)</label>
            <Input type="number" value={profile.currentWeight} onChange={(e) => setProfile({ ...profile, currentWeight: e.target.value })} />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Target Weight (kg)</label>
            <Input type="number" value={profile.targetWeight} onChange={(e) => setProfile({ ...profile, targetWeight: e.target.value })} />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Activity Level</label>
            <Select value={profile.activityLevel} onValueChange={(v) => setProfile({ ...profile, activityLevel: v })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="sedentary">Sedentary</SelectItem>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="very_active">Very Active</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Goals */}
      <div className="nutri-card p-6">
        <div className="flex items-center gap-2 mb-5">
          <Target className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-heading font-bold">Fitness Goal</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { value: "weight_loss", label: "Weight Loss", desc: "Reduce body fat with a calorie deficit" },
            { value: "muscle_gain", label: "Muscle Gain", desc: "Build lean muscle with surplus calories" },
            { value: "maintenance", label: "Maintenance", desc: "Maintain current weight and fitness" },
          ].map((g) => (
            <button
              key={g.value}
              type="button"
              onClick={() => setProfile({ ...profile, goal: g.value })}
              className={`p-4 rounded-xl border text-left transition-all ${profile.goal === g.value ? "border-primary bg-primary/5 shadow-sm" : "border-border hover:border-primary/30"}`}
            >
              <div className="font-heading font-semibold text-sm">{g.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{g.desc}</div>
            </button>
          ))}
        </div>
      </div>

      <Button onClick={handleSave} className="gap-2">
        <Save className="h-4 w-4" /> Save Changes
      </Button>
    </div>
  );
};

export default ProfileModule;
