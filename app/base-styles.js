import Colors from './styles/colors'

import { numericFontFamily } from './fonts'

const BaseStyle = {
  ...Colors,
  secondaryHeader: {
    fontSize: 20,
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
  largeSpacing: 44,
  tidePhrase: {
    fontWeight: 'bold',
    color: Colors.subtleColor,
    fontSize: 34,
    marginRight: 4,
  },
  chartAxisStyles: {
    axis: { stroke: 'transparent' },
    tickLabels: {
      fontSize: 9,
      padding: 5,
      fontFamily: numericFontFamily,
      fill: Colors.mediumGray,
    },
  },

  numericFontFamily,
}

export default BaseStyle
