import AsyncStorage from '@react-native-async-storage/async-storage';
import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { PencilSimple } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { RegisterPlant, usePlant } from '../../services/PlantProvider';

export const TimerPicker = ({ id, name }: RegisterPlant) => {
  const [isDataStored, setIsDataStored] = useState(false)
  const [date, setDate] = useState(new Date())
  const { registerPlantData, plantData, getPlantData } = usePlant()

  useEffect(() => {
    hasRegistred()
  }, [])

  function onChange(event: DateTimePickerEvent, selectedDate?: Date) {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    registerPlantData({ name, id, timer: date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) })
  };

  function showMode(currentMode: 'date' | 'time') {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  function showTimepicker() {
    showMode('time');
  };

  async function hasRegistred() {
    const hasIdStored = await getPlantData({ name, id })

    setIsDataStored(hasIdStored)
  }

  return (
    <View className='mt-10'>
      {isDataStored ? (
        <View className='flex flex-row items-center gap-x-4'>
          <Text
            className='text-[17px] font-[Jost-Regular] leading-[25px]
          text-textBodyDark border-b border-b-appBackground p-2'>
            {date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
          </Text>
          <Button
            mode='contained-tonal'
            icon={PencilSimple}
            contentStyle={{ flexDirection: 'row-reverse' }}
            buttonColor='#DCDCE6'
            textColor='#646469'
            onPress={showTimepicker}
          >
            Editar
          </Button>
        </View>
      ) : (
        <Button
          mode='contained-tonal'
          buttonColor='#DCDCE6'
          textColor='#646469'
          onPress={showTimepicker}
        >
          Definir
        </Button>

      )}
    </View>
  );
}
