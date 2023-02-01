import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { GET_ALL_AMBIENCES } from '../graphql/queries';
import { AmbiencesType } from '../graphql/types';

export const AmbienceList = () => {
  const { data } = useQuery<AmbiencesType>(GET_ALL_AMBIENCES)
  const [selectedIndex, setSelectedIndex] = useState(0)

  function handleSelectAmbience(index: number) {
    setSelectedIndex(index)
  }

  return (
    <View className='flex-auto max-h-36'>
      <View className='flex flex-col items-start mb-6'>
        <Text className='font-[Jost-Medium] text-[17px] text-textBodyDark'>
          Em qual ambiente
        </Text>
        <Text className='text-[17px] text-textBodyDark'>
          você quer colocar sua planta?
        </Text>
      </View>
      <FlatList
        data={data?.ambiences}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={(({ item, index }) => (
          <TouchableOpacity
            className={`flex items-center justify-center ${selectedIndex === index ? 'bg-appGreen-100' : 'bg-appBackground'} mx-1 rounded-xl w-[76px] h-10`}
            onPress={() => handleSelectAmbience(index)}
          >
            <Text className={`${selectedIndex === index ? 'text-appGreen-500 font-[Jost-SemiBold]' : 'text-textHeading font-[Jost-Regular]'} text-[13px]`}>
              {item.ambienceName}
            </Text>
          </TouchableOpacity>
        ))}
      />
    </View>
  );
}
