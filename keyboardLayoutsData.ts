export type KeyData = {
  label: string;
  w?: number;
  iso?: string;
};

export const nordicLayout: KeyData[][] = [
  // Row 0: Function row
  [
    { label: "Esc" },
    { label: "F1" },
    { label: "F2" },
    { label: "F3" },
    { label: "F4" },
    { label: "F5" },
    { label: "F6" },
    { label: "F7" },
    { label: "F8" },
    { label: "F9" },
    { label: "F10" },
    { label: "F11" },
    { label: "F12" },
    { label: "Del" },
  ],
  // Row 1
  [
    { label: "§" },
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "7" },
    { label: "8" },
    { label: "9" },
    { label: "0" },
    { label: "+" },
    { label: "´" },
    { label: "Backspace", w: 2 },
  ],
  // Row 2
  [
    { label: "Tab", w: 1.5 },
    { label: "Q" },
    { label: "W" },
    { label: "E" },
    { label: "R" },
    { label: "T" },
    { label: "Y" },
    { label: "U" },
    { label: "I" },
    { label: "O" },
    { label: "P" },
    { label: "Å" },
    { label: "^" },
  ],
  // Row 3
  [
    { label: "Caps", w: 1.8 },
    { label: "A" },
    { label: "S" },
    { label: "D" },
    { label: "F" },
    { label: "G" },
    { label: "H" },
    { label: "J" },
    { label: "K" },
    { label: "L" },
    { label: "Ö" },
    { label: "Ä" },
    { label: "*" },
    { label: "Enter", w: 2 },
  ],
  // Row 4
  [
    { label: "Shift", w: 2.2 },
    { label: "<" },
    { label: "Z" },
    { label: "X" },
    { label: "C" },
    { label: "V" },
    { label: "B" },
    { label: "N" },
    { label: "M" },
    { label: "," },
    { label: "." },
    { label: "-" },
    { label: "Shift", w: 2.2 },
  ],
  // Row 5
  [
    { label: "Ctrl", w: 1.5 },
    { label: "Win", w: 1.5 },
    { label: "Alt", w: 1.5 },
    { label: "Space", w: 6 },
    { label: "AltGr", w: 1.5 },
    { label: "Fn", w: 1.5 },
    { label: "Ctrl", w: 1.5 },
  ],
];

export const simplelayout: KeyData[][] = [
  [{ label: "Esc" }, { label: "F1" }, { label: "F2" }],
  [{ label: "`" }, { label: "1" }, { label: "2" }, { label: "3" }],
  [{ label: "Tab" }, { label: "Q" }, { label: "W" }, { label: "E" }],
  [{ label: "Shift" }, { label: "Z" }, { label: "X" }, { label: "C" }],
  [
    { label: "Ctrl" },
    { label: "Alt" },
    { label: "Space", w: 5 },
    { label: "Alt" },
    { label: "Ctrl" },
  ],
];
