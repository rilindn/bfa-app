import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View, TouchableOpacity, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-paper';

import CustomButton from '../../../components/Button/Button';
import Header from '../../../components/Header/Header';
import SelectInput from '../../../components/SelectInput/SelectInput';
import TextInput from '../../../components/TextInput/TextInput';
import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';
import styles from './EditProfile.styles';

export default function EditProfile() {
  const [selectedTab, setSelectedTab] = useState('about');
  const {
    control,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Edit Profile</Text>
          <View style={styles.topTabContainer}>
            <CustomButton
              label="General"
              onPress={() => setSelectedTab('about')}
              labelStyle={styles.styleLabel}
              style={[
                styles.leftTab,
                selectedTab === 'about' && {
                  borderBottomColor: Colors.orange,
                  borderBottomWidth: 1,
                  backgroundColor: Colors.orange,
                },
              ]}>
              <Text style={[styles.tabText, selectedTab === 'about' && { color: Colors.orange }]}>
                General
              </Text>
            </CustomButton>
            <CustomButton
              label="Characteristics"
              onPress={() => setSelectedTab('characteristics')}
              labelStyle={styles.styleLabel}
              style={[
                styles.rightTab,
                selectedTab === 'characteristics' && {
                  borderBottomColor: Colors.orange,
                  borderBottomWidth: 1,
                  backgroundColor: Colors.orange,
                },
              ]}>
              <Text
                style={[
                  styles.tabText,
                  selectedTab === 'characteristics' && { color: Colors.orange },
                ]}>
                Characteristics
              </Text>
            </CustomButton>
          </View>
          <View style={styles.bottomTabContainer}>
            {selectedTab === 'about' ? (
              <>
                <View style={styles.mainContent}>
                  <Avatar.Image
                    source={{
                      uri: 'https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png',
                    }}
                    size={60}
                    style={{ marginHorizontal: 15 }}
                  />
                  <Text style={styles.changePhoto}>Change Photo</Text>
                </View>
                <View style={styles.genInfo}>
                  <Text style={styles.changeInfo}>Change general info</Text>
                </View>
                <View style={styles.inputText}>
                  <TextInput
                    style={styles.input}
                    name="dateofbirth"
                    placeholder="Date of birth"
                    control={control}
                    rules={rules.dateofbirth}
                    errors={errors}
                  />
                  <TextInput
                    style={styles.input}
                    name="placeofbirth"
                    placeholder="Place of birth"
                    control={control}
                    rules={rules.placeofbirth}
                    errors={errors}
                  />
                  <TextInput
                    style={styles.input}
                    name="nationality"
                    placeholder="Nationality"
                    control={control}
                    rules={rules.nationality}
                    errors={errors}
                  />
                  <TextInput
                    style={styles.input}
                    name="zipcode"
                    placeholder="Zip Code"
                    control={control}
                    rules={rules.zipcode}
                    errors={errors}
                  />
                </View>
                <View style={styles.button}>
                  <CustomButton
                    label="Save Changes"
                    style={styles.saveBtn}
                    labelStyle={styles.saveLabel}
                  />
                </View>
                <Text style={styles.accSettings}>
                  <Text>You can change your name, email, position and gender at</Text>
                  <TouchableOpacity>
                    <Text
                      style={[
                        {
                          color: Colors.white,
                          fontFamily: 'poppins-regular',
                          fontSize: fontSizes.small,
                        },
                      ]}>
                      Account Settings
                    </Text>
                  </TouchableOpacity>
                </Text>
              </>
            ) : (
              <>
                <View style={styles.genInfo}>
                  <Text style={styles.changeInfo}>Fill in your characteristics</Text>
                </View>
                <View style={styles.inputText}>
                  <TextInput
                    style={styles.input}
                    name="height"
                    placeholder="Height"
                    control={control}
                    rules={rules.height}
                    errors={errors}
                  />
                  <TextInput
                    style={styles.input}
                    name="weight"
                    placeholder="Weight"
                    control={control}
                    rules={rules.weight}
                    errors={errors}
                  />
                  <TextInput
                    style={styles.input}
                    name="secposition"
                    placeholder="Second position"
                    control={control}
                    rules={rules.secposition}
                    errors={errors}
                  />
                  <TextInput
                    style={styles.input}
                    name="yourbacknum"
                    placeholder="Your back number"
                    control={control}
                    rules={rules.yourbacknum}
                    errors={errors}
                  />
                  <SelectInput
                    style={styles.input}
                    name="foot"
                    placeholder="foot"
                    control={control}
                    rules={rules.foot}
                    errors={errors}
                    options={[
                      { label: 'Left', value: 'left' },
                      { label: 'right', value: 'right' },
                      { label: 'both', value: 'both' },
                    ]}
                  />
                </View>
                <View style={styles.button}>
                  <CustomButton
                    label="Save Changes"
                    style={styles.saveBtn}
                    labelStyle={styles.saveLabel}
                  />
                  <CustomButton
                    label="Cancel"
                    style={styles.cancelBtn}
                    labelStyle={styles.cancelLabel}
                  />
                </View>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const rules = {
  dateofbirth: {
    required: {
      value: true,
      message: 'Date of birth is required',
    },
  },
  placeofbirth: {
    required: {
      value: true,
      message: 'Place of birth is required',
    },
    minLength: {
      value: 2,
      message: 'Place of birth must be more than 2 characters',
    },
    maxLength: {
      value: 50,
      message: 'Zip code must not be more or less than 50 characters',
    },
  },
  nationality: {
    required: {
      value: true,
      message: 'Nationality is required',
    },
    minLength: {
      value: 2,
      message: 'Nationality must be more than 2 characters',
    },
    maxLength: {
      value: 50,
      message: 'Nationality must not be more or less than 50 characters',
    },
  },
  zipcode: {
    required: {
      value: true,
      message: 'Zip code is required',
    },
    minLength: {
      value: 5,
      message: 'Zip code must not be more or less than 5 digits',
    },
    maxLength: {
      value: 5,
      message: 'Zip code must not be more or less than 5 digits',
    },
  },
  height: {
    required: {
      value: true,
      message: 'Height is required',
    },
    minLength: {
      value: 50,
      message: 'Height must be more than 50 cm',
    },
    maxLength: {
      value: 250,
      message: 'Height must not be more or less than 250 cm',
    },
  },
  weight: {
    required: {
      value: true,
      message: 'Weight is required',
    },
    minLength: {
      value: 50,
      message: 'Weight must be more than 30 kg',
    },
    maxLength: {
      value: 250,
      message: 'Weight must not be more or less than 150 kg',
    },
  },
  secposition: {
    required: {
      value: true,
      message: 'Zip code is required',
    },
    minLength: {
      value: 2,
      message: 'Nationality must be more than 2 characters',
    },
    maxLength: {
      value: 50,
      message: 'Nationality must not be more or less than 50 characters',
    },
  },
  yourbacknum: {
    required: {
      value: true,
      message: 'Zip code is required',
    },
    minLength: {
      value: 1,
      message: 'Your back number must be more than 1',
    },
    maxLength: {
      value: 99,
      message: 'Your back number must not be more or less than 99',
    },
  },
  foot: {
    required: {
      value: true,
      message: 'Your foot is required',
    },
  },
};
