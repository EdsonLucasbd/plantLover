import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/routes/auth';
import Routes from './src/routes';
import { useFonts } from 'expo-font';
import { Loading } from './src/components/Loading';
import { StatusBar } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/graphql/client';

export default function App() {
  const [customFonts] = useFonts({
    'Jost-Light': require('./assets/fonts/Jost-Light.ttf'),
    'Jost-Regular': require('./assets/fonts/Jost-Regular.ttf'),
    'Jost-Medium': require('./assets/fonts/Jost-Medium.ttf'),
    'Jost-SemiBold': require('./assets/fonts/Jost-SemiBold.ttf')
  })

  if (!customFonts) return <Loading />

  return (
    <NavigationContainer>
      <AuthProvider>
        <ApolloProvider client={client}>
          <StatusBar translucent backgroundColor='transparent' />
          <Routes />
        </ApolloProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
