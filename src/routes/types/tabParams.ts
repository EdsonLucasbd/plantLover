import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"

export type TabNavigationProps = {
  NewPlant: {
    name: string
  }
  MyPlants: undefined
}

export type TabProps = BottomTabNavigationProp<TabNavigationProps>