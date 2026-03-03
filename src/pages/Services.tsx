import { Utensils, HeartPulse, CalendarCheck, Users, Salad, Activity } from "lucide-react";

const services = [
  { icon: Utensils, title: "Custom Meal Plans", desc: "Receive meals tailored to your dietary goals, allergies, and preferences. Updated weekly by our experts." },
  { icon: HeartPulse, title: "Health Assessments", desc: "Complete health evaluation to determine optimal nutrition strategy for your body type." },
  { icon: CalendarCheck, title: "Weekly Scheduling", desc: "Automated meal scheduling with shopping lists and prep instructions delivered to your inbox." },
  { icon: Users, title: "1-on-1 Consultations", desc: "Book private video sessions with certified nutritionists and dietitians." },
  { icon: Salad, title: "Recipe Database", desc: "Access 500+ healthy recipes with calorie counts, macros, and step-by-step instructions." },
  { icon: Activity, title: "Progress Tracking", desc: "Track your weight, nutrition intake, and health metrics with detailed analytics." },
];

const Services = () => (
  <div>
    <section className="bg-primary/10 py-20 text-center">
      <div className="container">
        <h1 className="section-heading mb-3">Our <span>Services</span></h1>
        <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive nutrition and diet services to transform your health.</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="nutri-card p-8 group hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <s.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
