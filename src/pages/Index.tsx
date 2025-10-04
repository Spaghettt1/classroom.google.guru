import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-glow opacity-50 animate-glow-pulse" />
      
      <Navigation />

      {/* Hero Section */}
      <main className="relative pt-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>Welcome to your hideout</span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            Your digital{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent animate-glow-pulse">
              sanctuary
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Access your favorite games, apps, and tools all in one modern, secure platform.
            Built for speed, designed for you.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="secondary">
              Learn More
            </Button>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-5xl mx-auto">
            {[
              {
                title: "Lightning Fast",
                description: "Optimized performance for seamless experience",
              },
              {
                title: "Secure & Private",
                description: "Your data stays safe with end-to-end encryption",
              },
              {
                title: "Always Available",
                description: "Access your hideout from anywhere, anytime",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom gradient line */}
      <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </div>
  );
};

export default Index;
