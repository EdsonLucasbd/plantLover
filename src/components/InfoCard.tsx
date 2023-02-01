import React from 'react';
import { Image, Text, View } from 'react-native';

interface cardProp {
  plantWatering?: string
  customClass?: string
}

export const InfoCard = ({ plantWatering, customClass }: cardProp) => {
  return (
    <View
      className={`flex items-center justify-center w-[311px] h-[88px] rounded-[20px]
      bg-infoCard shadow-md z-10 absolute ${customClass}`}
    >
      <View className='flex flex-row items-center justify-between w-[244px] h-14'>
        <Image source={require('../../assets/dropIcon.png')} />
        <Text className='font-[Jost-Regular] text-[14.5px] leading-[23px] text-textBlue w-[164px] h-[46px]'>
          {plantWatering}
        </Text>
      </View>
    </View>
  );
}
