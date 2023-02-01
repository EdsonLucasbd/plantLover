import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { useAuth, User } from '../routes/auth';

import * as ImagePicker from 'expo-image-picker';

const Header = ({ name }: User) => {
  const [photo, setPhoto] = useState('');
  const firstLetter = name.slice(0, 1)
  const { user, updateUserImage } = useAuth()

  useEffect(() => {
    user?.image !== undefined && setPhoto(user.image)
  }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
      updateUserImage(result.assets[0].uri)
    }
  };


  const Photo = photo === '' ?
    (
      <Avatar.Text
        label={firstLetter}
        size={56}
        color='#fff'
        className='bg-appGreen-300'
        onTouchStart={pickImage}
      />
    ) : (
      <Avatar.Image
        size={56}
        source={{ uri: photo }}
        onTouchStart={pickImage}
      />
    )

  return (
    <View className='flex flex-row justify-between items-center w-full pt-10 mb-10'>
      <View className='flex flex-column'>
        <Text className='font-[Jost-Light] text-2xl text-textHeading'>Olá,</Text>
        <Text className='font-[Jost-SemiBold] text-2xl text-textHeading'>{name}</Text>
      </View>
      {Photo}
    </View>
  );
}

export default Header;