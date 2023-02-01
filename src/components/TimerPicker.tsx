import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

// import { Container } from './styles';

interface onChangeProp {
  event: DateTimePickerEvent,
  selectedDate: Date
}


const TimerPicker: React.FC = () => {
  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const showMode = (currentMode: 'date' | 'time') => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View className='mt-10'>
      <Button
        mode='contained-tonal'
        buttonColor='#DCDCE6'
        textColor='#646469'
        onPress={showTimepicker}
      >
        Definir
      </Button>
    </View>
  );
}

export default TimerPicker;