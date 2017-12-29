import Colors from './styles/colors'

import { numericFont, numericFontSemiBold } from './fonts'

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
  smallNumericFontSize: 14,
  baseFontSize: 18,
  tinySpacing: 4,
  smallSpacing: 10,
  baseSpacing: 20,
  largeSpacing: 44,
  tidePhrase: {
    fontWeight: '800',
    color: Colors.subtleColor,
    fontSize: 34,
    marginRight: 4,
  },
  chartAxisStyles: {
    axis: { stroke: 'transparent' },
    tickLabels: {
      fontSize: 10,
      padding: 5,
      fontFamily: numericFont,
      fill: Colors.mediumGray,
    },
  },
  whiteCard: {
    flex: 1,
    backgroundColor: 'white',
    shadowColor: Colors.darkBackgroundColor,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingBottom: 10,
  },

  numericFont,
  numericFontSemiBold,
}

export default BaseStyle
