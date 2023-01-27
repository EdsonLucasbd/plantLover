import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth } from '../../../routes/auth'
import { SecundaryLoader } from '../../../components/Loading'
import Header from '../../../components/Header'
import { AmbienceList } from '../../../components/AmbienceList'
import Plant from '../../../components/Plant'
import { useQuery } from '@apollo/client'
import { PlantsType } from '../../../graphql/types'
import { GET_ALL_PLANTS } from '../../../graphql/queries'

export function NewPlant() {
  const { clearUser, user, show } = useAuth()
  const { data, loading } = useQuery<PlantsType>(GET_ALL_PLANTS)

  if (!user || loading) {
    return <SecundaryLoader />
  }

  return (
    <View className='flex-1 flex items-center justify-center px-8 pt-2'>
      <Header name={user.name} />

      <AmbienceList />

      <View className='flex flex-row gap-4 mt-10'>
        {data && data?.plants.map(({ plant, id }) => {
          return <Plant plant={plant} key={id} />
        }

        )}
      </View>

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