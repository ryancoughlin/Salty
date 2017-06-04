import Colors from './styles/colors'
import Navigation from './styles/navigation'

import { numericFontFamily } from './fonts'

const BaseStyle = {
  ...Colors,
  navigation: {
    ...Navigation,
  },
  headerStyle: {
    fontSize: 18,
    color: Colors.baseTextColor,
    fontWeight: '600',
  },
  largeHeaderText: {
    fontSize: 26,
    color: Colors.baseTextColor,
    fontWeight: 'bold',
  },

  baseFontSize: 18,

  tinySpacing: 4,
  smallSpacing: 10,
  baseSpacing: 20,
  largeSpacing: 40,

  tidePhrase: {
    fontWeight: 'bold',
    color: Colors.subtleColor,
    fontSize: 34,
    lineHeight: 40,
    marginRight: 4,
  },
  navigationButton: {
    fontSize: 16,
    color: Colors.baseTextColor,
    marginTop: -4,
  },
  chartAxisStyles: {
    axis: { stroke: 'transparent' },
    tickLabels: {
      fontSize: 10,
      padding: 5,
      fontFamily: numericFontFamily,
      fill: Colors.fadedBlackPearl,
    },
  },

  numericFontFamily,
}

export default BaseStyle
