
import { useFonts, Roboto_700Bold, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'

import { Center, NativeBaseProvider, Text, StatusBar } from 'native-base';
import { THEME } from './src/styles/theme';

import { Loading } from './src/components/Loading';
import { Pools } from './src/screens/Pools';
import { AuthContextProvider } from './src/contexts/authContexts';

export default function App() {
  const [fontsLoad] = useFonts({ Roboto_700Bold, Roboto_400Regular, Roboto_500Medium })


  return (

    <NativeBaseProvider theme={THEME} >
      <AuthContextProvider>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        {
          fontsLoad ? <Pools/>: <Loading></Loading>
        }
      </AuthContextProvider>
    </NativeBaseProvider>



  );
}


