import { createContext, ReactElement, useEffect, useState } from 'react';

const MyThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

export function MyThemeContextProvider(props: any): ReactElement {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  useEffect(() => initialThemeHandler(), []);

  function checkLocalStorageForBeingEmpty(): boolean {
    return !localStorage.getItem('isDarkTheme');
  }

  function initialThemeHandler(): void {
    if (checkLocalStorageForBeingEmpty()) {
      localStorage.setItem('isDarkTheme', `true`);
      document!.querySelector('body')!.classList.add('dark');
      setIsDarkTheme(true);
    } else {
      const isDarkTheme: boolean = JSON.parse(localStorage.getItem('isDarkTheme')!);
      isDarkTheme && document!.querySelector('body')!.classList.add('dark');
      setIsDarkTheme(() => {
        return isDarkTheme;
      });
    }
  }

  function toggleThemeHandler() {
    const isDarkTheme: boolean = JSON.parse(localStorage.getItem('isDarkTheme')!);
    setIsDarkTheme(!isDarkTheme);
    toggleDarkClassToBody();
    setValueToLocalStorage();
  }

  function toggleDarkClassToBody(): void {
    document!.querySelector('body')!.classList.toggle('dark');
  }

  function setValueToLocalStorage(): void {
    localStorage.setItem('isDarkTheme', `${!isDarkTheme}`);
  }

  return <MyThemeContext.Provider value={{ isDarkTheme: true, toggleThemeHandler }}>{props.children}</MyThemeContext.Provider>;
}

export default MyThemeContext;
