import React, { useContext } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import AppContext from "../../store/app-context";

const MainNavigation = () => {
  const ctx = useContext(AppContext);

  //Save on context

  return (
    <aside>
      <div>Component introText</div>
      <div>logo</div>
      <div>contact</div>

      <DarkModeToggle
        onChange={ctx.toggleThemeMode}
        checked={ctx.themeMode}
        size={80}
      />
    </aside>
  );
};

export default MainNavigation;
