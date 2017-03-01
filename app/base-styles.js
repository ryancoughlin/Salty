import {
  numericFontFamily,
} from './fonts'

const blackPearl = 'rgba(1, 13, 36, 1)'
const fadedBlackPearl = 'rgba(1, 13, 36, 0.5)'
const pictonBlue = 'rgba(82, 187, 255, 1)'
const pastelOrange = 'rgba(255, 186, 73, 1)'
const marinerBlue = 'rgba(57, 103, 153, 1)'
const transparent = 'rgba(0, 0, 0, 0)'

const BaseStyle = {
  baseBackgroundColor: 'white',
  darkBackgroundColor: blackPearl,
  baseTextColor: blackPearl,
  actionColor: pictonBlue,
  subtleColor: fadedBlackPearl,
  warningColor: pastelOrange,
  chartLabelColor: marinerBlue,

  phraseFontSize: 56,
  baseFontSize: 18,

  baseSpacing: 20,
  smallSpacing: 6,
  largeSpacing: 26,

  navigationBarStyles: {
    navBarBackgroundColor: 'white',
    navBarNoBorder: true,
    navBarTransparent: false,
    navBarTranslucent: false,
    navBarBlur: false,
  },

  chartAxisStyles: {
    axis: { stroke: 'transparent' },
    tickLabels: {
      fontSize: 10,
      padding: 5,
      fontFamily: numericFontFamily,
      fill: fadedBlackPearl,
    },
  },

  transparent,
  numericFontFamily,
}

export default BaseStyle
