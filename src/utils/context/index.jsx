import React, { createContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({children})=>{
    const [theme,setTheme] = useState('light')
    const toggleTheme = () =>{
        setTheme(theme === 'light' ? 'dark':'light')
    }
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const SurveyContext = createContext()

export const SurveyProvider = ({ children }) => {
  const [answers, setAnswers] = useState({})
  const saveAnswers = (newAnswers) => {
    setAnswers({ ...answers, ...newAnswers })
  }

  return (
    <SurveyContext.Provider value={{ answers, saveAnswers }}>
      {children}
    </SurveyContext.Provider>
  )
}
//I made this useContext example for my understanding
export const BgContext = createContext()

export const Bg = ({children}) => {
  const [bg,setBg] = useState("black")
  const saveBg = (newBg) =>{
    setBg(newBg==='black'?"white":"black")
  }
  return (
    <BgContext.Provider value={{bg,saveBg}}>
      {children}
    </BgContext.Provider>
  )
}

