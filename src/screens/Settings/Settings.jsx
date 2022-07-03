import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Colors from '../../constants/Colors';
import SvgIcon from './../../components/SvgIcon/SvgIcon';
import AccountSettings from './AccountSettings/AccountSettings';
import PrivacySettings from './PrivacySettings/PrivacySettings';
import styles from './Settings.styles';

export default function Settings() {
  const [selectedCategory, setSelectedCategory] = useState('Account');

  return (
    <View style={styles.container}>
      <View style={styles.categories}>
        <Text style={styles.categoriesLabel}>Select category</Text>
        <Category
          label="Account"
          icon="user"
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Category
          label="Privacy"
          icon="privacy"
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </View>
      <View style={styles.categorySetting}>
        {selectedCategory === 'Account' ? <AccountSettings /> : <PrivacySettings />}
      </View>
    </View>
  );
}

const Category = ({ label, icon, selectedCategory, setSelectedCategory }) => {
  const isCategorySelected = selectedCategory === label;
  return (
    <TouchableOpacity
      style={[styles.category, isCategorySelected && styles.categoryActive]}
      onPress={() => setSelectedCategory(label)}>
      <View style={styles.leftContainer}>
        <View style={styles.icon}>
          <SvgIcon name={icon} width={25} height={25} color={Colors.gray3} />
        </View>
        <Text style={styles.categoryLabel}>{label}</Text>
      </View>
      <MaterialIcons
        name="arrow-forward-ios"
        size={20}
        style={[{ color: Colors.gray3 }, isCategorySelected && { color: Colors.orange + 99 }]}
      />
    </TouchableOpacity>
  );
};
