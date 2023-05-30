import { Routes } from "./Routes";
import { defaultTheme } from './styles/theme/defaultTheme';

import { GlobalStyle } from './styles/global'

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
