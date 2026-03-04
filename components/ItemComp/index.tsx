import { EtudiantReq } from "@/store/etudiants"
import { borderRadius } from "@/styles/border"
import { col1, col2, col3 } from "@/styles/colors"
import { direction, display, gap } from "@/styles/display"
import { padding } from "@/styles/spacing"
import { router } from "expo-router"
import { Venus } from 'lucide-react-native'
import { Pressable, Text, View } from "react-native"
interface ItemCompProps {
  item: EtudiantReq
}
const ItemComp = (props: ItemCompProps) => {
  return <Pressable
    onPress={() => router.push(`/edit/${props.item.id}`)}
    style={[display['flex'], direction['row'], gap(20), padding({ value1: 10 }), borderRadius(20), {
      backgroundColor: col3,
      display: 'flex',
      alignItems: 'center',
      marginBottom:10
    }]}
  >
    <View
      style={{
        width: 40,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: col2,
        borderRadius: 50,
      }}
    ><Venus color={col1} /></View>
    <View>
      <Text style={{ fontSize: 18, fontWeight: '700', color: col2 }}>{props.item.nom + " " + props.item.prenom}</Text>
      <Text style={{ fontSize: 12, color: col2 }}>{props.item.adresse} </Text>
      <Text style={{ fontSize: 12, color: col2 }}>{props.item.email} </Text>
    </View>
  </Pressable>
}

export default ItemComp