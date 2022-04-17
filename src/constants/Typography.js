import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size / scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
}

export const fontSizes = {
  superSmall: normalize(10),
  extraSmall: normalize(12),
  small: normalize(14),
  default: normalize(16),
  medium: normalize(18),
  large: normalize(20),
  extraLarge: normalize(22),
  title: normalize(24),
  titleLarge: normalize(26),
};

export const customFontSizes = (size) => normalize(size);

export default { fontSizes, customFontSizes };
