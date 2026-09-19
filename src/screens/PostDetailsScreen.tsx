import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { useApp } from '../context';
import { globalStyles } from '../styles';

export default function PostDetailsScreen({ route, navigation }: { route: any, navigation: any }) {
  const { imageUri } = route.params;
  const { addPost } = useApp();
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');

  const handlePublish = () => {
    const finalCaption = location ? `${caption} — в ${location}` : caption;
    addPost({
      id: Math.random().toString(),
      author: 'Мій Профіль',
      avatar: 'https://unsplash.com',
      media: imageUri,
      likes: 0,
      caption: finalCaption,
      isLiked: false,
      isBookmarked: false,
    });
    navigation.getParent()?.navigate('FeedStack');
  };

  return (
    <View style={[globalStyles.container, { padding: 15 }]}>
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <Image source={{ uri: imageUri }} style={globalStyles.thumbnail} />
        <TextInput
          placeholder="Напишіть опис (хештеги)..."
          multiline
          value={caption}
          onChangeText={setCaption}
          style={{ flex: 1, height: 80, textAlignVertical: 'top' }}
        />
      </View>
      <TextInput
        placeholder="Додати геопозицію"
        value={location}
        onChangeText={setLocation}
        style={globalStyles.underlineInput}
      />
      <TouchableOpacity style={globalStyles.blueButton} onPress={handlePublish}>
        <Text style={globalStyles.blueButtonText}>Опублікувати</Text>
      </TouchableOpacity>
    </View>
  );
}
