import KeyboardVisualizer from "@/components/KeyboardVisualizer";
import KeybindList from "@/components/KeybindList";
import testData from "@/output.json";

export default function KeyboardVisualizerPage() {
  return (
    <main className="h-full w-full flex flex-row overflow-hidden">
      <KeybindList data={testData} />
      <div className="flex flex-1 justify-center items-center">
        <KeyboardVisualizer data={testData} />
      </div>
    </main>
  );
}
