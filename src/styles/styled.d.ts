import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string

    colors: {
      main: string
      secondary: string
    }

    mixin: {
      flexCenter: FlattenSimpleInterpolation

      flexBetween: FlattenSimpleInterpolation

      inlineLink: FlattenSimpleInterpolation

      resetList: FlattenSimpleInterpolation
      imoji: FlattenSimpleInterpolation
    }
  }
}
