import { router } from 'expo-router';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ConditionsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Умови оформлення</Text>
      <Text>
        Європротокол заповнюється учасниками ДТП в одному екземплярі на будь-якому
        мобільному пристрої з камерою та виходом в Інтернет.
      </Text>

      <View style={styles.list}>
        <Text>В ДТП приймають участь тільки 2 учасники</Text>
        <Text>Пошкоджені тільки автомобілі, інше майно не пошкоджено</Text>
        <Text>Немає травмованих або загиблих</Text>
        <Text>Водії не вживали алкоголь або наркотичні речовини</Text>
        <Text>Водії не вживали лікарські засоби (препарати) що знижують увагу</Text>
        <Text>Водії мають діючи поліси ОСЦПВ</Text>
        <Text>Водії дійшли згоди щодо обставин ДТП</Text>
        <Text>Водії мають при собі справні мобільні телефони</Text>
        <Text>Автомобілі без причепів</Text>
      </View>

      <Text style={styles.small}>
        Учасники ДТП надають згоду на обробку персональних даних та даних щодо обставин ДТП
      </Text>

      <Button title="ПРОДОВЖИТИ" onPress={() => router.push('/datetime')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {
    gap: 10,
    marginVertical: 10,
  },
  small: {
    fontSize: 12,
    color: 'gray',
  },
});

