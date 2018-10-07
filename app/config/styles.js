import color from './colors';
import metrics from './metrics';
import fonts from './fonts';
const ApplicationStyles = {
    container: {
        flex: 1,
        backgroundColor: color.COLOR_CONTAINER,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fontlight: {
      fontFamily: fonts.FONT_LIGHT,
      fontSize: 20,
    },
    fontsemibold: {
      fontFamily: fonts.FONT_SEMIBOLD,
    }
}

export const uiTheme = {
    palette: {
      primaryColor: color.COLOR_PRIMARY,
      accentColor: color.COLOR_PRIMARY,
    },
    toolbar: {
      container: {
        height: metrics.navBarHeight,
      },
    },
  };

export default ApplicationStyles;