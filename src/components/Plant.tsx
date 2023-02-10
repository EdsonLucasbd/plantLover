import { OperationVariables } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { StackProps } from '../routes/types/stackParams';
import { TertiaryLoader } from './Loading';

interface Props {
  name: string,
  image: string,
  id: OperationVariables | undefined
  isLoading?: boolean
}

export const Plant = ({ name, image, id, isLoading }: Props) => {
  const navigation = useNavigation<StackProps>()

  return (
    <TouchableOpacity
      className='flex flex-col justify-center items-center bg-appBackground/30 rounded-[20px]
      w-[148px] h-[154px] mb-4 mr-4 relative'
      onPress={() => navigation.navigate('ConfigPlant', {
        id
      })}
    >
      {isLoading ? (
        <TertiaryLoader />
      ) : (
        <>
          <ImageBackground
            source={{ uri: image }}
            style={{
              position: 'absolute',
              flex: 1,
              width: 80,
              height: 80,
              top: 25
            }}
            resizeMode='contain'
          />
          <Text
            className='font-[Jost-SemiBold] text-[13px] text-textHeading absolute bottom-4'>
            {name}
          </Text>
        </>
      )}
    </TouchableOpacity>
  )
}
