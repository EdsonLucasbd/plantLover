import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Image, View, Text } from 'react-native';
import { CustomButtom } from '../../components/Button';
import { useAuth } from '../../routes/auth';
import { StackNavigationProps, StackProps } from '../../routes/types/stackParams';

export function AllReady() {
  const navigation = useNavigation<StackProps>()
  const screenParams = useRoute<RouteProp<StackNavigationProps, 'AllReady'>>()
  const { makeUser } = useAuth()

  function handleConfirm() {
    makeUser({ name: screenParams.params.name })

    navigation.navigate('MainRoutes')

  }

  return (
    <View className='flex-1 items-center justify-center p-11 gap-y-12'>
      <Image
        source={require('../../../assets/smile-3.png')}
        className='w-24 h-24'
      />

      <Text className='text-2xl font-[Jost-SemiBold] text-textHeading'>Prontinho</Text>

      <Text className='font-[Jost-Regular] text-[17px] text-center text-textBodyDark'>
        Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
      </Text>

      <CustomButtom
        classes='w-[231] h-14 mt-10'
        onPress={handleConfirm}
      >
        <Text className='text-[17px] font-[Jost-Medium] text-white'>Começar</Text>
      </CustomButtom>
    </View>
  );
}