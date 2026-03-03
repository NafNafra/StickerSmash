import { useEtudiantStore } from '@/store/etudiants';
import { router } from 'expo-router';
import { FlatList, Pressable, Text, View } from "react-native";
export default function Index() {
  const {etudiants} = useEtudiantStore()
  return (
    <View
      style={{
        padding: 20,
        display: 'flex'
      }}
    >
      <Text style={{
        flex: 1,
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
        textDecorationLine: 'underline'
      }}>Gestions des etudiants</Text>
      <Pressable
        onPress={() => router.push('/add')}
        style={{
          backgroundColor:'green'
        }}
      >
        <Text>To add page {etudiants.length}</Text>
      </Pressable>
      
      <FlatList
        data={etudiants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ margin: 5 }}>{item.nom} {item.prenom} - {item.genre} - {item.adresse} - {item.email}</Text>
        )}
      />

    </View>
  );
}
