import React from 'react'
import {ThemeContext} from "../providers/ThemeProvider"

export const ToggleDarkMode = () => {
    const { theme, setTheme } = React.useContext(ThemeContext)
  
    function isDark() {
      return theme === "dark"
    }
  
    return (
      <div class="flex items-center justify-center w-full mb-0 mt-1 ml-1 mr-1">
  
      {/*   <!-- Toggle Button -->
       */}  <label 
          for="toogleA"
          class="flex items-center cursor-pointer"
        >
      {/*     <!-- toggle -->
       */}    <div class="relative">
      {/*       <!-- input -->
       */}      <input id="toogleA" type="checkbox" class="hidden" checked={isDark()}
          onChange={e => setTheme(e.target.checked ? "dark" : "light")} />
      {/*       <!-- line -->
       */}      <div
              class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
            ></div>
      {/*       <!-- dot -->
       */}      <div
              class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
            ></div>
          </div>
      {/*     <!-- label -->
       */}    <div
            class="ml-0 text-black-700 font-bold"
          ><h2>&nbsp; The Development Paradox</h2>
          </div>
        </label>
        
      </div>
    )
  }