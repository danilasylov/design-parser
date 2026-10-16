import React,{createContext,useContext,useState} from 'react';
const Context=createContext({theme:'dark',resolvedTheme:'dark',setTheme:()=>{}});
export function ThemeProvider({children}){
  const [theme,setTheme]=useState('dark');
  return <Context.Provider value={{theme,resolvedTheme:theme,setTheme,systemTheme:'dark',themes:['light','dark']}}><div className={`${theme} native-theme`}>{children}</div></Context.Provider>;
}
export function useTheme(){return useContext(Context)}
