import React from "react";

const KeybindList = ({ data }) => {
  return (
    <div className="w-lg flex flex-col items-center gap-2 m-3 p-2 bg-gray-800 rounded-2xl">
      <h2>Keybind List</h2>
      <ul className="flex flex-col gap-1 w-full overflow-y-auto max-h-full">
        {data.map((item, itemId) => (
          <li
            className="flex justify-between pr-2 pl-2 bg-gray-400 rounded-[5px]"
            key={itemId}
          >
            <div>{item.action}</div>
            <div className="flex gap-2 flex-wrap">
              {item.keys.map((combo, comboId) => (
                <div key={comboId}>{combo.join(" + ")}</div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeybindList;
