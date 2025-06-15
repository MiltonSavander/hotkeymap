const fs = require("fs");

// Read file synchronously (or use async version if you prefer)
const iniData = fs.readFileSync("./input.ini", "utf-8");

const categorize = (id: string): string => {
  if (id.includes("UseItem")) return "Items";
  if (id.includes("SmartCastSpell")) return "Abilities";
  if (id.includes("SysMenu")) return "System";
  if (id.includes("SmartCastWithIndicator")) return "Abilities";
  if (id.includes("SmartPlusSelfCast")) return "Self Cast";
  return "Other";
};

const humanizeAction = (id: string): string => {
  return id
    .replace(/^evt/, "")
    .replace(/([A-Z])/g, " $1")
    .trim();
};

const parseKeys = (raw: string): string[][] => {
  return raw
    .split(",")
    .map((combo) => {
      const matches = [...combo.matchAll(/\[([^\]]+)\]/g)];
      return matches.map((m) => m[1]).filter((k) => k !== "<Unbound>");
    })
    .filter((group) => group.length > 0);
};

const convertIniToJson = (ini: string) => {
  return ini
    .split("\n")
    .filter((line) => line.includes("="))
    .map((line) => {
      const [rawId, rawBinding = ""] = line.split("=");
      const id = rawId.trim();
      const keys = parseKeys(rawBinding.trim());

      return {
        id,
        category: categorize(id),
        action: humanizeAction(id),
        keys, // this will be [] if unbound or empty
      };
    });
};

const result = convertIniToJson(iniData);
const dataToWrite = JSON.stringify(result, null, 2); // your JSON string

fs.writeFileSync("output.json", dataToWrite, "utf8");

console.log("File written successfully!");
