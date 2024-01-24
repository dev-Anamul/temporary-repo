/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import useThemeDetector from "../../hooks/useThemeDetector";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";

function Swap() {
  const isDarkTheme = useThemeDetector();

  const [isDark, setIsDark] = useState(isDarkTheme);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");

      // we save the theme in localStorage todo: this is for future use
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");

      // we save the theme in localStorage todo: this is for future use
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" checked={isDark} onChange={toggleTheme} />

      {/* sun icon */}
      <SunIcon />

      {/* moon icon */}
      <MoonIcon />
    </label>
  );
}

export default Swap;
