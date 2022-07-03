import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
  categories: {
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.gray4,
    borderRadius: 10,
    marginTop: 15,
  },
  categoriesLabel: {
    fontSize: 15,
    fontFamily: 'poppins-semibold',
    color: Colors.gray4,
  },
  category: {
    marginVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 7,
  },
  categoryActive: {
    backgroundColor: Colors.gray4 + 50,
    borderRadius: 10,
  },
  leftContainer: {
    flexDirection: 'row',
    // justifyContent: 'space',
    alignItems: 'center',
  },
  categoryLabel: {
    fontSize: 16,
    fontFamily: 'poppins-semibold',
    color: Colors.light,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  icon: {
    padding: 10,
    borderRadius: 200,
    backgroundColor: Colors.gray4,
    marginRight: 10,
  },
  categorySetting: {
    borderWidth: 1,
    borderColor: Colors.gray4,
    borderRadius: 10,
    marginTop: 15,
  },
});

export default styles;
