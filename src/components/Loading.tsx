import { View, ActivityIndicator, Text } from 'react-native'
import LottieView from 'lottie-react-native';

export const Loading = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <LottieView
        autoPlay
        style={{
          width: 250,
          height: 250
        }}
        source={{ uri: 'https://assets9.lottiefiles.com/packages/lf20_juote5w5.json' }}
      />
    </View>
  )
}

export const SecundaryLoader = () => {
  return (
    <View className='flex flex-col items-center justify-center'>
      <ActivityIndicator color='#32B768' size={50} />
      <Text className='font-[Jost-Regular] text-appGreen-300 text-[17px]'>Carregando...</Text>
    </View>
  )
}