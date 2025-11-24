import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import eruda from "eruda";

interface DevToolsProps {
  onClose: () => void;
}

export const DevTools = ({ onClose }: DevToolsProps) => {
  const erudaContainerRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (erudaContainerRef.current && !isInitialized) {
      try {
        eruda.init({
          container: erudaContainerRef.current,
          tool: ['console', 'elements', 'network', 'resources', 'info', 'snippets', 'sources'],
          useShadowDom: true,
          autoScale: true,
        });
        setIsInitialized(true);
        toast.success("Developer Tools loaded");
      } catch (error) {
        console.error("Failed to initialize Eruda:", error);
        toast.error("Failed to load developer tools");
      }
    }

    return () => {
      if (isInitialized) {
        try {
          eruda.destroy();
        } catch (error) {
          console.error("Failed to destroy Eruda:", error);
        }
      }
    };
  }, [isInitialized]);

  return (
    <div 
      className="fixed inset-0 bg-background z-[9999] flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
        <div className="flex items-center gap-3">
          <h3 className="font-semibold">Developer Tools</h3>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Eruda Container */}
      <div ref={erudaContainerRef} className="flex-1 overflow-hidden" />
    </div>
  );
};
