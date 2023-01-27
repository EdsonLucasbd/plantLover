import { NativeStackNavigationProp } from "@react-navigation/native-stack"


export type StackNavigationProps = {
  Welcome: undefined
  ConfirmName: undefined
  AllReady: {
    name: string
  }
  MainRoutes: undefined
}

export type StackProps = NativeStackNavigationProp<StackNavigationProps>