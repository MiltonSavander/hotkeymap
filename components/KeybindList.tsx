import React from "react";

const KeybindList = ({ data }) => {
  return (
    <div className="h-11/12 w-sm bg-gray-600 flex flex-col justify-start items-center gap-1 rounded-2xl p-1 m-4">
      <h2>Keybind List</h2>
      <ul className="w-full p-2 flex flex-col gap-1">
        {data.map((item, itemId) => (
          <li
            className="flex w-full justify-between bg-gray-400 rounded-[5px] pl-3 pr-3"
            key={itemId}
          >
            <div>{item.action}</div>
            <div className="flex gap-1">
              {item.keys.map((key, keyId) => (
                <div key={keyId}>{key}</div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeybindList;
