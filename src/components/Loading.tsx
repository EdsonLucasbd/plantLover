import { View, ActivityIndicator } from 'react-native'
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
    <View>
      <ActivityIndicator color='#32B768' size={50} />
    </View>
  )
}