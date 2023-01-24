import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { StackProps } from '../../routes/types/stackParams'
import { CustomButtom } from '../../components/Button'

export function ConfirmName() {
  const navigation = useNavigation<StackProps>()
  const [name, setName] = useState('')
  const emoji = {
    1: require('../../../assets/smile-1.png'),
    2: require('../../../assets/smile-2.png'),
  }

  const [smileEmoji, setSmileEmoji] = useState(emoji[1])

  function handleConfirm() {
    navigation.navigate('AllReady', { name })
  }

  function handleTyping(value: string) {
    value !== '' ? setSmileEmoji(emoji[2]) : setSmileEmoji(emoji[1])
    setName(value)
  }


  return (
    <View className='flex-1 items-center justify-center p-11 gap-y-12'>
      <Image
        source={smileEmoji}
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
        textColor='#5C6660'
        placeholderTextColor='#AAB2AD'
        autoFocus
        style={{
          width: 263,
          backgroundColor: 'transparent',
          textAlign: 'center',
          fontSize: 17
        }}
        onChangeText={value => handleTyping(value)}
      />

      <CustomButtom
        classes='w-[231] h-14 mt-10'
        onPress={handleConfirm}
        isDisabled={name === ''}
      >
        <Text className='text-white font-[Jost-Medium] text-[17px]'>Confirmar</Text>
      </CustomButtom>

    </View>
  )
}