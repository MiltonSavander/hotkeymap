import React from "react";
import { nordicLayout } from "../keyboardLayoutsData";
import { ProgramKeybind, FingerColors, KeyData, Finger } from "@/types";

interface KeybindListProps {
  programKeybinds: ProgramKeybind[];
  fingerColors: FingerColors;
}

const findKeyFinger = (labelToCheck: string): Finger | undefined => {
  for (const row of nordicLayout) {
    for (const key of row) {
      console.log("this is key.label", key.label);
      if (key.label.toUpperCase() === labelToCheck.toUpperCase()) {
        return key.finger;
      }
    }
  }
  return undefined;
};

const KeybindList: React.FC<KeybindListProps> = ({ programKeybinds, fingerColors }) => {
  return (
    <div className="w-lg flex flex-col items-center gap-2 m-3 p-2 bg-gray-800 rounded-2xl">
      <h2>Keybind List</h2>
      <ul className="flex flex-col gap-1 w-full overflow-y-auto max-h-full">
        {programKeybinds.map((item, itemId) => (
          <li
            className="flex justify-between pr-2 pl-2 bg-gray-400 rounded-[5px]"
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
