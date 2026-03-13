import ItemComp from '@/components/ItemComp';
import CrudButton from '@/pieces/crudButton';
import { useEtudiantStore } from '@/store/etudiants';
import { col2, col4 } from '@/styles/colors';
import { direction, display, gap, justify } from '@/styles/display';
import { size } from '@/styles/size';
import { router } from 'expo-router';
import { Plus } from 'lucide-react-native';
import { FlatList, Text, View } from "react-native";
export default function Index() {
  const { etudiants } = useEtudiantStore()
  return (
    <View
      style={[
        size({ height: `${100}%` }),
        {
          backgroundColor: col4
        }
      ]} 
    >
      <View
        style={[display['flex'], direction['row'], justify['space-between'], { alignItems: 'center', marginVertical: 20 }]}
      >
        <Text style={{
          fontSize: 25,
          textAlign: 'center',
          fontWeight: '900',
          color: col2,
        }}>Gestions des etudiants
        </Text>
        <CrudButton
          variant={'principal'}
          onPress={() => router.push('/add')}
          style={{
            width: 40
          }}
        >
          <Plus color={'white'} size={18} />
        </CrudButton>

      </View>


      {etudiants.length > 0 ?
        <>
          <FlatList
            data={etudiants}
            style={[display['flex'], direction['column'], gap(10)]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ItemComp
                item={item}
              />
            )}
          />
          <View>
            <View style={[display['flex'], direction['row']]}>
              <Text style={{ maxWidth: '20%' , width:'100%' , borderColor:'black', borderWidth:1}}>id</Text>
              <Text style={{ maxWidth: '40%' , width:'100%' , borderColor:'black', borderWidth:1 }}>nom prenoms</Text>
              <Text style={{ maxWidth: '20%' , width:'100%' , borderColor:'black', borderWidth:1 }}>adresse</Text>
              <Text style={{ maxWidth: '20%' , width:'100%' , borderColor:'black', borderWidth:1 }}>email</Text>
            </View>
            {etudiants.map((item, index) => (
              <View key={index}  style={[display['flex'], direction['row']]}>
                <Text style={{ maxWidth: '20%' , width:'100%' , borderColor:'black', borderWidth:1}}>{item.id}</Text>
                <Text style={{ maxWidth: '40%' , width:'100%' , borderColor:'black', borderWidth:1 }}>{item.nom + " " + item.prenom}</Text>
                <Text style={{ maxWidth: '20%' , width:'100%' , borderColor:'black', borderWidth:1 }}>{item.adresse}</Text>
                <Text style={{ maxWidth: '20%' , width:'100%' , borderColor:'black', borderWidth:1 }}>{item.email}</Text>
              </View>
            ))}

          </View>
        </>
        :
        <View><Text className='bg-red-500' style={{ textAlign: 'center' }}>No data</Text></View>
      }
    </View>
  );
}
