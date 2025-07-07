import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Card } from "./ui/card";
// import allQualifications from "~/data/qualifications.json";
import { SlidersHorizontal, ChevronsUpDown, Check } from "lucide-react";
import countriesData from "~/data/countries.json"; // Assuming you have a JSON file with country names
import depData from "~/data/departments.json";
import { useAppDispatch, useAppSelector } from "~/hooks/redux";
import { useLocation } from "react-router-dom";
import {
  setSearchTerm,
  setSelectedCountry,
  setSelectedDep,
  setScholarshipFilter,
  // setQualifications,
  resetFilters,
} from "../store/universities/universitiesSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
import { cn } from "~/lib/utils";

const FilterSidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { searchTerm, scholarshipFilter } = useAppSelector(
    (state) => state.university
  );
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [opendep, setOpendep] = useState(false);
  const [valuedep, setValuedep] = useState("Select Department");
  // const handleQualificationChange = (qualName: string) => {
  //   let newQualifications;
  //   if (qualifications.includes(qualName)) {
  //     newQualifications = qualifications.filter((q) => q !== qualName);
  //   } else {
  //     newQualifications = [...qualifications, qualName];
  //   }
  //   dispatch(setQualifications(newQualifiations));
  //   // Only update the query string, not the path
  //   const ids = allQualifications
  //     .filter((q) => newQualifications.includes(q.name))
  //     .map((q) => q.id)
  //     .join(",");
  //   const params = new URLSearchParams(window.location.search);
  //   if (ids) {
  //     params.set("qualification", ids);
  //   } else {
  //     params.delete("qualification");
  //   }
  //   navigate({ search: params.toString() }, { replace: true });
  // };

  const { search } = useLocation();
  const prams = new URLSearchParams(search);
  const currentCountrySlug = prams.get("country") || "";
  const currentDepSlug = prams.get("department") || "";
  const selectedCountryName =
    countriesData.find(
      (c) => c.name.toLowerCase().replace(/\s+/g, "-") === currentCountrySlug
    )?.name || "";
  const selectedDepName =
    depData.find(
      (d) => d.name.toLowerCase().replace(/\s+/g, "-") === currentDepSlug
    )?.name || "";

  return (
    <Card className="md:sticky md:top-0 mx-auto flex max-w-md max-h-fit md:max-h-fit sm:w-auto flex-col rounded-lg border px-5 sm:px-10 py-6">
      <div className="flex gap-16 justify-between">
        <div className="flex items-center gap-2 mb-5">
          <SlidersHorizontal className="text-white" />
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Apply Filters
          </h2>
        </div>
        <div>
          <Button
            onClick={() => {
              dispatch(resetFilters());
              // Remove all filter params from URL
              const params = new URLSearchParams(window.location.search);
              params.set(
                "country",
                countriesData[0].name.toLowerCase().replace(/\s+/g, "-")
              );
              params.delete("department");
              params.delete("qualification");

              navigate({ search: params.toString() }, { replace: true });
            }}
          >
            Reset Filter
          </Button>
        </div>
      </div>
      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-blue-200 mb-1">
          Search
        </label>
        <div className="flex items-center">
          <Input
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            placeholder="Search universities..."
            className="flex-1 bg-blue-900 text-white border-none focus:ring-2 focus:ring-blue-400 placeholder:text-blue-300"
          />
        </div>
      </div>
      {/* Country */}
      <label className="block text-sm font-semibold text-blue-200 mb-1">
        Country
      </label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-auto justify-between bg-blue-900 text-white border-none"
          >
            {selectedCountryName}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="min-w-80 p-0">
          <Command>
            <CommandInput placeholder="Search country..." />
            <CommandList>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countriesData.map((country) => (
                  <CommandItem
                    key={country.code}
                    value={country.name}
                    onSelect={(currentValue: string) => {
                      const selected =
                        currentValue === value ? "" : currentValue;
                      setValue(selected);
                      setOpen(false);
                      dispatch(setSelectedCountry(selected));
                      const params = new URLSearchParams(
                        window.location.search
                      );
                      if (selected) {
                        params.set(
                          "country",
                          selected.toLowerCase().replace(/\s+/g, "-")
                        );
                      } else {
                        params.delete("country");
                      }
                      navigate(
                        { search: params.toString() },
                        { replace: true }
                      );
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === country.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {country.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {/* Scholarship */}
      <div className="my-6">
        <label className="block text-sm font-semibold text-blue-200 mb-1">
          Scholarship
        </label>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant={scholarshipFilter === "all" ? "default" : "outline"}
            className="flex-1"
            onClick={() => dispatch(setScholarshipFilter("all"))}
          >
            All
          </Button>
          <Button
            size="sm"
            variant={scholarshipFilter === "with" ? "default" : "outline"}
            className="flex-1"
            onClick={() => dispatch(setScholarshipFilter("with"))}
          >
            With
          </Button>
          <Button
            size="sm"
            variant={scholarshipFilter === "without" ? "default" : "outline"}
            className="flex-1"
            onClick={() => dispatch(setScholarshipFilter("without"))}
          >
            Without
          </Button>
        </div>
      </div>
      {/* Departments */}
      <label className="block text-sm font-semibold text-blue-200 mb-1">
        Departments
      </label>
      <Popover open={opendep} onOpenChange={setOpendep}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={opendep}
            className="w-auto justify-between bg-blue-900 text-white border-none"
          >
            {selectedDepName ? selectedDepName : "Select Department"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="max-w-80 p-0 text-wrap">
          <Command>
            <CommandInput placeholder="Search department..." />
            <CommandList>
              <CommandEmpty>No department found.</CommandEmpty>
              <CommandGroup>
                {depData.map((dep) => (
                  <CommandItem
                    key={dep.id}
                    value={dep.name}
                    onSelect={(currentValue: any) => {
                      const selected =
                        currentValue === valuedep ? "" : currentValue;
                      setValuedep(selected);
                      setOpendep(false);
                      dispatch(setSelectedDep(dep.id));
                      const params = new URLSearchParams(
                        window.location.search
                      );
                      if (selected) {
                        params.set(
                          "department",
                          selected.toLowerCase().replace(/\s+/g, "-")
                        );
                      } else {
                        params.delete("country");
                      }
                      navigate(
                        { search: params.toString() },
                        { replace: true }
                      );
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === dep.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {dep.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {/* Qualifications */}
      {/* <div>
        <label className="block text-sm font-semibold text-blue-200 mb-1">
          Qualification
        </label>
        <div className="grid grid-cols-2 gap-2 overflow-auto max-h-40 md:max-h-fit">
          {allQualifications.map((qual) => (
            <label
              key={qual.id}
              className={`flex items-center gap-2 px-3 py-1 rounded-lg cursor-pointer transition-all border border-transparent hover:border-blue-400 hover:bg-blue-800/80 shadow-sm ${
                qualifications.includes(qual.name)
                  ? "bg-blue-700 border-blue-400 text-white font-semibold"
                  : "bg-transparent border-blue-400 border-opacity-20 text-blue-100"
              }`}
            >
              <input
                type="checkbox"
                className="accent-blue-400 h-4 w-4 text-blue-800"
                checked={qualifications.includes(qual.name)}
                onChange={() => handleQualificationChange(qual.name)}
              />
              <span className="text-sm break-words">{qual.name}</span>
            </label>
          ))}
        </div>
      </div> */}
    </Card>
  );
};

export default FilterSidebar;
