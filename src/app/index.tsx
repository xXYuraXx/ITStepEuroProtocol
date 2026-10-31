import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ЕЛЕКТРОННИЙ ЄВРОПРОТОКОЛ</Text>
      <Button title="ОФОРМИТИ" onPress={() => router.push('/conditions')} />
      <Text style={styles.link}>Повна версія системи</Text>
      <Text style={styles.footer}>МТСБУ</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    fontSize: 60,
  },
  link: {
    textDecorationLine: 'underline',
  },
  footer: {
    marginTop: 30,
    fontWeight: 'bold',
  },
});
