import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/main/Home";

const Tab = createBottomTabNavigator()

export default function MainRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
      />
    </Tab.Navigator>
  )
}