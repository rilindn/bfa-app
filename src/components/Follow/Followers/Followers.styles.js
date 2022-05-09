import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 390,
    marginTop: 20,
  },
  content: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.gray3 + '50',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dataContent: {
    flexDirection: 'column',
    marginRight: 140,
    alignContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  name: {
    fontSize: fontSizes.small,
    color: Colors.white,
  },
  role: {
    fontSize: fontSizes.extraSmall,
    color: Colors.white,
  },
  label: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  removeLabel: {
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 5,
    color: Colors.white,
    fontSize: fontSizes.extraSmall,
  },
});
export default styles;
