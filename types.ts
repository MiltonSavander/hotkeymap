export interface ProgramKeybind {
  id: string;
  action: string;
  category: string;
  keys: string[][];
}

export interface FingerColors {
  L5: string;
  L4: string;
  L3: string;
  L2: string;
  R2: string;
  R3: string;
  R4: string;
  R5: string;
  Thumb: string;
}

export type KeyData = {
  label: string;
  w?: number;
  finger?: Finger;
};

export type Finger =
  | "L5" // Left pinky
  | "L4" // Left ring
  | "L3" // Left middle
  | "L2" // Left index
  | "R2" // Right index
  | "R3" // Right middle
  | "R4" // Right ring
  | "R5" // Right pinky
  | "Thumb";
