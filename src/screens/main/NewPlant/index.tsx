import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useAuth } from '../../../routes/auth'
import { SecondaryLoader } from '../../../components/Loading'
import Header from '../../../components/Header'
import { AmbienceList } from '../../../components/AmbienceList'
import { Plant } from '../../../components/Plant'
import { OperationVariables, useQuery } from '@apollo/client'
import { PlantsType } from '../../../graphql/types'
import { GET_ALL_PLANTS } from '../../../graphql/queries'

export function NewPlant() {
  const { clearUser, user, show } = useAuth()
  const { data, loading } = useQuery<PlantsType>(GET_ALL_PLANTS)

  if (!user || loading) {
    return (
      <View className='flex flex-1 items-center justify-center'>
        <SecondaryLoader />
      </View>
    )
  }

  return (
    <View className='flex-1 flex flex-col items-center justify-center px-8 pt-2'>
      <Header name={user.name} />

      <AmbienceList />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>

        {data?.plants.map((plant) => (
          <Plant
            name={plant.plantName}
            image={plant.plantImage.url}
            id={plant.id as OperationVariables | undefined}
            isLoading={loading}
            key={plant.id}
          />
        ))}
      </ScrollView>

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