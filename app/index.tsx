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
        style={[display['flex'], direction['row'], justify['space-between'], {alignItems:'center',marginVertical: 20}]}
      >
        <Text style={{
          fontSize: 25,
          textAlign: 'center',
          fontWeight:'900',
          color:col2,
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
        :
        <View><Text style={{ textAlign: 'center' }}>No data</Text></View>
      }
    </View>
  );
}
