import { OperationVariables } from "@apollo/client"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"


export type StackNavigationProps = {
  Welcome: undefined
  ConfirmName: undefined
  AllReady: {
    name: string
  }
  MainRoutes: undefined
  ConfigPlant: {
    id: OperationVariables | undefined
  }
  Home: undefined
}

export type StackProps = NativeStackNavigationProp<StackNavigationProps>