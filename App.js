import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from './screens/onbording';

import { configrationStore } from "./redux/store/store";
import { Provider } from 'react-redux';
const store = configrationStore()


export default function App() {
  return (
    <Provider store={store}>
      <StatusBar hidden={true} />
      <OnboardingScreen/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
