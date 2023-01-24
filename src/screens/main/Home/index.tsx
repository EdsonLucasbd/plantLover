import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth } from '../../../routes/auth'
import { Loading } from '../../../components/Loading'
import Header from '../../../components/Header'
import { AmbienceList } from '../../../components/AmbienceList'

export function Home() {
  const { clearUser, user, show } = useAuth()

  if (!user) {
    return <Loading />
  }

  return (
    <View className='flex-1 flex items-center justify-center px-8 pt-2'>
      <Header name={user.name} />

      <AmbienceList />

      {/* <Text className='text-lg text-black'>Home</Text>
      <Text>{`Olá!! ${user?.name}`}</Text>

      <TouchableOpacity onPress={clearUser}>
        <Text>limpar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={show}>
        <Text>mostrar</Text>
      </TouchableOpacity> */}
    </View>
  )
}