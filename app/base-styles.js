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
    fontSize: 28,
    color: Colors.baseTextColor,
    fontWeight: 'bold',
  },

  baseFontSize: 18,

  tinySpacing: 4,
  smallSpacing: 10,
  baseSpacing: 20,
  largeSpacing: 40,

  tidePhraseStyle: {
    fontWeight: 'bold',
    color: '#E5E7E9',
    fontSize: 36,
    lineHeight: 42,
    marginRight: 6,
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
