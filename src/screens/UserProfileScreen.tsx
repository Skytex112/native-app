import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { useApp } from '../context';
import { globalStyles } from '../styles';

export default function UserProfileScreen({ route }: { route: any }) {
  const { user } = route.params;
  const { posts } = useApp();
  const userPosts = posts.filter(post => post.author === user.name);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.profileHeader}>
        <Image source={{ uri: user.avatar }} style={globalStyles.avatarLarge} />
        <View>
          <Text style={[globalStyles.boldText, { fontSize: 18 }]}>{user.name}</Text>
          <Text style={{ color: '#666', marginTop: 4 }}>{userPosts.length} публікацій</Text>
        </View>
      </View>
      <FlatList
        data={userPosts}
        keyExtractor={item => item.id}
        numColumns={3}
        renderItem={({ item }) => <Image source={{ uri: item.media }} style={globalStyles.gridTile} />}
      />
    </View>
  );
}
