import { useEffect, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Moon, Sun, SunMoon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Slider } from "../ui/slider";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );

  const [hue, setHue] = useState<number>(() => {
    const savedHue = localStorage.getItem("hue");
    return savedHue ? Number(savedHue) : 240;
  });

  const [customThemeEnabled, setCustomThemeEnabled] = useState<boolean>(
    localStorage.getItem("customThemeEnabled") == "true" ? true : false
  );

  useEffect(() => {
    const root = document.documentElement;

    const updateThemeStyles = (theme: "light" | "dark", hue: number) => {
      if (customThemeEnabled) {
        if (theme === "light") {
          root.style.setProperty("--background", `${hue} 40% 98%`);
          root.style.setProperty("--foreground", `${hue} 20% 20%`);
          root.style.setProperty("--card", `${hue} 40% 100%`);
          root.style.setProperty("--card-foreground", `${hue} 20% 20%`);
          root.style.setProperty("--popover", `${hue} 40% 100%`);
          root.style.setProperty("--popover-foreground", `${hue} 20% 20%`);
          root.style.setProperty("--primary", `${hue} 50% 40%`);
          root.style.setProperty("--primary-foreground", `${hue} 50% 90%`);
          root.style.setProperty("--secondary", `${hue} 40% 90%`);
          root.style.setProperty("--secondary-foreground", `${hue} 50% 30%`);
          root.style.setProperty("--muted", `${hue} 40% 90%`);
          root.style.setProperty("--muted-foreground", `${hue} 30% 40%`);
          root.style.setProperty("--accent", `${hue} 50% 70%`);
          root.style.setProperty("--accent-foreground", `${hue} 20% 10%`);
          root.style.setProperty("--destructive", `${hue} 100% 40%`);
          root.style.setProperty("--destructive-foreground", `${hue} 50% 90%`);
          root.style.setProperty("--border", `${hue} 40% 80%`);
          root.style.setProperty("--input", `${hue} 40% 80%`);
          root.style.setProperty("--ring", `${hue} 50% 50%`);
          root.style.setProperty("--chart-1", `${hue} 60% 50%`);
          root.style.setProperty("--chart-2", `${hue} 50% 45%`);
          root.style.setProperty("--chart-3", `${hue} 60% 35%`);
          root.style.setProperty("--chart-4", `${hue} 70% 60%`);
          root.style.setProperty("--chart-5", `${hue} 80% 65%`);
          root.style.setProperty("--radius", "0.5rem");
          root.style.setProperty("--sidebar-background", `${hue} 40% 95%`);
          root.style.setProperty("--sidebar-foreground", `${hue} 30% 20%`);
          root.style.setProperty("--sidebar-primary", `${hue} 40% 50%`);
          root.style.setProperty(
            "--sidebar-primary-foreground",
            `${hue} 50% 90%`
          );
          root.style.setProperty("--sidebar-accent", `${hue} 60% 80%`);
          root.style.setProperty(
            "--sidebar-accent-foreground",
            `${hue} 20% 10%`
          );
          root.style.setProperty("--sidebar-border", `${hue} 30% 70%`);
          root.style.setProperty("--sidebar-ring", `${hue} 70% 50%`);
          root.style.setProperty("--scrollbar-bg", `${hue} 30% 95%`);
          root.style.setProperty("--scrollbar-thumb", `${hue} 30% 70%`);
          root.style.setProperty("--scrollbar-thumb-hover", `${hue} 30% 60%`);
        } else {
          root.style.setProperty("--background", `${hue} 40% 12%`);
          root.style.setProperty("--foreground", `${hue} 20% 98%`);
          root.style.setProperty("--card", `${hue} 40% 12%`);
          root.style.setProperty("--card-foreground", `${hue} 20% 98%`);
          root.style.setProperty("--popover", `${hue} 40% 12%`);
          root.style.setProperty("--popover-foreground", `${hue} 20% 98%`);
          root.style.setProperty("--primary", `${hue} 50% 90%`);
          root.style.setProperty("--primary-foreground", `${hue} 50% 10%`);
          root.style.setProperty("--secondary", `${hue} 40% 20%`);
          root.style.setProperty("--secondary-foreground", `${hue} 50% 90%`);
          root.style.setProperty("--muted", `${hue} 40% 20%`);
          root.style.setProperty("--muted-foreground", `${hue} 30% 60%`);
          root.style.setProperty("--accent", `${hue} 50% 50%`);
          root.style.setProperty("--accent-foreground", `${hue} 20% 90%`);
          root.style.setProperty("--destructive", `${hue} 100% 30%`);
          root.style.setProperty("--destructive-foreground", `${hue} 50% 90%`);
          root.style.setProperty("--border", `${hue} 40% 20%`);
          root.style.setProperty("--input", `${hue} 40% 20%`);
          root.style.setProperty("--ring", `${hue} 50% 70%`);
          root.style.setProperty("--chart-1", `${hue} 70% 45%`);
          root.style.setProperty("--chart-2", `${hue} 50% 35%`);
          root.style.setProperty("--chart-3", `${hue} 60% 25%`);
          root.style.setProperty("--chart-4", `${hue} 80% 60%`);
          root.style.setProperty("--chart-5", `${hue} 90% 65%`);
          root.style.setProperty("--radius", "0.5rem");
          root.style.setProperty("--sidebar-background", `${hue} 40% 30%`);
          root.style.setProperty("--sidebar-foreground", `${hue} 30% 90%`);
          root.style.setProperty("--sidebar-primary", `${hue} 40% 50%`);
          root.style.setProperty(
            "--sidebar-primary-foreground",
            `${hue} 50% 90%`
          );
          root.style.setProperty("--sidebar-accent", `${hue} 60% 60%`);
          root.style.setProperty(
            "--sidebar-accent-foreground",
            `${hue} 20% 10%`
          );
          root.style.setProperty("--sidebar-border", `${hue} 30% 30%`);
          root.style.setProperty("--sidebar-ring", `${hue} 70% 40%`);
          root.style.setProperty("--scrollbar-bg", `${hue} 30% 10%`);
          root.style.setProperty("--scrollbar-thumb", `${hue} 30% 25%`);
          root.style.setProperty("--scrollbar-thumb-hover", `${hue} 30% 35%`);
        }
      } else {
        if (theme === "light") {
          root.style.setProperty("--background", "0 0% 100%");
          root.style.setProperty("--foreground", "0 0% 3.9%");
          root.style.setProperty("--card", "0 0% 100%");
          root.style.setProperty("--card-foreground", "0 0% 3.9%");
          root.style.setProperty("--popover", "0 0% 100%");
          root.style.setProperty("--popover-foreground", "0 0% 3.9%");
          root.style.setProperty("--primary", "0 0% 9%");
          root.style.setProperty("--primary-foreground", "0 0% 98%");
          root.style.setProperty("--secondary", "0 0% 96.1%");
          root.style.setProperty("--secondary-foreground", "0 0% 9%");
          root.style.setProperty("--muted", "0 0% 96.1%");
          root.style.setProperty("--muted-foreground", "0 0% 45.1%");
          root.style.setProperty("--accent", "0 0% 96.1%");
          root.style.setProperty("--accent-foreground", "0 0% 9%");
          root.style.setProperty("--destructive", "0 84.2% 60.2%");
          root.style.setProperty("--destructive-foreground", "0 0% 98%");
          root.style.setProperty("--border", "0 0% 89.8%");
          root.style.setProperty("--input", "0 0% 89.8%");
          root.style.setProperty("--ring", "0 0% 3.9%");
          root.style.setProperty("--chart-1", "12 76% 61%");
          root.style.setProperty("--chart-2", "173 58% 39%");
          root.style.setProperty("--chart-3", "197 37% 24%");
          root.style.setProperty("--chart-4", "43 74% 66%");
          root.style.setProperty("--chart-5", "27 87% 67%");
          root.style.setProperty("--radius", "0.5rem");
          root.style.setProperty("--sidebar-background", "0 0% 98%");
          root.style.setProperty("--sidebar-foreground", "240 5.3% 26.1%");
          root.style.setProperty("--sidebar-primary", "240 5.9% 10%");
          root.style.setProperty("--sidebar-primary-foreground", "0 0% 98%");
          root.style.setProperty("--sidebar-accent", "240 4.8% 95.9%");
          root.style.setProperty("--sidebar-accent-foreground", "240 5.9% 10%");
          root.style.setProperty("--sidebar-border", "220 13% 91%");
          root.style.setProperty("--sidebar-ring", "217.2 91.2% 59.8%");
          root.style.setProperty("--scrollbar-bg", "0 0% 90%");
          root.style.setProperty("--scrollbar-thumb", "0 0% 60%");
          root.style.setProperty("--scrollbar-thumb-hover", "0 0% 40%");
        } else {
          root.style.setProperty("--background", "0 0% 3.9%");
          root.style.setProperty("--foreground", "0 0% 98%");
          root.style.setProperty("--card", "0 0% 3.9%");
          root.style.setProperty("--card-foreground", "0 0% 98%");
          root.style.setProperty("--popover", "0 0% 3.9%");
          root.style.setProperty("--popover-foreground", "0 0% 98%");
          root.style.setProperty("--primary", "0 0% 98%");
          root.style.setProperty("--primary-foreground", "0 0% 9%");
          root.style.setProperty("--secondary", "0 0% 14.9%");
          root.style.setProperty("--secondary-foreground", "0 0% 98%");
          root.style.setProperty("--muted", "0 0% 14.9%");
          root.style.setProperty("--muted-foreground", "0 0% 63.9%");
          root.style.setProperty("--accent", "0 0% 14.9%");
          root.style.setProperty("--accent-foreground", "0 0% 98%");
          root.style.setProperty("--destructive", "0 62.8% 30.6%");
          root.style.setProperty("--destructive-foreground", "0 0% 98%");
          root.style.setProperty("--border", "0 0% 14.9%");
          root.style.setProperty("--input", "0 0% 14.9%");
          root.style.setProperty("--ring", "0 0% 83.1%");
          root.style.setProperty("--chart-1", "220 70% 50%");
          root.style.setProperty("--chart-2", "160 60% 45%");
          root.style.setProperty("--chart-3", "30 80% 55%");
          root.style.setProperty("--chart-4", "280 65% 60%");
          root.style.setProperty("--chart-5", "340 75% 55%");
          root.style.setProperty("--sidebar-background", "240 5.9% 10%");
          root.style.setProperty("--sidebar-foreground", "240 4.8% 95.9%");
          root.style.setProperty("--sidebar-primary", "224.3 76.3% 48%");
          root.style.setProperty("--sidebar-primary-foreground", "0 0% 100%");
          root.style.setProperty("--sidebar-accent", "240 3.7% 15.9%");
          root.style.setProperty(
            "--sidebar-accent-foreground",
            "240 4.8% 95.9%"
          );
          root.style.setProperty("--sidebar-border", "240 3.7% 15.9%");
          root.style.setProperty("--sidebar-ring", "217.2 91.2% 59.8%");
          root.style.setProperty("--scrollbar-bg", "0 0% 14.9%");
          root.style.setProperty("--scrollbar-thumb", "0 0% 30%");
          root.style.setProperty("--scrollbar-thumb-hover", "0 0% 50%");
        }
      }
    };

    updateThemeStyles(theme, hue);
  }, [hue, theme, customThemeEnabled]);

  useEffect(() => {
    localStorage.setItem("hue", String(hue));
  }, [hue]);

  useEffect(() => {
    localStorage.setItem("customThemeEnabled", String(customThemeEnabled));
  }, [customThemeEnabled]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Popover>
      <PopoverTrigger>
        <SunMoon />
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex items-center flex-col gap-2 w-full">
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-full"
          >
            {theme === "dark" ? (
              <>
                <Sun />
                Light Mode
              </>
            ) : (
              <>
                <Moon />
                Dark Mode
              </>
            )}
          </Button>
          <div
            onClick={() => setCustomThemeEnabled(!customThemeEnabled)}
            className="flex items-center justify-center space-x-2 border w-full rounded p-3 cursor-pointer"
          >
            <Checkbox
              id="custom-theme"
              checked={customThemeEnabled}
              onCheckedChange={(isCustom: boolean) =>
                setCustomThemeEnabled(isCustom)
              }
            />
            <label
              htmlFor="custom-theme"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Custom
            </label>
          </div>
          {customThemeEnabled && (
            <div className="d-flex space-y-3 flex-col w-full">
              <div className="flex">
                {Array.from({ length: 360 }).map((_, index) => (
                  <div
                    key={index}
                    // onClick={() => setHue(index)}
                    style={{
                      backgroundColor: `hsl(${index}, 40%, 70%)`,
                      // theme === "dark"
                      //   ? `hsl(${index}, 40%, 12%)`
                      //   : `hsl(${index}, 40%, 70%)`,
                      width: "1px",
                      height: "30px",
                    }}
                  />
                ))}
              </div>
              <Slider
                defaultValue={[hue]}
                onValueChange={([val]) => setHue(val)}
                max={360}
                step={1}
                className="cursor-pointer"
              />
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};
