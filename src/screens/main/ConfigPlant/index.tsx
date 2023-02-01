import { useQuery } from '@apollo/client';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { CustomButtom } from '../../../components/Button';
import { InfoCard } from '../../../components/InfoCard';
import TimerPicker from '../../../components/TimerPicker';
import { GET_PLANT } from '../../../graphql/queries';
import { PlantType } from '../../../graphql/types';
import { StackNavigationProps } from '../../../routes/types/stackParams';

export function ConfigPlant() {
  const { goBack } = useNavigation()
  const { params } = useRoute<RouteProp<StackNavigationProps, 'ConfigPlant'>>()
  const id = params.id
  const { data, loading } = useQuery<PlantType>(GET_PLANT, {
    variables: { id }
  })

  return (
    <View className='flex flex-col h-full items-center justify-center'>
      <View className='flex items-center justify-center h-3/5 w-full bg-appGreen-100/40'>
        <IconButton
          icon="chevron-left"
          size={35}
          onPress={() => goBack()}
          iconColor="#52665A"
          style={{
            position: 'absolute',
            left: 0,
            top: 60
          }}
        />
        <Image
          source={{ uri: data?.plant.plantImage.url }}
          className='w-[156px] h-[176px] mb-8'
          resizeMode='contain'
        />
        <View className='flex flex-col items-center justify-center gap-4 -mb-9'>
          <Text
            className='font-[Jost-SemiBold] text-2xl text-textHeading'
          >
            {data?.plant.plantName}
          </Text>
          <Text
            className='font-[Jost-Regular] text-[17px] leading-[25px]
            text-textBodyDark text-center max-w-[311px]'
          >
            {data?.plant.plantRules}
          </Text>
        </View>
      </View>
      <InfoCard plantWatering={data?.plant.plantWatering} customClass='top-1/2' />
      <View className='flex h-1/2 pt-[83px]'>
        <Text>Ecolha o melhor horário para te lembrarmos:</Text>

        <TimerPicker />
      </View>
      <CustomButtom
        classes='w-[311px] h-[56px] absolute bottom-[70px]'
        onPress={() => { }}
      >
        <Text className='font-[Jost-Medium] text-white text-[17px] leading-[23px]'>Cadastrar Planta</Text>
      </CustomButtom>
    </View>
  );
}
