import { StyleSheet, Dimensions } from 'react-native';

import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  main: {
    marginTop: 20,
    paddingTop: 10,
    width: '100%',
    alignSelf: 'center',
    height: '100%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.gray3 + '50',
  },
  title: {
    color: Colors.light,
    fontSize: fontSizes.title,
    marginHorizontal: 15,
    fontFamily: 'poppins-semibold',
    alignSelf: 'center',
  },
  infoBoxWrapper: {
    borderTopColor: Colors.gray3 + '50',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 90,
  },
  infoBox: {
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: Colors.gray3,
    borderRightWidth: 0.5,
  },
  styleLabel: {
    fontFamily: 'poppins-semibold',
    color: Colors.white,
    textAlign: 'center',
    fontSize: fontSizes.default,
  },
  topTabContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-around',
  },
  tab: {
    width: Dimensions.get('window').width / 2.5,
    padding: 6,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: Colors.gray3 + 30,
  },
  bottomTabContainer: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderWidth: 1,
    borderColor: Colors.gray3 + '50',
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 10,
    width: '95%',
  },
});

export default styles;
