import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { ScrollTime } from './ScrollTime';

const dataSet = {
  data: {
    firstColumn: [...Array(24).keys()].map((item) => { return { value: item, label: 'h' } }),
    secondColumn: [...Array(60).keys()].map((item) => { return { value: item, label: 'min' } }),
    thirdColumn: [...Array(60).keys()].map((item) => { return { value: item, label: 'seg' } }),
  },
  initials: [2, 40, 0]
}

export const TimerPicker = () => {
  return (
    <View className='flex-row'>
      <ScrollTime
        values={dataSet.data.firstColumn}
      />
      <ScrollTime
        values={dataSet.data.secondColumn}
      />
      <ScrollTime
        values={dataSet.data.thirdColumn}
      />
    </View>
  )
}
