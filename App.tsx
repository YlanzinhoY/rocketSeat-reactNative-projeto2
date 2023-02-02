import { StatusBar } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts,Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import theme from '@theme/';
import { Routes } from './src/routes';
import { NewGroup } from '@screens/NewGroup';
import { Groups } from '@screens/Groups'
import { Players } from '@screens/Players'

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  return (
    <ThemeProvider theme={theme}>
        <StatusBar barStyle='light-content' translucent backgroundColor="transparent"></StatusBar>
        {fontsLoaded ? <Routes /> : <ActivityIndicator/> }
    </ThemeProvider>
  );
}