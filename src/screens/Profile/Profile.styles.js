import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  name: {
    color: Colors.light,
    fontSize: fontSizes.large,
    marginLeft: 20,
  },
  main: {
    marginTop: 20,
    marginHorizontal: 10,
    borderWidth: 0.5,
    borderColor: Colors.gray3,
    borderRadius: 15,
    backgroundColor: Colors.gray5,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  buttonB: {
    borderWidth: 0.5,
    borderColor: Colors.gray3,
    borderRadius: 5,
  },
  infoBoxWrapper: {
    borderTopColor: Colors.gray3,
    borderTopWidth: 0.5,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: Colors.gray3,
    borderRightWidth: 0.5,
  },
  tabs: {
    marginTop: 20,
    marginHorizontal: 10,
    borderWidth: 0.5,
    borderColor: Colors.gray3,
    borderRadius: 15,
    backgroundColor: Colors.gray5,
    paddingTop: 15,
  },
  tabsTitle: {
    fontSize: fontSizes.large,
    color: Colors.light,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.gray3,
  },
  tabText: {
    color: Colors.light,
    alignSelf: 'center',
    padding: 25,
  },
  postSomethingWrapper: {
    marginTop: 20,
    marginHorizontal: 10,
    borderWidth: 0.5,
    borderColor: Colors.gray3,
    borderRadius: 15,
    backgroundColor: Colors.gray5,
    paddingTop: 10,
  },
  postSomethingAvatar: {
    // padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postSomethingText: {
    color: Colors.light,
    fontSize: fontSizes.large,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray3,
    paddingLeft: 15,
    paddingBottom: 15,
  },
  postSomethingInput: {
    width: '80%',
    backgroundColor: Colors.gray4,
  },
  teamStatus: {
    width: '90%',
    alignSelf: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: Colors.gray3,
    borderRadius: 5,
    backgroundColor: Colors.gray5,
    padding: 10,
  },
  statisticsNumber: {
    color: Colors.light,
  },
  statisticsText: {
    color: Colors.gray3,
  },
  aboutText: {
    color: Colors.light,
  },
});

export default styles;
