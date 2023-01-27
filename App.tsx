import { StatusBar } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts,Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import theme from '@theme/';
import { Groups } from '@screens/Groups';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  return (
    <ThemeProvider theme={theme}>
        <StatusBar barStyle='light-content' translucent backgroundColor="transparent"></StatusBar>
        {fontsLoaded ? <Groups /> : <ActivityIndicator/> }
    </ThemeProvider>
  );
}