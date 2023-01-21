import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome } from '../screens/Welcome'
import { AllReady } from '../screens/Welcome/AllReady'
import { ConfirmName } from '../screens/Welcome/confirmName'
import { StackNavigationProps } from './types/stackParams'

const AuthStack = createNativeStackNavigator<StackNavigationProps>()

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator
      initialRouteName='Welcome'
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen
        name='Welcome'
        component={Welcome}
      />
      <AuthStack.Screen
        name='ConfirmName'
        component={ConfirmName}
      />
      <AuthStack.Screen
        name='AllReady'
        component={AllReady}
      />
    </AuthStack.Navigator>
  )
}