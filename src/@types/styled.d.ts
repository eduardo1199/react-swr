import 'styled-components'
import { defaultTheme } from 'pages/styles/theme/defaultTheme'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}