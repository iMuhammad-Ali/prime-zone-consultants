"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

const frameworks = [
  {
    value: "next.js",
    label: "England",
  },
  {
    value: "sveltekit",
    label: "Turkey",
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full sm:w-[25vw] lg:w-[20vw] justify-between shadow h-[12vw] sm:h-[6vw] lg:h-[3vw] text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] px-[3vw] sm:px-[2vw] lg:px-[1vw]"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select country"}
          <ChevronsUpDown className="w-[4vw] h-[4vw] sm:w-[3vw] sm:h-[3vw] lg:w-[1vw] lg:h-[1vw] opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[90vw] sm:w-[25vw] lg:w-[20vw] p-0">
        <Command>
          <CommandInput
            placeholder="Search framework..."
            className="h-[10vw] sm:h-[6vw] lg:h-[2.5vw] text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw]"
          />
          <CommandList>
            <CommandEmpty className="text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw]">
              No framework found.
            </CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  className="text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] py-[2vw] sm:py-[1.5vw] lg:py-[0.5vw]"
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto w-[4vw] h-[4vw] sm:w-[3vw] sm:h-[3vw] lg:w-[1vw] lg:h-[1vw]",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
