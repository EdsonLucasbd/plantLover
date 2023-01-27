import React from 'react';
import { Image, Text, View } from 'react-native';
import { PlantType } from '../graphql/types';

const Plant = ({ plant }: PlantType) => {
  return (
    <View
      className='flex flex-col bg-appBackground rounded-[20px]
      w-[148px] h-[154px]'
    >
      <Image source={{ uri: `${plant.plantImage.url}` }} />
      <Text>{plant.plantName}</Text>
    </View>
  )
}

export default Plant;