import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "games", href: "#games" },
  { label: "apps", href: "#apps" },
  { label: "settings", href: "#settings" },
  { label: "pr0xy", href: "#pr0xy" },
];

export const Navigation = () => {
  const [activeTab, setActiveTab] = useState("games");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 animate-slide-in-top">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              hideout
            </span>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 bg-[hsl(var(--nav-background))] border border-[hsl(var(--nav-border))] rounded-full p-1 backdrop-blur-sm shadow-subtle">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant={activeTab === item.label ? "nav-active" : "nav"}
                size="nav"
                onClick={() => setActiveTab(item.label)}
                className="relative"
              >
                {item.label}
                {activeTab === item.label && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-xl -z-10" />
                )}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </nav>
  );
};
