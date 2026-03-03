import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  { id: 1, title: "10 Superfoods to Boost Your Immune System", excerpt: "Discover the top nutrient-dense foods that can strengthen your body's natural defenses and keep you feeling your best.", category: "Nutrition", readTime: "5 min", date: "Feb 28, 2026", image: "🥦" },
  { id: 2, title: "Understanding Macros: A Beginner's Guide", excerpt: "Learn the fundamentals of macronutrients — proteins, carbs, and fats — and how to balance them for optimal health.", category: "Education", readTime: "8 min", date: "Feb 25, 2026", image: "📊" },
  { id: 3, title: "Meal Prep Sunday: 5 Easy Recipes", excerpt: "Save time and eat healthier with these simple, delicious meal prep recipes that last the entire week.", category: "Recipes", readTime: "6 min", date: "Feb 22, 2026", image: "🍱" },
  { id: 4, title: "The Science Behind Intermittent Fasting", excerpt: "Explore the research behind intermittent fasting and discover if it's the right approach for your dietary goals.", category: "Science", readTime: "10 min", date: "Feb 18, 2026", image: "🧬" },
  { id: 5, title: "Hydration: More Than Just Water", excerpt: "Learn why proper hydration goes beyond just drinking water and how electrolytes play a crucial role in your health.", category: "Wellness", readTime: "4 min", date: "Feb 15, 2026", image: "💧" },
  { id: 6, title: "Post-Workout Nutrition: What to Eat and When", excerpt: "Maximize your workout results with the right post-exercise nutrition timing and food choices.", category: "Fitness", readTime: "7 min", date: "Feb 12, 2026", image: "💪" },
];

const categories = ["All", "Nutrition", "Education", "Recipes", "Science", "Wellness", "Fitness"];

const BlogModule = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-heading font-bold">Nutrition Blog</h3>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              cat === "All" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <div key={article.id} className="nutri-card overflow-hidden group cursor-pointer">
            <div className="h-32 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-4xl">
              {article.image}
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="nutri-badge text-[10px]">{article.category}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" /> {article.readTime}
                </span>
              </div>
              <h4 className="font-heading font-semibold text-sm leading-snug mb-1 group-hover:text-primary transition-colors">
                {article.title}
              </h4>
              <p className="text-xs text-muted-foreground line-clamp-2">{article.excerpt}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-muted-foreground">{article.date}</span>
                <Button variant="ghost" size="sm" className="gap-1 text-xs h-7 px-2 text-primary">
                  Read <ArrowRight className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogModule;
