"use client";
import React from "react";
import { nordicLayout } from "../keyboardLayoutsData";
import { ProgramKeybind, FingerColors, KeyData } from "@/types";

// layout to test
const layout: KeyData[][] = nordicLayout;

interface KeyboardVisualizerProps {
  programKeybinds: ProgramKeybind;
  fingerColors: FingerColors;
}

const KeyboardVisualizer: React.FC<KeyboardVisualizerProps> = ({
  programKeybinds,
  fingerColors,
}) => {
  // Flatten all keys (from nested combos) and normalize to uppercase
  const activeKeySet = new Set(
    programKeybinds.flatMap((item) =>
      item.keys.flatMap((combo: string[]) => combo.map((key) => key.toUpperCase()))
    )
  );

  return (
    <div className="p-6 bg-white text-black">
      <h2 className="text-xl font-semibold mb-4">Keyboard Visualizer</h2>
      <div className="space-y-2">
        {layout.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex gap-1"
          >
            {row.map((key, keyIndex) => {
              const keyLabelUpper = key.label.toUpperCase();
              const isActive = activeKeySet.has(keyLabelUpper);

              return (
                <div
                  key={keyIndex}
                  className="border border-gray-400 bg-gray-100 rounded text-center size-[60px] text-[15px] font-mono p-2"
                  style={{
                    flex: key.w || 1,
                    backgroundColor: fingerColors[key.finger] || undefined,
                    border: isActive ? "2px solid black" : undefined,
                    opacity: isActive ? 1 : 0.3,
                  }}
                >
                  {key.label}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyboardVisualizer;
