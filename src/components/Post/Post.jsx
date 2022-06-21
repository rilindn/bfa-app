import { Entypo } from '@expo/vector-icons';
import { Video } from 'expo-av';
import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Divider, Menu } from 'react-native-paper';

import { bookmark, deletePost, getUserById } from '../../api/ApiMethods';
import SvgIcon from '../../components/SvgIcon/SvgIcon';
import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';
import formatDate from '../../helpers/formatDate';
import useAuth from '../../hooks/useAuth';
import Avatar from '../Avatar/Avatar';
import CreatePost from './CreatePost/CreatePost';
import styles from './Post.styles';
import PostReactions from './PostReactions/PostReactions';

export default function Post({
  post,
  navigation,
  refetchPosts,
  isOwnPost,
  handleUnBookmark,
  isOnFeed,
  isBookmark,
}) {
  const [user, setUser] = useState();
  const [userFullName, setUserFullName] = useState();
  const [showEditMenu, setShowEditMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const { authData } = useAuth();

  const media = post?.media;
  const isVideo = post?.media?.endsWith('.mp4');

  const fetchUser = async () => {
    try {
      const userResult = await getUserById(post.UserId);
      if (userResult) {
        setUser(userResult);
        getUserFullName(userResult);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [post]);

  const getUserFullName = (user) => {
    if (user?.role === 'Player')
      setUserFullName(`${user.Player?.firstName} ${user.Player?.lastName}`);
    else setUserFullName(user?.Club?.clubName);
  };

  const handleDeletePost = async () => {
    await Promise.all([deletePost(post.id), refetchPosts()]);
    setShowEditMenu(false);
  };

  const handleBookmark = async () => {
    const bookmarkerId = authData.id;
    const referencedPost = post.id;
    const response = await bookmark({ bookmarkerId, referencedPost, referenceType: 'Post' });
    if (response.status === 200) {
      setIsBookmarked(true);
    }
  };

  return (
    <View style={styles.container}>
      {user && (
        <>
          <View style={styles.topContainer}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate('ViewProfile', { id: user.id })}
              style={styles.userDataContainer}>
              <Avatar
                name={userFullName}
                size={50}
                initialStyle={{ fontSize: fontSizes.large }}
                image={user?.profilePic}
              />
              <View style={styles.dateContainer}>
                <Text style={styles.name}>{userFullName}</Text>
                <Text style={styles.date}>{formatDate(post?.updatedAt)}</Text>
              </View>
            </TouchableOpacity>
            {isBookmark && (
              <TouchableOpacity onPress={handleUnBookmark}>
                <SvgIcon name="bookmarkfilled" width={40} height={30} color={Colors.gray3} />
              </TouchableOpacity>
            )}
            {isOnFeed &&
              (isBookmarked ? (
                <SvgIcon name="bookmarkfilled" width={40} height={30} color={Colors.gray3} />
              ) : (
                <TouchableOpacity onPress={handleBookmark}>
                  <SvgIcon name="bookmark" width={40} height={30} color={Colors.gray3} />
                </TouchableOpacity>
              ))}
            {isOwnPost && (
              <>
                <Menu
                  visible={showEditMenu}
                  onDismiss={() => setShowEditMenu(false)}
                  contentStyle={styles.menuContent}
                  anchor={
                    <TouchableOpacity onPress={() => setShowEditMenu(true)}>
                      <Entypo
                        style={styles.dotsIcon}
                        name="dots-three-horizontal"
                        size={20}
                        color={Colors.gray3}
                      />
                    </TouchableOpacity>
                  }>
                  <Menu.Item
                    icon="pencil"
                    title="Edit"
                    style={styles.menuItems}
                    titleStyle={styles.menuItemsTitle}
                    onPress={() => {
                      setModalVisible(true);
                      setShowEditMenu(false);
                    }}
                  />
                  <Divider />
                  <Menu.Item
                    icon="delete"
                    title="Delete"
                    style={styles.menuItems}
                    titleStyle={styles.menuItemsTitle}
                    onPress={() => handleDeletePost()}
                  />
                </Menu>
                <CreatePost
                  refetchPosts={refetchPosts}
                  editPost={post}
                  visible={modalVisible}
                  closeModal={() => setModalVisible(false)}
                />
              </>
            )}
          </View>
          <View style={styles.middleContainer}>
            <Text style={styles.description}>{post?.content}</Text>
            {media &&
              (!isVideo ? (
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() =>
                    navigation.navigate('PhotoView', {
                      photo: media,
                    })
                  }>
                  <Image
                    source={{
                      uri: media,
                    }}
                    style={styles.image}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              ) : (
                <Video
                  style={styles.image}
                  source={{
                    uri: media,
                  }}
                  volume={0.5}
                  useNativeControls
                  resizeMode="contain"
                  isLooping={false}
                />
              ))}
          </View>
          <PostReactions post={post} />
        </>
      )}
    </View>
  );
}
