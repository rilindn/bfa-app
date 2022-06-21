import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Text, View, TouchableOpacity } from 'react-native';

import { fontSizes } from '../../constants/Typography';
import SvgIcon from '../SvgIcon/SvgIcon';
import useAuth from './../../hooks/useAuth';
import styles from './Sidebar.styles';

const CustomDrawerContent = (props) => {
  const { handleSignOut } = useAuth();
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerStyle}>
      <View>
        <View style={styles.custom}>
          <Text style={styles.logoutText}>BALL FOR ALL</Text>
        </View>
        <DrawerItemList {...props} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={{ alignItems: 'center', width: '100%' }}
          onPress={() => handleSignOut()}>
          <View style={styles.logoutContainer}>
            <View style={styles.iconWrapper}>
              <SvgIcon name="logout" width={fontSizes.title} height={fontSizes.title} />
            </View>
            <Text style={styles.logoutText}>Logout</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Imprint • </Text>
          <Text style={styles.footerText}>Privacy Policy • </Text>
          <Text style={styles.footerText}>Terms</Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
