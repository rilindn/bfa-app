import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Text, View } from 'react-native';

import styles from './Sidebar.styles';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.custom}>
        <Text style={styles.title}>Here some custom content</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
