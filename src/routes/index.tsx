import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { useAuth } from './auth'
import MainRoutes from './mainRoutes'
import AuthRoutes from './authRoutes'
import { Loading } from '../components/Loading'

const Routes: React.FC = () => {
  const { isSigned, isLoading } = useAuth()
  console.log('isSigned: ', isSigned)

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return isSigned ? <MainRoutes /> : <AuthRoutes />
}

export default Routes