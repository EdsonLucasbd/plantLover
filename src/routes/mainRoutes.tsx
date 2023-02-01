import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListDashes, PlusCircle } from "phosphor-react-native";
import { TouchableRipple } from "react-native-paper";
import { ConfigPlant } from "../screens/main/ConfigPlant";
import MyPlants from "../screens/main/MyPlants";
import { NewPlant } from "../screens/main/NewPlant";
import { StackNavigationProps } from "./types/stackParams";
import { TabNavigationProps } from "./types/tabParams";

const Tab = createBottomTabNavigator<TabNavigationProps>()
const Stack = createNativeStackNavigator<StackNavigationProps>()

export default function MainRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeRoutes}
      />
      <Stack.Screen
        name="ConfigPlant"
        component={ConfigPlant}
      />
    </Stack.Navigator>
  )
}

function HomeRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="NewPlant"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="NewPlant"
        component={NewPlant}
        options={{
          tabBarLabel: 'Adicionar planta',
          tabBarIcon: ({ color }) => (
            <PlusCircle color={color} size={20} />
          ),
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {
            fontSize: 15,
            fontFamily: 'Jost-Medium'
          },
          tabBarActiveTintColor: '#32B768',
          tabBarInactiveTintColor: '#AAB2AD',
          tabBarButton: (props) => <TouchableRipple {...props} />
        }}
      />
      <Tab.Screen
        name="MyPlants"
        component={MyPlants}
        options={{
          tabBarLabel: 'Minhas plantinhas',
          tabBarIcon: ({ color }) => (
            <ListDashes color={color} size={20} />
          ),
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {
            fontSize: 15,
            fontFamily: 'Jost-Medium'
          },
          tabBarActiveTintColor: '#32B768',
          tabBarInactiveTintColor: '#AAB2AD',
          tabBarButton: (props) => <TouchableRipple {...props} />
        }}
      />
    </Tab.Navigator>
  )
}