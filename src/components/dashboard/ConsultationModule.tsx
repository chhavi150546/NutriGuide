import { useState } from "react";
import { CalendarCheck, Clock, User, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface Session {
  id: number;
  nutritionist: string;
  date: string;
  time: string;
  status: "upcoming" | "completed" | "cancelled";
  notes: string;
}

const mockSessions: Session[] = [
  { id: 1, nutritionist: "Dr. Sarah Mitchell", date: "2026-03-05", time: "10:00 AM", status: "upcoming", notes: "Initial diet assessment and goal setting" },
  { id: 2, nutritionist: "Dr. James Chen", date: "2026-02-28", time: "2:00 PM", status: "completed", notes: "Weekly check-in, adjusted meal plan for higher protein" },
  { id: 3, nutritionist: "Dr. Priya Sharma", date: "2026-02-20", time: "11:00 AM", status: "completed", notes: "Reviewed blood work results, added supplements" },
];

const statusColors: Record<string, string> = {
  upcoming: "bg-primary/10 text-primary",
  completed: "bg-accent/10 text-accent",
  cancelled: "bg-destructive/10 text-destructive",
};

const ConsultationModule = () => {
  const [sessions, setSessions] = useState<Session[]>(mockSessions);
  const [showBooking, setShowBooking] = useState(false);
  const [booking, setBooking] = useState({ nutritionist: "", date: "", time: "", notes: "" });

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const newSession: Session = {
      id: Date.now(),
      nutritionist: booking.nutritionist,
      date: booking.date,
      time: booking.time,
      status: "upcoming",
      notes: booking.notes,
    };
    setSessions([newSession, ...sessions]);
    setShowBooking(false);
    setBooking({ nutritionist: "", date: "", time: "", notes: "" });
    toast.success("Consultation session booked!");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-heading font-bold">Consultation Sessions</h3>
        <Button onClick={() => setShowBooking(!showBooking)} className="gap-2" size="sm">
          <Plus className="h-4 w-4" /> Book Session
        </Button>
      </div>

      {showBooking && (
        <div className="nutri-card p-6">
          <h4 className="font-heading font-semibold mb-4">Book New Consultation</h4>
          <form onSubmit={handleBook} className="grid md:grid-cols-2 gap-4">
            <Input placeholder="Nutritionist Name" value={booking.nutritionist} onChange={(e) => setBooking({ ...booking, nutritionist: e.target.value })} required />
            <Input type="date" value={booking.date} onChange={(e) => setBooking({ ...booking, date: e.target.value })} required />
            <Input placeholder="Time (e.g., 10:00 AM)" value={booking.time} onChange={(e) => setBooking({ ...booking, time: e.target.value })} required />
            <Textarea placeholder="Notes for the session" value={booking.notes} onChange={(e) => setBooking({ ...booking, notes: e.target.value })} />
            <div className="md:col-span-2 flex gap-3">
              <Button type="submit">Confirm Booking</Button>
              <Button type="button" variant="outline" onClick={() => setShowBooking(false)}>Cancel</Button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-3">
        {sessions.map((s) => (
          <div key={s.id} className="nutri-card p-4 flex flex-col md:flex-row md:items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-heading font-semibold">{s.nutritionist}</div>
              <p className="text-xs text-muted-foreground mt-1">{s.notes}</p>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground shrink-0">
              <span className="flex items-center gap-1"><CalendarCheck className="h-3.5 w-3.5" /> {s.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {s.time}</span>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-medium capitalize ${statusColors[s.status]}`}>
                {s.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultationModule;
