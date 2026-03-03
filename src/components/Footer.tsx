import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-background/80 pt-16 pb-8">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-lg font-heading font-bold text-background">NutriGuide</span>
          </div>
          <p className="text-sm leading-relaxed max-w-md text-background/60">
            Personalized diet and meal planning system. Get expert consultation,
            tailored meal plans, and achieve your health goals with NutriGuide.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Services", "Contact"].map((l) => (
              <li key={l}>
                <Link to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="hover:text-primary transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-background mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li>333 Broome St, New York, NY 10002</li>
            <li>+1 (234) 567-8900</li>
            <li>info@nutriguide.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 pt-6 text-center text-xs text-background/40">
        © {new Date().getFullYear()} NutriGuide. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
