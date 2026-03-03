import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(isSignUp ? "Account created successfully!" : "Signed in successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12">
      <div className="w-full max-w-md mx-4">
        <div className="nutri-card p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-3">
              <Leaf className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-2xl font-heading font-bold">{isSignUp ? "Create Account" : "Welcome Back"}</h1>
            <p className="text-sm text-muted-foreground mt-1">
              {isSignUp ? "Start your nutrition journey" : "Sign in to your NutriGuide account"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && <Input placeholder="Full Name" required />}
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Button type="submit" className="w-full" size="lg">
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button onClick={() => setIsSignUp(!isSignUp)} className="text-primary font-medium hover:underline">
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
