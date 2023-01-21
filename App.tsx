import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/routes/auth';
import Routes from './src/routes';
import { useFonts } from 'expo-font';
import { Loading } from './src/components/Loading';

export default function App() {
  const [customFonts] = useFonts({
    'Jost-Regular': require('./assets/Jost-Regular.ttf'),
    'Jost-Medium': require('./assets/Jost-Medium.ttf'),
    'Jost-SemiBold': require('./assets/Jost-SemiBold.ttf')
  })

  if (!customFonts) return <Loading />

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
