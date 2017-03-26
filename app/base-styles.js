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

  baseFontSize: 18,

  baseSpacing: 20,
  smallSpacing: 10,
  largeSpacing: 40,
  tidePhraseStyle: {
    fontWeight: 'bold',
    color: '#E5E7E9',
    fontSize: 42,
    lineHeight: 48,
    marginRight: 8,
  },
  headerStyle: {
    fontSize: 18,
    color: blackPearl,
    fontWeight: '600',
  },

  navigationBarHeight: 64,
  navigationBar: {
    backgroundColor: 'white',
    borderBottomWidth: 0,
  },
  navigationTitle: {
    fontWeight: '500',
  },
  navigationLeftButton: {
    color: pictonBlue,
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
