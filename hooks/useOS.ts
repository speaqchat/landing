import { useEffect, useState } from "react";

export const useOS = () => {
  const [OS, setOS] = useState<"Windows" | "macOS" | "Linux" | null>(null);

  useEffect(() => {
    if (OS) return;

    if (typeof navigator !== "undefined") {
      if (navigator.userAgent.includes("Win")) setOS("Windows");
      if (navigator.userAgent.includes("Mac")) setOS("macOS");
      if (navigator.userAgent.includes("Linux")) setOS("Linux");
    }
  }, []);

  return OS;
};
