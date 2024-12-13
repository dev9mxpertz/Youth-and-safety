
import React, { useState } from "react";

const ToggleSwitch: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsChecked((prev) => !prev);
  };

  return (
    <label className="flex cursor-pointer items-center">
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          className="sr-only"
        />
        <div
          className={`block h-6 w-20 rounded-full transition-colors ${
            isChecked ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`absolute left-1 top-1 h-6 w-10 rounded-full bg-white transition-transform ${
            isChecked ? "translate-x-6" : ""
          }`}
        >
          {isChecked?      <p>Dark</p>:<p>Light</p> }
          
        </div>
      </div>
    </label>
  );
};


export default ToggleSwitch;