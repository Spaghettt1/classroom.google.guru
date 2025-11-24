import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const RequestAppDialog = () => {
  const handleRequest = () => {
    window.open("https://github.com/Hideout-Network/hideout/issues/new", "_blank");
  };

  return (
    <Button onClick={handleRequest} className="gap-2">
      <Plus className="w-4 h-4" />
      Request App
    </Button>
  );
};
