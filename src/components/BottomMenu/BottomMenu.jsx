import React from 'react';
import { View, TouchableOpacity, Modal } from 'react-native';

import styles from './BottomMenu.styles';

const BottomMenu = ({ visible, dissmis, children }) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      style={{ height: 130 }}
      onRequestClose={dissmis}>
      <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPressOut={dissmis}>
        <View style={styles.options}>{children}</View>
      </TouchableOpacity>
    </Modal>
  );
};

export default BottomMenu;
