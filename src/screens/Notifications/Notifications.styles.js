import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: fontSizes.title,
    color: Colors.light,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.gray3 + '50',
    width: '100%',
    paddingBottom: 10,
  },
  content: {
    backgroundColor: Colors.gray6,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.gray3 + '50',
    borderRadius: 15,
    marginTop: 30,
    width: '95%',
    padding: 10,
    alignContent: 'center',
    alignItems: 'center',
  },
  dataContent: {
    marginLeft: 10,
    flexDirection: 'column',
    alignContent: 'center',
    alignSelf: 'center',
  },
  name: {
    fontSize: fontSizes.default,
    color: Colors.white,
  },
  datetime: {
    color: Colors.gray3,
    fontSize: fontSizes.extraSmall,
  },
});
export default styles;
