import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { THEME } from './src/styles/theme';

import { SignIn } from './src/screens/SignIn';
import { Loading } from './src/components/Loading';

/* APP */
export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      { fontsLoaded ? <SignIn /> : <Loading/> }
    </NativeBaseProvider>
    
  );
}


