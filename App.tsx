
import {useFonts, Roboto_700Bold, Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto'

import { Center, NativeBaseProvider, Text, StatusBar  } from 'native-base';
import { THEME } from './src/styles/theme';

import { Loading } from './src/components/Loading/loading';
import { SingIn } from './src/components/SingIn/singin';

export default function App() {
    const [fontsLoad] = useFonts({Roboto_700Bold, Roboto_400Regular, Roboto_500Medium})


  return (
    <NativeBaseProvider  theme={THEME} >
      <Center bg='gray.900' flex={1}>
        {
          fontsLoad ? <SingIn/> : <Loading></Loading>
        }
        
      
      </Center>
      <StatusBar
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
      />
      
    </NativeBaseProvider>
  );
}


