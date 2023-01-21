import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { StackProps } from '../../routes/types/stackParams'
import { CustomButtom } from '../../components/Button'

export function ConfirmName() {
  const navigation = useNavigation<StackProps>()
  const [name, setName] = useState('')

  function handleConfirm() {
    navigation.navigate('AllReady', { name })
  }

  //função para alterar o valor do name e o emoji
  function handleTyping() {

  }


  return (
    <View className='flex-1 items-center justify-center p-11 gap-y-12'>
      <Image
        source={require('../../../assets/smile-1.png')}
        className='w-9 h-9'
      />

      <Text className='text-textHeading text-2xl text-center font-[Jost-SemiBold]'>
        Como podemos
        chamar você?
      </Text>

      <TextInput
        placeholder='Digite um nome'
        activeUnderlineColor='#AAB2AD'
        underlineColor='#CFCFCF'
        style={{
          width: 263,
          backgroundColor: 'transparent',
          textAlign: 'center',
          color: '#AAB2AD'
        }}
        onChangeText={value => setName(value)}
      />

      <CustomButtom
        classes='w-[231] h-14 mt-10'
        onPress={handleConfirm}
        isDisabled={name === ''}
      >
        <Text className='text-white font-[Jost-Medium]'>Confirmar</Text>
      </CustomButtom>

    </View>
  )
}