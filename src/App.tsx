import { Routes } from "./Routes";
import { defaultTheme } from './pages/styles/theme/defaultTheme';

import { GlobalStyle } from './pages/styles/global'

import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
