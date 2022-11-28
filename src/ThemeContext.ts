
import React, {ReactNode, useState} from "react"


export const themes: any = {
  light:{
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
export const ThemeContext = React.createContext(themes.light)
export const  ThemeContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState(themes.light)
    
    function toggleTheme() {
        setTheme((prevTheme: any) => prevTheme === themes.light ? themes.dark : themes.light)
    }
    const values = {
      theme,
      toggleTheme
    };
    
      return React.createElement(ThemeContext.Provider, { value: values }, children);
    
    // return (
    //     <ThemeContext.Provider value={{theme, toggleTheme}}>
    //         {props.children}
    //     </ThemeContext.Provider>
    // )
}


