import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201C1C',
  },
  header: {
    width: '100%',
    marginTop: 40,
    backgroundColor: '#242526',
  },
  searchbar: {
    width: '80%',
    alignSelf: 'flex-end',
    margin: 10,
    backgroundColor: '#403C3C',
    borderRadius: 15,
  },
  main: {
    marginTop: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ADADAD',
    borderRadius: 15,
    //padding: 10,
    backgroundColor: '#242526',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  buttonB: {
    borderWidth: 1,
    borderColor: '#ADADAD',
    borderRadius: 5,
  },
  infoBoxWrapper: {
    borderTopColor: '#ADADAD',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBoxWrapper: {
    marginTop: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ADADAD',
    borderRadius: 15,
    backgroundColor: '#242526',
    paddingTop: 15,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ADADAD',
  },
  text: {
    color: '#fff',
    alignSelf: 'center',
    padding: 25,
  },
  postSomethingWrapper: {
    marginTop: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ADADAD',
    borderRadius: 15,
    backgroundColor: '#242526',
    paddingTop: 10,
  },
  postSomething: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
  },
  input: {
    width: '80%',
    backgroundColor: '#403C3C',
  },
});

export default styles;
