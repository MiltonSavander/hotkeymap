"use client";
import { useState } from "react";
import KeyboardVisualizer from "@/components/KeyboardVisualizer";
import KeybindList from "@/components/KeybindList";
import testData from "@/output.json";

export default function KeyboardVisualizerPage() {
  const [fingerColors, setFingerColors] = useState({
    L5: "#e57373",
    L4: "#f06292",
    L3: "#ba68c8",
    L2: "#64b5f6",
    R2: "#4db6ac",
    R3: "#81c784",
    R4: "#ffd54f",
    R5: "#ffb74d",
    Thumb: "#a1887f",
  });

  return (
    <main className="h-full w-full flex flex-row overflow-hidden">
      <KeybindList
        programKeybinds={testData}
        fingerColors={fingerColors}
      />
      <div className="flex flex-1 justify-center items-center">
        <KeyboardVisualizer
          programKeybinds={testData}
          fingerColors={fingerColors}
        />
      </div>
    </main>
  );
}
