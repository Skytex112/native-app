import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useApp } from '../context';
import { globalStyles } from '../styles';

export default function CommentsScreen({ route }: { route: any }) {
  const { postId } = route.params;
  const { comments, addComment } = useApp();
  const [text, setText] = useState('');

  const postComments = comments[postId] || [];

  const handleSend = () => {
    if (text.trim()) {
      addComment(postId, text);
      setText('');
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={globalStyles.container} 
      keyboardVerticalOffset={90}
    >
      <FlatList
        data={postComments}
        keyExtractor={item => item.id}
        style={{ flex: 1, padding: 15 }}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 12 }}>
            <Text><Text style={globalStyles.boldText}>{item.author}</Text> {item.text}</Text>
          </View>
        )}
      />
      <View style={globalStyles.commentInputContainer}>
        <TextInput
          placeholder="Додайте коментар..."
          value={text}
          onChangeText={setText}
          style={globalStyles.roundedInput}
        />
        <TouchableOpacity onPress={handleSend}>
          <Text style={globalStyles.sendButtonText}>Надіслати</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
