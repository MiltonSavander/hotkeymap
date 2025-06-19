"use client";
import React, { useMemo, useState } from "react";
import { nordicLayout } from "../keyboardLayoutsData";
import { ProgramKeybind, FingerColors, KeyData, Finger } from "@/types";

interface KeybindListProps {
  programKeybinds: ProgramKeybind[];
  fingerColors: FingerColors;
}

const findKeyFinger = (labelToCheck: string): Finger | undefined => {
  for (const row of nordicLayout) {
    for (const key of row) {
      if (key.label.toUpperCase() === labelToCheck.toUpperCase()) {
        return key.finger;
      }
    }
  }
  return undefined;
};

const KeybindList: React.FC<KeybindListProps> = ({ programKeybinds, fingerColors }) => {
  const [showOnlyUsed, setShowOnlyUsed] = useState(false);
  const [showCatigory, setShowCatigory] = useState(false);
  const [search, setSearch] = useState("");

  const handleFilterUnused = () => {
    setShowOnlyUsed((prev) => !prev);
  };

  const handleFilterCatigory = () => {
    setShowCatigory((prev) => !prev);
  };

  console.log("this is programKeybinds", programKeybinds);

  const filteredKeybinds = useMemo(() => {
    const filtered = programKeybinds.filter((item) => {
      if (showOnlyUsed && item.keys.length < 1) return false;
      if (search && !item.action.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });

    if (!showCatigory) return filtered;

    // Group by category
    const grouped: Record<string, ProgramKeybind[]> = {};
    for (const item of filtered) {
      const category = item.category || "Uncategorized";
      if (!grouped[category]) grouped[category] = [];
      grouped[category].push(item);
    }
    console.log("this is grouped", grouped);
    return grouped;
  }, [programKeybinds, showOnlyUsed, showCatigory, search]);

  const KeybindListItem: React.FC<{
    item: ProgramKeybind;
    fingerColors: FingerColors;
  }> = ({ item, fingerColors }) => (
    <li className="flex justify-between ml-4 pr-2 pl-2 bg-gray-400 rounded-[5px]">
      <div>{item.action}</div>
      <div className="flex gap-2 flex-wrap">
        {item.keys.map((combo, comboId) => (
          <div
            key={comboId}
            className="flex items-center gap-1"
          >
            {combo.map((key, keyId) => {
              const finger = findKeyFinger(key);
              const backgroundColor = finger ? fingerColors[finger] : "#ccc";

              return (
                <React.Fragment key={keyId}>
                  <div
                    className="text-black px-2 py-1 rounded font-mono"
                    style={{ backgroundColor }}
                  >
                    {key}
                  </div>
                  {keyId < combo.length - 1 && <span className="text-black">+</span>}
                </React.Fragment>
              );
            })}
          </div>
        ))}
      </div>
    </li>
  );

  console.log("this is filtered", filteredKeybinds);
  return (
    <div className="w-lg flex flex-col items-center gap-2 m-3 p-2 bg-gray-800 rounded-2xl">
      <h2>Keybind List</h2>
      <div className="w-full  flex gap-1 ">
        <input
          type="text"
          className="h-full w-full text-black bg-amber-200 px-2"
          placeholder="Search actions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex gap-1 h-full">
          <button
            className="w-12 flex justify-center items-center p-1 rounded-sm bg-gray-400 cursor-pointer"
            onClick={handleFilterUnused}
            style={{ opacity: showOnlyUsed ? 1 : 0.5 }}
          >
            <img
              className="size-[26]"
              src="/icons/icons8-hide-30.png"
              alt="hide"
            />
          </button>
          <button
            className="w-12 flex justify-center items-center p-1 rounded-sm bg-gray-400"
            onClick={handleFilterCatigory}
            style={{ opacity: showCatigory ? 1 : 0.5 }}
          >
            <img
              className="size-[26]"
              src="/icons/icons8-category-26.png"
              alt="category"
            />
          </button>
        </div>
      </div>
      <ul className="flex flex-col gap-1 w-full overflow-y-auto h-[700px]">
        {!showCatigory &&
          (filteredKeybinds as ProgramKeybind[]).map((item, itemId) => (
            <KeybindListItem
              key={itemId}
              item={item}
              fingerColors={fingerColors}
            />
          ))}

        {showCatigory &&
          Object.entries(filteredKeybinds as Record<string, ProgramKeybind[]>).map(
            ([category, items]) => (
              <React.Fragment key={category}>
                <li className="text-white font-bold mt-4 mb-1">{category}</li>
                {items.map((item, idx) => (
                  <KeybindListItem
                    key={`${category}-${idx}`}
                    item={item}
                    fingerColors={fingerColors}
                  />
                ))}
              </React.Fragment>
            )
          )}
      </ul>
    </div>
  );
};

export default KeybindList;
