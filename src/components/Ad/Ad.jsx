import VisibilitySensor from '@svanboxel/visibility-sensor-react-native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';

import { incrementClicks, incrementViews } from '../../api/ApiMethods';
import { fontSizes } from '../../constants/Typography';
import Avatar from '../Avatar/Avatar';
import styles from './Ad.styles';

export default function Ad({ ad }) {
  const handleClick = async () => {
    Linking.openURL(ad?.url);
    await incrementClicks(ad.id);
  };

  const checkVisible = async (isVisible) => {
    if (isVisible) {
      await incrementViews(ad.id);
    }
  };

  return (
    <VisibilitySensor onChange={checkVisible}>
      <View style={styles.container}>
        {ad && (
          <>
            <View style={styles.topContainer}>
              <View style={styles.userDataContainer}>
                <Avatar name="A D" size={50} initialStyle={{ fontSize: fontSizes.large }} />
                <View style={styles.dateContainer}>
                  <Text style={styles.title}>{ad.title}</Text>
                  <Text style={styles.note}>Advertisment</Text>
                </View>
              </View>
            </View>
            <View style={styles.middleContainer}>
              <Text style={styles.description}>{ad?.description}</Text>

              <TouchableOpacity onPress={() => handleClick()}>
                <Image
                  source={{
                    uri: ad?.image,
                  }}
                  style={styles.image}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </VisibilitySensor>
  );
}
