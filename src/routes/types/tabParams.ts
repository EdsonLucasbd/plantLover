import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"

export type TabNavigationProps = {
  Home: {
    name: string
  }
}

export type TabProps = BottomTabNavigationProp<TabNavigationProps>