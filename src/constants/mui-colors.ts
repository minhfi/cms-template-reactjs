import { toCssVariables } from './mui-theme'

// colors mapping from figma
export const Colors = {
  black: '#000',
  white: '#fff',
  primary: {
    50: '#FEFFF5',
    100: '#FEFEEC',
    200: '#FCFECD',
    300: '#FAFDAA',
    400: '#F7FB6F',
    500: '#F2F92F',
    600: '#DAE029',
    700: '#B7BC24',
    800: '#92961D',
    900: '#757817'
  },
  positive: {
    50: '#F6FDFA',
    100: '#EAFBF2',
    200: '#D0F6E3',
    300: '#B2F0D1',
    400: '#72E3AD',
    500: '#3AD98A',
    600: '#32C37A',
    700: '#2BA166',
    800: '#218253',
    900: '#1C6944'
  },
  negative: {
    50: '#FEF6F7',
    100: '#FDE8EB',
    200: '#FACCD4',
    300: '#F7ABB8',
    400: '#F26E84',
    500: '#EA2E4E',
    600: '#D52A47',
    700: '#AF233A',
    800: '#8D1C2F',
    900: '#731726'
  },
  orange: {
    50: '#FFF8F0',
    100: '#FFF3E6',
    200: '#FFE0BD',
    300: '#FFCF99',
    400: '#FFAC4D',
    500: '#FF8800',
    600: '#E67A00',
    700: '#BD6500',
    800: '#995200',
    900: '#804400'
  },
  cyan: {
    50: '#F2FDFD',
    100: '#E8FBFC',
    200: '#BFF3F7',
    300: '#97EBF2',
    400: '#4FDEE8',
    500: '#00D1E0',
    600: '#00BAC7',
    700: '#009DA8',
    800: '#007C85',
    900: '#00646B'
  },
  purple: {
    50: '#F7F3FC',
    100: '#F0E5FA',
    200: '#DAC0F2',
    300: '#C299EB',
    400: '#944DDB',
    500: '#6600CC',
    600: '#5C00B8',
    700: '#4D0099',
    800: '#3D007A',
    900: '#330066'
  },
  'neutral/light-theme': {
    50: '#FFFFFF',
    100: '#F1F2F3',
    200: '#DADBE7',
    250: '#AFB0BE',
    300: '#80818E',
    400: '#5B5C67',
    500: '#42434D',
    600: '#2C2D35',
    700: '#24252D',
    800: '#1D1E26',
    900: '#181920'
  },
  // not implemented
  'neutral/dark-theme': {
    50: '#1F1D36',
    100: '#1D1E26',
    200: '#864879',
    250: '',
    300: '#B689C0',
    400: '#E9A6A6',
    500: '',
    600: '#864879',
    700: '#B689C0',
    800: '',
    900: ''
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    colors: Record<keyof ReturnType<typeof toCssVariables>, string>
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors: Record<keyof ReturnType<typeof toCssVariables>, string>
  }
}
