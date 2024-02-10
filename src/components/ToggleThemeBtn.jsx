import React, { useEffect } from "react";

function ToggleThemeBtn() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark:bg-dark-veryDarkBlue");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex gap-5 items-center justify-between md:justify-normal">
      <span className="text-light-darkGrayishBlue font-700 dark:text-dark-desaturatedBlue">
        Dark Mode
      </span>
      <button
        onClick={() =>
          setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
        }
        className="toggle-btn"
      ></button>
    </div>
  );
}

export default ToggleThemeBtn;
