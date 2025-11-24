import { Bug } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ReportBugDialog = () => {
  const handleReportBug = () => {
    window.open("https://github.com/Hideout-Network/hideout/issues/new", "_blank");
  };

  return (
    <Button onClick={handleReportBug} variant="outline" className="gap-2">
      <Bug className="w-4 h-4" />
      Report Bug
    </Button>
  );
};
