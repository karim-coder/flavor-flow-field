
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold/10 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon size={18} className="text-gold" />
      ) : (
        <Sun size={18} className="text-gold" />
      )}
    </button>
  );
}
