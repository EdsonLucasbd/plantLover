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
        source={require('../../assets/plant-loading.json')}
      />
    </View>
  )
}