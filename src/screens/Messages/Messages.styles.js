import { StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    padding: 15,
    backgroundColor: Colors.background,
  },
  drawer: {
    height: 60,
    marginTop: 20,
    //padding: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    backgroundColor: Colors.background,
    height: '100%',
    //marginLeft: 5,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  dataContent: {
    marginLeft: 10,
    flexDirection: 'column',
    marginRight: 70,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  name: {
    fontFamily: 'poppins-bold',
    fontSize: fontSizes.small,
    color: Colors.white,
  },
  message: {
    fontSize: fontSizes.extraSmall,
    color: Colors.white,
    alignSelf: 'flex-start',
  },
  datetimeWrapper: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  datetime: {
    color: Colors.gray3,
    fontSize: fontSizes.extraSmall,
  },
});

export default styles;
