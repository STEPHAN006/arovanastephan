"use client"

import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "lucide-react"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg dark:bg-gray-800/90  dark:hover:bg-gray-700 transition-colors"
    >
      {theme === "light" ? (
        <SunIcon size={20}  />
      ) : (
        <MoonIcon size={20}  />
      )}
    </button>
  )
} 