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
    return programKeybinds.filter((item) => {
      if (showOnlyUsed && item.keys.length < 1) return false;
      if (search && !item.action.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [programKeybinds, showOnlyUsed, showCatigory, search]);

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
          >
            <img
              className="size-[26]"
              src="/icons/icons8-category-26.png"
              alt="category"
            />
          </button>
        </div>
      </div>
      <ul className="flex flex-col gap-1 w-full overflow-y-auto h-[700]">
        {filteredKeybinds.map((item, itemId) => (
          <li
            className="flex justify-between ml-4 pr-2 pl-2 bg-gray-400 rounded-[5px]"
            key={itemId}
          >
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
                        {/* Add "+" if it's not the last key in the combo */}
                        {keyId < combo.length - 1 && <span className="text-black">+</span>}
                      </React.Fragment>
                    );
                  })}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeybindList;
