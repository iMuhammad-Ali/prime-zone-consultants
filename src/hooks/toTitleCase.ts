const toTitleCase = (str: string | undefined) => {
  if (!str) return "";
  return str
    .replace(/[_\-]+/g, " ") // replace _ and - with space
    .replace(/([a-z])([A-Z])/g, "$1 $2") // insert space between camelCase
    .replace(/\s+/g, " ") // remove extra spaces
    .trim() // trim ends
    .toLowerCase() // lowercase everything first
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
export default toTitleCase;
