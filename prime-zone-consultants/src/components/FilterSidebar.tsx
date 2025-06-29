import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import allQualifications from "~/data/qualifications.json";
import { SlidersHorizontal } from "lucide-react";
import countriesData from "~/data/countries.json"; // Assuming you have a JSON file with country names
import { useAppDispatch, useAppSelector } from "~/hooks/redux";
import { useLocation } from "react-router-dom";
import {
  setSearchTerm,
  setSelectedCountry,
  setScholarshipFilter,
  setQualifications,
} from "~/store/universities/universitiesSlice";
import { useNavigate } from "react-router-dom";

const FilterSidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { searchTerm, scholarshipFilter, qualifications } = useAppSelector(
    (state) => state.university
  );

  const handleQualificationChange = (qualName: string) => {
    let newQualifications;
    if (qualifications.includes(qualName)) {
      newQualifications = qualifications.filter((q) => q !== qualName);
    } else {
      newQualifications = [...qualifications, qualName];
    }
    dispatch(setQualifications(newQualifications));
    // Only update the query string, not the path
    const ids = allQualifications
      .filter((q) => newQualifications.includes(q.name))
      .map((q) => q.id)
      .join(",");
    const params = new URLSearchParams(window.location.search);
    if (ids) {
      params.set("qualification", ids);
    } else {
      params.delete("qualification");
    }
    navigate({ search: params.toString() }, { replace: true });
  };

  const { search } = useLocation();
  const prams = new URLSearchParams(search);
  const currentCountry = prams.get("country") || "";

  return (
    <aside className="w-full md:max-w-fit min-w-fit max-h-fit flex-shrink-0 text-gray-700 p-6 bg-blue-900 rounded-2xl shadow-xl border border-blue-900">
      <div className="flex items-center gap-2 mb-6">
        <SlidersHorizontal className="text-white" />
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Filters
        </h2>
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
      <div className="mb-6">
        <label className="block text-sm font-semibold text-blue-200 mb-1">
          Country
        </label>
        <select
          value={currentCountry ?? ""}
          onChange={(e) => dispatch(setSelectedCountry(e.target.value))}
          className="w-full bg-blue-900 text-white rounded-lg px-3 py-2 mb-1 border-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All Countries</option>
          {countriesData.map((country) => (
            <option key={country.code} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      {/* Scholarship */}
      <div className="mb-6">
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
      {/* Qualifications */}
      <div>
        <label className="block text-sm font-semibold text-blue-200 mb-1">
          Qualification
        </label>
        <div className="grid grid-cols-2 gap-2 max-h-48 overflow-auto">
          {allQualifications.map((qual) => (
            <label
              key={qual.id}
              className="flex items-center gap-2 bg-blue-800 rounded-lg px-2 py-1 text-blue-100 cursor-pointer hover:bg-blue-700 transition"
            >
              <input
                type="checkbox"
                className="accent-blue-400"
                checked={qualifications.includes(qual.name)}
                onChange={() => handleQualificationChange(qual.name)}
              />
              <span className="text-sm">{qual.name}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
