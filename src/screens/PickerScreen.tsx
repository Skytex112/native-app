import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as ImagePicker from 'expo-image-picker';
import { globalStyles } from '../styles';
import { CreateStackParamList } from '../types';

const PLACEHOLDER_IMAGE = 'https://placeholder.com';

export default function PickerScreen({ navigation }: { navigation: NativeStackNavigationProp<CreateStackParamList, 'Picker'> }) {
  const [selectedImage, setSelectedImage] = useState<string>(PLACEHOLDER_IMAGE);

  const pickImageFromGallery = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      Alert.alert('Доступ запрещен', 'Приложению нужен доступ к галерее, чтобы выбрать фото.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, 
      allowsEditing: true, 
      aspect: [1,1], 
      quality: 0.8, 
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const takePhotoWithCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Доступ запрещен', 'Приложению нужен доступ к камере, чтобы сделать снимок.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1,1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={[globalStyles.container, { justifyContent: 'space-between' }]}>
      {}
      <View style={{ width: '100%', aspectRatio: 1, backgroundColor: '#eee' }}>
        <Image source={{ uri: selectedImage }} style={{ width: '100%', height: '100%' }} />
      </View>

      {}
      <View style={globalStyles.toggleTabContainer}>
        <TouchableOpacity style={globalStyles.tab} onPress={pickImageFromGallery}>
          <Text style={globalStyles.boldText}>📁 Открыть Галерею</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.tab} onPress={takePhotoWithCamera}>
          <Text style={globalStyles.boldText}>📷 Снять на Камеру</Text>
        </TouchableOpacity>
      </View>

      {}
      <TouchableOpacity 
        style={[
          globalStyles.blueButton, 
          selectedImage === PLACEHOLDER_IMAGE && { backgroundColor: '#ccc' } 
        ]} 
        disabled={selectedImage === PLACEHOLDER_IMAGE}
        onPress={() => navigation.navigate('PostDetails', { imageUri: selectedImage })}
      >
        <Text style={globalStyles.blueButtonText}>Далі</Text>
      </TouchableOpacity>
    </View>
  );
}
