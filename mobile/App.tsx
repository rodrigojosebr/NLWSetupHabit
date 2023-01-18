import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold, useFonts
} from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fonstsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if (!fonstsLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tamu Aqui!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
    fontWeight: 'bold',
    color: '#ff0000',
  },
});
