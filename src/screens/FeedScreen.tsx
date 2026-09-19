import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, RefreshControl } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useApp } from '../context';
import { globalStyles } from '../styles';
import { FeedStackParamList } from '../types';

export default function FeedScreen({ navigation }: { navigation: NativeStackNavigationProp<FeedStackParamList, 'FeedMain'> }) {
  const { posts, toggleLike, toggleBookmark } = useApp();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      style={globalStyles.container}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 15 }}>
          <TouchableOpacity 
            style={globalStyles.feedHeader} 
            onPress={() => navigation.navigate('UserProfile', { user: { name: item.author, avatar: item.avatar } })}
          >
            <Image source={{ uri: item.avatar }} style={globalStyles.avatarSmall} />
            <Text style={globalStyles.boldText}>{item.author}</Text>
          </TouchableOpacity>

          <Image source={{ uri: item.media }} style={globalStyles.mainMedia} />

          <View style={globalStyles.actionsBar}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => toggleLike(item.id)} style={{ marginRight: 15 }}>
                <Text style={{ fontSize: 20 }}>{item.isLiked ? '❤️' : '🤍'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Comments', { postId: item.id })}>
                <Text style={{ fontSize: 20 }}>💬</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => toggleBookmark(item.id)}>
              <Text style={{ fontSize: 20 }}>{item.isBookmarked ? '🔖' : '⬜'}</Text>
            </TouchableOpacity>
          </View>

          <View style={{ paddingHorizontal: 10 }}>
            <Text style={[globalStyles.boldText, { marginBottom: 3 }]}>{item.likes} лайків</Text>
            <Text><Text style={globalStyles.boldText}>{item.author}</Text> {item.caption}</Text>
          </View>
        </View>
      )}
    />
  );
}
