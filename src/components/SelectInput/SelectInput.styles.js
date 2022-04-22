import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 48,
    backgroundColor: Colors.green1 + '40',
    justifyContent: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.green1,
    marginBottom: 8,
  },
  error: {
    color: Colors.red,
    position: 'absolute',
    top: '100%',
    fontSize: 11,
    marginLeft: 4,
  },
});
export default styles;
