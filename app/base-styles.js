const blackPearl = 'rgba(1, 13, 36, 1)'
const pictonBlue = 'rgba(82, 187, 255, 1.00)'
const white = 'rgba(255, 255, 255, 1)'

const BaseStyle = {
  baseBackgroundColor: blackPearl,
  baseTextColor: white,
  actionColor: pictonBlue,

  phraseFontSize: 32,
  baseFontSize: 18,

  baseSpacing: 16,

  navigationBarStyles: {
    navBarBackgroundColor: this.baseBackgroundColor,
    statusBarTextColorScheme: 'light',
    navBarNoBorder: true,
    navBarTransparent: false,
    navBarTranslucent: false,
    navBarBlur: false,
  },
}

export default BaseStyle
