import { useEffect } from "react";
import "./style.css";

export const Toggle = () => {
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", currentTheme);

    const checked = document.querySelector(
      '.theme-switch input[type="checkbox"]'
    );

    if (currentTheme === "dark") {
      checked.checked = true;
    }
  }, []);

  const switchTheme = (event) => {
    if (event.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="theme-switch-wrapper">
      <span>Dark mode</span>
      <label className="theme-switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={switchTheme} />
        <div className="slider round"></div>
      </label>
    </div>
  );
};
