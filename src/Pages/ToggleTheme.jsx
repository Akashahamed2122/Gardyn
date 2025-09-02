import React, { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkSide from './useDarkSide';

const ToggleTheme = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme === "light" ? "dark" : "light"); // ✅ correct toggle
    setDarkSide(checked);
  };

  return (
    <div>
      <DarkModeSwitch
        checked={darkSide}
        onChange={toggleDarkMode}
        size={30}
      />
    </div>
  );
};

export default ToggleTheme;
