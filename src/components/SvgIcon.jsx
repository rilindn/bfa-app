import { StyleSheet } from 'react-native';
import { SvgCss } from 'react-native-svg';

import icons from '../constants/SvgIcons';

const SvgIcon = ({ width, height, name, color }) => {
  const icon = icons[name];
  return <SvgCss width={width} height={height} xml={icon} fill={color} />;
};

export default SvgIcon;

const styles = StyleSheet.create({});
