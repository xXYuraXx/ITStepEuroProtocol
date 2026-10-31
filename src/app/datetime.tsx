import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function DateTimeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Дата та час події</Text>

      <Text style={styles.datetime}>Дата та час події: 1 червня о 15:15</Text>

      <Button title="ПРОДОВЖИТИ" onPress={() => router.push('/policies')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  datetime: {
    fontSize: 18,
  },
});

