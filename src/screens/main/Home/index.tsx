import { View, Text } from 'react-native'
import React from 'react'

export function Home() {
  return (
    <View className='flex-1 flex items-center justify-center'>
      <Text className='text-lg text-black'>Home</Text>
      <Text>Olá!!</Text>
    </View>
  )
}