import {
  numericFontFamily,
} from './fonts'

const blackPearl = 'rgba(1, 13, 36, 1)'
const pictonBlue = 'rgba(82, 187, 255, 1.00)'
const transparent = 'rgba(0, 0, 0, 0)'
const blueWhale = 'rgba(63, 102, 142, 1.00)'
const pastelOrange = 'rgba(255, 186, 73, 1.00)'
const marinerBlue = 'rgba(57, 103, 153, 1.00)'

const BaseStyle = {
  baseBackgroundColor: 'white',
  baseTextColor: blackPearl,
  actionColor: pictonBlue,
  subtleColor: blueWhale,
  warningColor: pastelOrange,
  chartLabelColor: marinerBlue,

  phraseFontSize: 60,
  baseFontSize: 18,

  baseSpacing: 14,
  smallSpacing: 6,
  largeSpacing: 26,

  navigationBarStyles: {
    navBarBackgroundColor: 'white',
    statusBarTextColorScheme: 'dark',
    navBarNoBorder: true,
    navBarTransparent: false,
    navBarTranslucent: false,
    navBarBlur: false,
  },

  transparent,
  numericFontFamily,
}

export default BaseStyle
