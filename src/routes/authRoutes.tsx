import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ConfigPlant } from '../screens/main/ConfigPlant'
import { Welcome } from '../screens/Welcome'
import { AllReady } from '../screens/Welcome/AllReady'
import { ConfirmName } from '../screens/Welcome/confirmName'
import MainRoutes from './mainRoutes'
import { StackNavigationProps } from './types/stackParams'

const AuthStack = createNativeStackNavigator<StackNavigationProps>()
const Stack = createNativeStackNavigator<StackNavigationProps>()

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
      <AuthStack.Screen
        name='MainRoutes'
        component={MainRoutes}
      />
    </AuthStack.Navigator>
  )
}

export function MainTabRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="ConfigPlant"
        component={ConfigPlant}
      />
    </Stack.Navigator>
  )
}