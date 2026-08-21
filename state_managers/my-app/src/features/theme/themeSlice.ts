import { createSlice } from "@reduxjs/toolkit"

type Theme = "light" | "dark"

type ThemeState = {
  theme: Theme
}

const initialState: ThemeState = {
  theme: "light",
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme === "light" ? "dark" : "light"
    },
  },
  selectors: {
    selectTheme: state => state.theme,
  },
})

export const { toggleTheme } = themeSlice.actions

export const { selectTheme } = themeSlice.selectors