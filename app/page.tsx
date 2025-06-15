import KeyboardVisualizer from "@/components/KeyboardVisualizer";
import KeybindList from "@/components/KeybindList";
import { testData } from "@/testData";

export default function KeyboardVisualizerPage() {
  return (
    <div className="flex h-screen w-screen">
      <KeybindList data={testData} />
      <div className="flex-1 flex items-center justify-center ">
        <KeyboardVisualizer data={testData} />
      </div>
    </div>
  );
}
