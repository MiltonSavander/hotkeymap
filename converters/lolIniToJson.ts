const iniSnippet = `
evtUseVisionItem=[<Unbound>]
evtUseItem7=[b]
evtUseItem6=[7]
evtUseItem5=[6]
evtUseItem4=[5]
evtUseItem3=[3]
evtUseItem2=[2]
evtUseItem1=[1]
evtSysMenu=[Esc]
evtSmartCastSpell4=[Shift][r]
evtSmartCastSpell3=[Shift][e]
evtSmartCastSpell2=
evtSmartCastSpell1=
evtSomethingCustom=
`.trim();

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

const parseKeys = (raw: string): string[] => {
  const matches = [...raw.matchAll(/\[([^\]]+)\]/g)];
  return matches.map((m) => m[1]).filter((k) => k !== "<Unbound>");
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

const result = convertIniToJson(iniSnippet);
console.log(JSON.stringify(result, null, 2));
