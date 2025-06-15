"use client";
import React from "react";
import { nordicLayout, simplelayout } from "../keyboardLayoutsData";

type KeyData = {
  label: string;
  w?: number; // width multiplier (default = 1)
};

//layout to test
const layout: KeyData[][] = nordicLayout;

const KeyboardVisualizer: React.FC = () => {
  return (
    <div className="p-6 bg-white text-black">
      <h2 className="text-xl font-semibold mb-4">Keyboard Visualizer</h2>
      <div className="space-y-2">
        {layout.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex gap-1"
          >
            {row.map((key, keyIndex) => (
              <div
                key={keyIndex}
                className="border border-gray-400 bg-gray-100 rounded text-center text-sm font-mono p-2"
                style={{ flex: key.w || 1 }}
              >
                {key.label}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyboardVisualizer;
