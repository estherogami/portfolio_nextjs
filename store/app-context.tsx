import { createContext, useState, useCallback } from "react";


interface IAppContext {
  themeMode: boolean;
  hoverStatus: boolean;
  toggleThemeMode: (NewThemeMode: boolean) => void;
  toggleHoverStatus: (NewHoverStatus: boolean) => void;
}

const AppContext = createContext<IAppContext>({
  themeMode: false,
  hoverStatus: false,
  toggleThemeMode: (NewThemeMode: boolean) => {},
  toggleHoverStatus: (NewHoverStatus: boolean) => {},
});



export function AppContextProvider(props) {
  const [themeMode, setThemeMode] = useState<boolean>(false);
  const [hoverStatus, setHoverStatus] = useState<boolean>(false);

  const toggleThemeMode =  useCallback(() => setThemeMode(themeMode => !themeMode), []);

  const toggleHoverStatus =  useCallback(() => setHoverStatus(hoverStatus => !hoverStatus), []);

  const context = {
    themeMode,
    hoverStatus,
    toggleThemeMode,
    toggleHoverStatus,
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
}

export default AppContext;
