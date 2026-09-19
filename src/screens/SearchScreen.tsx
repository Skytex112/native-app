import React, { useState } from 'react';
import { View, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useApp } from '../context';
import { globalStyles } from '../styles';
import { SearchStackParamList } from '../types';

export default function SearchScreen({ navigation }: { navigation: NativeStackNavigationProp<SearchStackParamList, 'SearchMain'> }) {
  const { posts } = useApp();
  const [query, setQuery] = useState('');

  const filteredPosts = posts.filter(post => post.author.toLowerCase().includes(query.toLowerCase()));

  return (
    <View style={globalStyles.container}>
      <TextInput
        placeholder="Пошук користувачів..."
        value={query}
        onChangeText={setQuery}
        style={globalStyles.searchBar}
      />
      <FlatList
        data={filteredPosts}
        keyExtractor={item => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('UserProfile', { user: { name: item.author, avatar: item.avatar } })}>
            <Image source={{ uri: item.media }} style={globalStyles.gridTile} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
