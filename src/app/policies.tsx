import { router } from 'expo-router';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function PoliciesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Перевірка наявності полісів</Text>

      <View style={styles.section}>
        <Text style={styles.bold}>1-ий учасник ДТП</Text>
        <Text>Ідентифікаційний код чи ЄДРПОУ власника полісу</Text>
        <TextInput style={styles.input} placeholder="ВВЕДІТЬ КОД" />
        <Text style={styles.link}>Як знайти код у полісі?</Text>

        <Text>Державний номер автомобіля</Text>
        <TextInput style={styles.input} placeholder="ВВЕДІТЬ НОМЕР" />
      </View>

      <View style={styles.section}>
        <Text style={styles.bold}>2-ий учасник ДТП</Text>
        <Text>Ідентифікаційний код чи ЄДРПОУ власника полісу</Text>
        <TextInput style={styles.input} placeholder="ВВЕДІТЬ КОД" />
        <Text style={styles.link}>Як знайти код у полісі?</Text>

        <Text>Державний номер автомобіля</Text>
        <TextInput style={styles.input} placeholder="ВВЕДІТЬ НОМЕР" />
      </View>

      <Button
        title="ПРОДОВЖИТИ"
        onPress={() => {
          Alert.alert('Успіх', 'Європротокол оформлено!');
          router.replace('/');
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    gap: 8,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
  },
  link: {
    color: 'blue',
    fontSize: 12,
  },
});

