import aboutImage from "@/assets/about-food.jpg";

const About = () => (
  <div>
    {/* Banner */}
    <section className="bg-primary/10 py-20 text-center">
      <div className="container">
        <h1 className="section-heading mb-3">About <span>NutriGuide</span></h1>
        <p className="text-muted-foreground max-w-xl mx-auto">Our mission is to make personalized nutrition accessible to everyone.</p>
      </div>
    </section>

    {/* Content */}
    <section className="py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-heading font-bold mb-4">We Make Healthy Eating Simple</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            NutriGuide is a personalized diet and meal planning system designed to help you achieve your health goals.
            Our platform connects you with certified nutritionists and provides custom meal plans based on your needs.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Built with modern client-server architecture using Node.js and Express.js, our system handles routing,
            session management, and real-time consultations — all designed for a seamless experience.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { n: "500+", l: "Recipes" },
              { n: "50+", l: "Nutritionists" },
              { n: "10K+", l: "Happy Users" },
            ].map((s) => (
              <div key={s.l} className="text-center nutri-card p-4">
                <div className="text-2xl font-heading font-bold text-primary">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img src={aboutImage} alt="Healthy ingredients" className="w-full h-96 object-cover" />
        </div>
      </div>
    </section>
  </div>
);

export default About;
