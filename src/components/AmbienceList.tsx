import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Button, RadioButton } from 'react-native-paper';

export const AmbienceList = () => {
  const [value, setValue] = useState('');
  const ambiences = ['Sala', 'Quarto', 'Cozinha', 'Banheiro', 'Varanda']

  return (
    <View className='flex-1'>
      <View className='flex flex-col items-start mb-6'>
        <Text className='font-[Jost-Medium] text-[17px] text-textBodyDark'>
          Em qual ambiente
        </Text>
        <Text className='text-[17px] text-textBodyDark'>
          você quer colocar sua planta?
        </Text>
      </View>
      <FlatList
        data={ambiences}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={(({ item }) => (
          <Button
            mode='text'
            buttonColor='#F5FAF7'
            textColor='#52665A'
            compact
            labelStyle={{
              color: '#52665A',
              fontFamily: 'Jost-Regular',
              fontSize: 13,
            }}
            style={{
              marginHorizontal: 4,
              borderRadius: 12,
              width: 76,
              height: 40
            }}
          >
            {item}
          </Button>
        ))}
      />
    </View>
  );
}
