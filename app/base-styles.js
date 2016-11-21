import {
  numericFontFamily,
  headlineFontFamily,
  bodyFontFamily,
} from './fonts'

const blackPearl = 'rgba(1, 13, 36, 1)'
const pictonBlue = 'rgba(82, 187, 255, 1.00)'
const white = 'rgba(255, 255, 255, 1)'
const transparent = 'rgba(0, 0, 0, 0)'
const blueWhale = 'rgba(63, 102, 142, 1.00)'
const pastelOrange = 'rgba(255, 186, 73, 1.00)'
const marinerBlue = 'rgba(57, 103, 153, 1.00)'

const BaseStyle = {
  baseBackgroundColor: blackPearl,
  baseTextColor: white,
  actionColor: pictonBlue,
  subtleColor: blueWhale,
  warningColor: pastelOrange,
  chartLabelColor: marinerBlue,

  phraseFontSize: 32,
  baseFontSize: 20,

  baseSpacing: 16,
  largeSpacing: 26,

  navigationBarStyles: {
    navBarBackgroundColor: blackPearl,
    statusBarTextColorScheme: 'light',
    navBarNoBorder: true,
    navBarTransparent: false,
    navBarTranslucent: false,
    navBarBlur: false,
  },

  transparent,
  bodyFontFamily,
  numericFontFamily,
  headlineFontFamily,
}

export default BaseStyle
