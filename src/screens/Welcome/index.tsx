import { View, Text } from 'react-native'
import Ilustration from '../../../assets/welcome_page_ilustra.svg'
import Arrow from '../../../assets/arrow-right.svg'
import { useNavigation } from '@react-navigation/native'
import { StackProps } from '../../routes/types/stackParams'
import { CustomButtom } from '../../components/Button'


export function Welcome() {
  const navigation = useNavigation<StackProps>()

  function handleButtonClick() {
    navigation.navigate('ConfirmName')
  }

  return (
    <View className='flex-1 items-center justify-center p-11 gap-y-12'>
      <Text className='font-semibold font-[Jost-SemiBold] text-textHeading 
        text-3xl text-center'>
        Gerencie
        suas plantas de
        forma fácil
      </Text>
      <Ilustration
        width={292.13}
        height={284.3}
      />
      <Text className='font-[Jost-Regular] text-[17px] text-textBodyDark text-center'>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <CustomButtom
        classes='w-14 h-14 mt-12'
        onPress={handleButtonClick}
      >
        <Arrow width={40} height={40} />
      </CustomButtom>

    </View>
  )
}